import type {
  AdminProject,
  AdminStaffMember,
  AdminTestimonial,
  Subcategory,
  TrustedBrand,
} from "@/admin/types";
import { getAdminContent } from "@/lib/admin-data";

export type PublicContent = {
  projects: AdminProject[];
  subcategories: Subcategory[];
  brands: TrustedBrand[];
  testimonials: AdminTestimonial[];
  staff: AdminStaffMember[];
};

/** Shared public + admin content from MongoDB. */
export async function getPublicContent(): Promise<PublicContent> {
  try {
    return await getAdminContent();
  } catch (error) {
    console.error("[getPublicContent]", error);
    return {
      projects: [],
      subcategories: [],
      brands: [],
      testimonials: [],
      staff: [],
    };
  }
}

export function projectsByCategory(projects: AdminProject[], category: AdminProject["category"]) {
  return projects.filter((p) => p.category === category);
}
