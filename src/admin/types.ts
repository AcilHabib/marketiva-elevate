export type ProjectCategory =
  "software" | "videography" | "design" | "photography" | "voixOff" | "prints";

export type GalleryCategory = "design" | "photography" | "prints";

export type MediaOrientation = "portrait" | "landscape" | "square";

export type Subcategory = {
  id: string;
  name: string;
  category: GalleryCategory;
};

export type AdminProject = {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  /** Lower numbers appear first on the site and in admin lists */
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  /** Software */
  logoUrl?: string;
  linkUrl?: string;
  /** Videography / voix-off */
  videoUrl?: string;
  thumbnailUrl?: string;
  orientation?: MediaOrientation;
  /** Design / photography / prints */
  imageUrl?: string;
  subcategoryId?: string;
};

export type TrustedBrand = {
  id: string;
  name: string;
  logoUrl: string;
  /** Lower numbers appear first on the site and in admin lists */
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type AdminTestimonial = {
  id: string;
  name: string;
  quote: string;
  occupation: string;
  company: string;
  /** Lower numbers appear first on the site and in admin lists */
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type AdminStaffMember = {
  id: string;
  name: string;
  /** Skill / role shown under the name on The People section */
  skill: string;
  /** Years of experience; null hides the experience line */
  yearsExperience: number | null;
  photoUrl: string;
  /** Lower numbers appear first on the site and in admin lists */
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type ReorderCollection = "projects" | "brands" | "testimonials" | "staff";

export type AdminState = {
  projects: AdminProject[];
  subcategories: Subcategory[];
  brands: TrustedBrand[];
  testimonials: AdminTestimonial[];
  staff: AdminStaffMember[];
};

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "software", label: "Software" },
  { id: "videography", label: "Videography" },
  { id: "design", label: "Design" },
  { id: "photography", label: "Photography" },
  { id: "voixOff", label: "Voice off" },
  { id: "prints", label: "Prints" },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = ["design", "photography", "prints"];

export function isGalleryCategory(category: ProjectCategory): category is GalleryCategory {
  return GALLERY_CATEGORIES.includes(category as GalleryCategory);
}

export function isVideoCategory(category: ProjectCategory): category is "videography" | "voixOff" {
  return category === "videography" || category === "voixOff";
}
