import { buildSeedState } from "@/admin/seed";
import type {
  AdminProject,
  AdminStaffMember,
  AdminState,
  AdminTestimonial,
  Subcategory,
  TrustedBrand,
} from "@/admin/types";
import { connectMongo } from "@/lib/mongodb";
import {
  BrandModel,
  ProjectModel,
  StaffModel,
  SubcategoryModel,
  TestimonialModel,
} from "@/models/content";

function leanId<T extends { id: string }>(docs: Array<T & { _id?: unknown }>): T[] {
  return docs.map(({ _id, ...rest }) => rest as T);
}

export async function getAdminContent(): Promise<AdminState> {
  await connectMongo();
  const [projects, subcategories, brands, testimonials, staff] = await Promise.all([
    ProjectModel.find().sort({ updatedAt: -1 }).lean(),
    SubcategoryModel.find().lean(),
    BrandModel.find().sort({ updatedAt: -1 }).lean(),
    TestimonialModel.find().sort({ updatedAt: -1 }).lean(),
    StaffModel.find().sort({ updatedAt: -1 }).lean(),
  ]);

  return {
    projects: leanId(projects as unknown as AdminProject[]),
    subcategories: leanId(subcategories as unknown as Subcategory[]),
    brands: leanId(brands as unknown as TrustedBrand[]),
    testimonials: leanId(testimonials as unknown as AdminTestimonial[]),
    staff: leanId(staff as unknown as AdminStaffMember[]),
  };
}

export async function seedAdminContentIfEmpty() {
  await connectMongo();
  const [projectCount, brandCount, testimonialCount, staffCount] = await Promise.all([
    ProjectModel.countDocuments(),
    BrandModel.countDocuments(),
    TestimonialModel.countDocuments(),
    StaffModel.countDocuments(),
  ]);

  if (projectCount + brandCount + testimonialCount + staffCount > 0) {
    return { seeded: false, reason: "already-has-data" as const };
  }

  const seed = buildSeedState();
  await Promise.all([
    seed.projects.length ? ProjectModel.insertMany(seed.projects) : Promise.resolve(),
    seed.subcategories.length ? SubcategoryModel.insertMany(seed.subcategories) : Promise.resolve(),
    seed.brands.length ? BrandModel.insertMany(seed.brands) : Promise.resolve(),
    seed.testimonials.length ? TestimonialModel.insertMany(seed.testimonials) : Promise.resolve(),
    seed.staff.length ? StaffModel.insertMany(seed.staff) : Promise.resolve(),
  ]);

  return { seeded: true as const, counts: {
    projects: seed.projects.length,
    subcategories: seed.subcategories.length,
    brands: seed.brands.length,
    testimonials: seed.testimonials.length,
    staff: seed.staff.length,
  }};
}

export async function replaceCollection<T extends { id: string }>(
  model: {
    deleteMany: (filter: object) => Promise<unknown>;
    insertMany: (docs: T[]) => Promise<unknown>;
  },
  docs: T[],
) {
  await connectMongo();
  await model.deleteMany({});
  if (docs.length) await model.insertMany(docs);
}
