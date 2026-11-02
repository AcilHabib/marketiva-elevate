import { buildSeedState } from "@/admin/seed";
import { compareBySortOrder } from "@/admin/sort";
import type {
  AdminProject,
  AdminStaffMember,
  AdminState,
  AdminTestimonial,
  ReorderCollection,
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

type WithId = { id: string; sortOrder?: number | null; createdAt?: string; _id?: unknown };

function leanId<T extends { id: string }>(docs: Array<T & { _id?: unknown }>): T[] {
  return docs.map(({ _id, ...rest }) => rest as T);
}

const reorderModels = {
  projects: ProjectModel,
  brands: BrandModel,
  testimonials: TestimonialModel,
  staff: StaffModel,
} as const;

async function normalizeSortOrder<T extends WithId>(
  model: (typeof reorderModels)[ReorderCollection],
  docs: T[],
): Promise<T[]> {
  const sorted = [...docs].sort(compareBySortOrder);
  const needsBackfill = sorted.some(
    (doc) =>
      doc.sortOrder === undefined || doc.sortOrder === null || !Number.isFinite(doc.sortOrder),
  );

  if (needsBackfill) {
    await Promise.all(
      sorted.map((doc, index) => model.updateOne({ id: doc.id }, { $set: { sortOrder: index } })),
    );
    return leanId(sorted.map((doc, index) => ({ ...doc, sortOrder: index })));
  }

  return leanId(sorted.map((doc) => ({ ...doc, sortOrder: doc.sortOrder as number })));
}

export async function getAdminContent(): Promise<AdminState> {
  await connectMongo();
  const [projects, subcategories, brands, testimonials, staff] = await Promise.all([
    ProjectModel.find().lean(),
    SubcategoryModel.find().lean(),
    BrandModel.find().lean(),
    TestimonialModel.find().lean(),
    StaffModel.find().lean(),
  ]);

  const [normalizedProjects, normalizedBrands, normalizedTestimonials, normalizedStaff] =
    await Promise.all([
      normalizeSortOrder(ProjectModel, projects as unknown as AdminProject[]),
      normalizeSortOrder(BrandModel, brands as unknown as TrustedBrand[]),
      normalizeSortOrder(TestimonialModel, testimonials as unknown as AdminTestimonial[]),
      normalizeSortOrder(StaffModel, staff as unknown as AdminStaffMember[]),
    ]);

  return {
    projects: normalizedProjects,
    subcategories: leanId(subcategories as unknown as Subcategory[]),
    brands: normalizedBrands,
    testimonials: normalizedTestimonials,
    staff: normalizedStaff,
  };
}

export async function reorderCollection(collection: ReorderCollection, orderedIds: string[]) {
  await connectMongo();
  const model = reorderModels[collection];
  if (!model) throw new Error(`Unknown collection: ${collection}`);
  if (!Array.isArray(orderedIds) || orderedIds.length === 0) {
    throw new Error("orderedIds must be a non-empty array");
  }

  await Promise.all(
    orderedIds.map((id, index) =>
      model.updateOne({ id }, { $set: { sortOrder: index, updatedAt: new Date().toISOString() } }),
    ),
  );
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

  return {
    seeded: true as const,
    counts: {
      projects: seed.projects.length,
      subcategories: seed.subcategories.length,
      brands: seed.brands.length,
      testimonials: seed.testimonials.length,
      staff: seed.staff.length,
    },
  };
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
