"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  apiAddSubcategory,
  apiRemoveBrand,
  apiRemoveProject,
  apiRemoveStaff,
  apiRemoveSubcategory,
  apiRemoveTestimonial,
  apiRenameSubcategory,
  apiUpsertBrand,
  apiUpsertProject,
  apiUpsertStaff,
  apiUpsertTestimonial,
  fetchAdminContent,
} from "./api-client";
import type {
  AdminProject,
  AdminStaffMember,
  AdminState,
  AdminTestimonial,
  GalleryCategory,
  Subcategory,
  TrustedBrand,
} from "./types";

const EMPTY_STATE: AdminState = {
  projects: [],
  subcategories: [],
  brands: [],
  testimonials: [],
  staff: [],
};

type AdminStoreContextValue = {
  state: AdminState;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  upsertProject: (project: AdminProject) => Promise<void>;
  removeProject: (id: string) => Promise<void>;
  upsertBrand: (brand: TrustedBrand) => Promise<void>;
  removeBrand: (id: string) => Promise<void>;
  upsertTestimonial: (testimonial: AdminTestimonial) => Promise<void>;
  removeTestimonial: (id: string) => Promise<void>;
  upsertStaffMember: (member: AdminStaffMember) => Promise<void>;
  removeStaffMember: (id: string) => Promise<void>;
  addSubcategory: (category: GalleryCategory, name: string) => Promise<Subcategory>;
  renameSubcategory: (id: string, name: string) => Promise<void>;
  removeSubcategory: (id: string) => Promise<void>;
};

const AdminStoreContext = createContext<AdminStoreContextValue | null>(null);

export function AdminStoreProvider({
  children,
  enabled = true,
}: {
  children: ReactNode;
  enabled?: boolean;
}) {
  const [state, setState] = useState<AdminState>(EMPTY_STATE);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!enabled) return;
    setLoading(true);
    setError(null);
    try {
      const next = await fetchAdminContent();
      setState(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load admin data");
      setState(EMPTY_STATE);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    if (enabled) void refresh();
    else {
      setState(EMPTY_STATE);
      setLoading(false);
    }
  }, [enabled, refresh]);

  const value = useMemo<AdminStoreContextValue>(
    () => ({
      state,
      loading,
      error,
      refresh,
      async upsertProject(project) {
        await apiUpsertProject(project);
        await refresh();
      },
      async removeProject(id) {
        await apiRemoveProject(id);
        await refresh();
      },
      async upsertBrand(brand) {
        await apiUpsertBrand(brand);
        await refresh();
      },
      async removeBrand(id) {
        await apiRemoveBrand(id);
        await refresh();
      },
      async upsertTestimonial(testimonial) {
        await apiUpsertTestimonial(testimonial);
        await refresh();
      },
      async removeTestimonial(id) {
        await apiRemoveTestimonial(id);
        await refresh();
      },
      async upsertStaffMember(member) {
        await apiUpsertStaff(member);
        await refresh();
      },
      async removeStaffMember(id) {
        await apiRemoveStaff(id);
        await refresh();
      },
      async addSubcategory(category, name) {
        const created = await apiAddSubcategory(category, name);
        await refresh();
        return created;
      },
      async renameSubcategory(id, name) {
        await apiRenameSubcategory(id, name);
        await refresh();
      },
      async removeSubcategory(id) {
        await apiRemoveSubcategory(id);
        await refresh();
      },
    }),
    [state, loading, error, refresh],
  );

  return <AdminStoreContext.Provider value={value}>{children}</AdminStoreContext.Provider>;
}

export function useAdminStoreApi() {
  const ctx = useContext(AdminStoreContext);
  if (!ctx) throw new Error("useAdminStoreApi must be used within AdminStoreProvider");
  return ctx;
}

/** Compatibility helper — returns the content state slice used by pages. */
export function useAdminStore(): AdminState {
  return useAdminStoreApi().state;
}

export function useAdminStoreStatus() {
  const { loading, error, refresh } = useAdminStoreApi();
  return { loading, error, refresh };
}

export async function upsertProject(project: AdminProject) {
  return apiUpsertProject(project).then(() => undefined);
}

export async function removeProject(id: string) {
  return apiRemoveProject(id).then(() => undefined);
}

export async function upsertBrand(brand: TrustedBrand) {
  return apiUpsertBrand(brand).then(() => undefined);
}

export async function removeBrand(id: string) {
  return apiRemoveBrand(id).then(() => undefined);
}

export async function upsertTestimonial(testimonial: AdminTestimonial) {
  return apiUpsertTestimonial(testimonial).then(() => undefined);
}

export async function removeTestimonial(id: string) {
  return apiRemoveTestimonial(id).then(() => undefined);
}

export async function upsertStaffMember(member: AdminStaffMember) {
  return apiUpsertStaff(member).then(() => undefined);
}

export async function removeStaffMember(id: string) {
  return apiRemoveStaff(id).then(() => undefined);
}

export async function addSubcategory(category: GalleryCategory, name: string) {
  return apiAddSubcategory(category, name);
}

export async function renameSubcategory(id: string, name: string) {
  return apiRenameSubcategory(id, name).then(() => undefined);
}

export async function removeSubcategory(id: string) {
  return apiRemoveSubcategory(id).then(() => undefined);
}
