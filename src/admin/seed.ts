import { clients, team, testimonialsMeta } from "@/components/content";
import {
  designProjects,
  photographyProjects,
  softwareProjects,
  videographyProjects,
  voixOffProjects,
} from "@/components/projects";
import { translations } from "@/i18n/translations";
import { createId, slugify } from "./id";
import type {
  AdminProject,
  AdminStaffMember,
  AdminState,
  AdminTestimonial,
  GalleryCategory,
  Subcategory,
  TrustedBrand,
} from "./types";

const videoTitles = translations.fr.projectsPage.videos;
const testimonialCopy = translations.fr.testimonials.items;
const teamCopy = translations.fr.team;
const NO_EXPERIENCE = new Set(["salma", "imene", "dhouha"]);

function parseYears(label?: string): number | null {
  if (!label) return null;
  const match = label.match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

function now() {
  return new Date().toISOString();
}

function ensureSubcategory(
  map: Map<string, Subcategory>,
  category: GalleryCategory,
  name: string,
): string {
  const key = `${category}:${name.toLowerCase()}`;
  const existing = map.get(key);
  if (existing) return existing.id;
  const subcategory: Subcategory = {
    id: createId(`sub_${slugify(name) || "cat"}`),
    name,
    category,
  };
  map.set(key, subcategory);
  return subcategory.id;
}

export function buildSeedState(): AdminState {
  const stamp = now();
  const subcategoryMap = new Map<string, Subcategory>();
  const projects: AdminProject[] = [];

  for (const item of softwareProjects) {
    projects.push({
      id: item.id,
      name: item.name,
      description: item.domain,
      category: "software",
      logoUrl: item.logo,
      linkUrl: item.url,
      createdAt: stamp,
      updatedAt: stamp,
    });
  }

  for (const item of videographyProjects) {
    projects.push({
      id: item.id,
      name: videoTitles[item.id] ?? item.id,
      description: "",
      category: "videography",
      videoUrl: item.src,
      thumbnailUrl: item.poster,
      orientation: item.orientation,
      createdAt: stamp,
      updatedAt: stamp,
    });
  }

  for (const item of voixOffProjects) {
    projects.push({
      id: item.id,
      name: videoTitles[item.id] ?? item.id,
      description: "",
      category: "voixOff",
      videoUrl: item.src,
      thumbnailUrl: item.poster,
      orientation: item.orientation,
      createdAt: stamp,
      updatedAt: stamp,
    });
  }

  for (const item of designProjects) {
    const subcategoryId = ensureSubcategory(subcategoryMap, "design", item.client || "General");
    projects.push({
      id: item.id,
      name: item.name,
      description: item.client,
      category: "design",
      imageUrl: item.src,
      subcategoryId,
      orientation: item.orientation,
      createdAt: stamp,
      updatedAt: stamp,
    });
  }

  for (const item of photographyProjects) {
    const subcategoryId = ensureSubcategory(
      subcategoryMap,
      "photography",
      item.client || "General",
    );
    projects.push({
      id: item.id,
      name: item.name,
      description: item.client,
      category: "photography",
      imageUrl: item.src,
      subcategoryId,
      orientation: item.orientation,
      createdAt: stamp,
      updatedAt: stamp,
    });
  }

  const brands: TrustedBrand[] = clients
    .filter((c): c is typeof c & { logo: string } => Boolean(c.logo))
    .map((c) => ({
      id: c.id,
      name: c.name,
      logoUrl: c.logo,
      createdAt: stamp,
      updatedAt: stamp,
    }));

  const testimonials: AdminTestimonial[] = testimonialsMeta.map((meta) => {
    const item = testimonialCopy[meta.id];
    return {
      id: meta.id,
      name: item?.name ?? meta.id,
      quote: item?.quote ?? "",
      occupation: item?.role ?? "",
      company: item?.company ?? "",
      createdAt: stamp,
      updatedAt: stamp,
    };
  });

  const staff: AdminStaffMember[] = team.map((member) => {
    const experienceLabel = NO_EXPERIENCE.has(member.id)
      ? undefined
      : (teamCopy.experienceByMember[member.id] ?? teamCopy.experienceDefault);
    return {
      id: member.id,
      name: member.name,
      skill: teamCopy.roles[member.id] ?? "",
      yearsExperience: parseYears(experienceLabel),
      photoUrl: member.photo ?? "",
      createdAt: stamp,
      updatedAt: stamp,
    };
  });

  return {
    projects,
    subcategories: Array.from(subcategoryMap.values()),
    brands,
    testimonials,
    staff,
  };
}
