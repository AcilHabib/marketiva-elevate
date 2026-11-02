import { useSyncExternalStore } from "react";
import { buildSeedState } from "./seed";
import { createId } from "./id";
import type {
  AdminProject,
  AdminState,
  AdminTestimonial,
  GalleryCategory,
  Subcategory,
  TrustedBrand,
} from "./types";

const STORAGE_KEY = "am-admin-store-v1";

let memoryState: AdminState | null = null;
const listeners = new Set<() => void>();

function canUseStorage() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

function notify() {
  listeners.forEach((listener) => listener());
}

function readState(): AdminState {
  if (memoryState) return memoryState;

  if (canUseStorage()) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AdminState;
        if (
          parsed &&
          Array.isArray(parsed.projects) &&
          Array.isArray(parsed.subcategories) &&
          Array.isArray(parsed.brands) &&
          Array.isArray(parsed.testimonials)
        ) {
          memoryState = parsed;
          return memoryState;
        }
      }
    } catch {
      // fall through to seed
    }
  }

  memoryState = buildSeedState();
  persist(memoryState);
  return memoryState;
}

function persist(state: AdminState) {
  memoryState = state;
  if (!canUseStorage()) {
    notify();
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("[admin store] Failed to persist state (quota?). Keeping in memory.", error);
  }
  notify();
}

function update(mutator: (current: AdminState) => AdminState) {
  const next = mutator(readState());
  persist(next);
}

export function getAdminState(): AdminState {
  return readState();
}

export function subscribeAdminStore(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const SERVER_SNAPSHOT: AdminState = {
  projects: [],
  subcategories: [],
  brands: [],
  testimonials: [],
};

export function useAdminStore(): AdminState {
  // Stable empty snapshot on the server to avoid localStorage hydration mismatches.
  return useSyncExternalStore(subscribeAdminStore, getAdminState, () => SERVER_SNAPSHOT);
}

export function resetAdminStore() {
  memoryState = buildSeedState();
  persist(memoryState);
}

export function upsertProject(project: AdminProject) {
  update((state) => {
    const index = state.projects.findIndex((p) => p.id === project.id);
    const projects =
      index >= 0
        ? state.projects.map((p, i) => (i === index ? project : p))
        : [project, ...state.projects];
    return { ...state, projects };
  });
}

export function removeProject(id: string) {
  update((state) => ({
    ...state,
    projects: state.projects.filter((p) => p.id !== id),
  }));
}

export function addSubcategory(category: GalleryCategory, name: string): Subcategory {
  const subcategory: Subcategory = {
    id: createId("sub"),
    name: name.trim(),
    category,
  };
  update((state) => ({
    ...state,
    subcategories: [...state.subcategories, subcategory],
  }));
  return subcategory;
}

export function renameSubcategory(id: string, name: string) {
  update((state) => ({
    ...state,
    subcategories: state.subcategories.map((s) => (s.id === id ? { ...s, name: name.trim() } : s)),
  }));
}

export function removeSubcategory(id: string) {
  update((state) => ({
    ...state,
    subcategories: state.subcategories.filter((s) => s.id !== id),
    projects: state.projects.map((p) =>
      p.subcategoryId === id ? { ...p, subcategoryId: undefined } : p,
    ),
  }));
}

export function upsertBrand(brand: TrustedBrand) {
  update((state) => {
    const index = state.brands.findIndex((b) => b.id === brand.id);
    const brands =
      index >= 0 ? state.brands.map((b, i) => (i === index ? brand : b)) : [brand, ...state.brands];
    return { ...state, brands };
  });
}

export function removeBrand(id: string) {
  update((state) => ({
    ...state,
    brands: state.brands.filter((b) => b.id !== id),
  }));
}

export function upsertTestimonial(testimonial: AdminTestimonial) {
  update((state) => {
    const index = state.testimonials.findIndex((t) => t.id === testimonial.id);
    const testimonials =
      index >= 0
        ? state.testimonials.map((t, i) => (i === index ? testimonial : t))
        : [testimonial, ...state.testimonials];
    return { ...state, testimonials };
  });
}

export function removeTestimonial(id: string) {
  update((state) => ({
    ...state,
    testimonials: state.testimonials.filter((t) => t.id !== id),
  }));
}
