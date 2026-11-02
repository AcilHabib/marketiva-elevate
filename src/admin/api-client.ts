import type {
  AdminProject,
  AdminStaffMember,
  AdminState,
  AdminTestimonial,
  GalleryCategory,
  Subcategory,
  TrustedBrand,
} from "./types";

async function parseError(response: Response) {
  try {
    const data = (await response.json()) as { error?: string };
    return data.error || response.statusText || "Request failed";
  } catch {
    return response.statusText || "Request failed";
  }
}

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json() as Promise<T>;
}

export function fetchAdminContent() {
  return request<AdminState>("/api/admin/content");
}

export function apiUpsertProject(project: AdminProject) {
  return request<AdminProject>("/api/admin/projects", {
    method: "PUT",
    body: JSON.stringify(project),
  });
}

export function apiRemoveProject(id: string) {
  return request<{ ok: true }>(`/api/admin/projects?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export function apiUpsertBrand(brand: TrustedBrand) {
  return request<TrustedBrand>("/api/admin/brands", {
    method: "PUT",
    body: JSON.stringify(brand),
  });
}

export function apiRemoveBrand(id: string) {
  return request<{ ok: true }>(`/api/admin/brands?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export function apiUpsertTestimonial(testimonial: AdminTestimonial) {
  return request<AdminTestimonial>("/api/admin/testimonials", {
    method: "PUT",
    body: JSON.stringify(testimonial),
  });
}

export function apiRemoveTestimonial(id: string) {
  return request<{ ok: true }>(`/api/admin/testimonials?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export function apiUpsertStaff(member: AdminStaffMember) {
  return request<AdminStaffMember>("/api/admin/staff", {
    method: "PUT",
    body: JSON.stringify(member),
  });
}

export function apiRemoveStaff(id: string) {
  return request<{ ok: true }>(`/api/admin/staff?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export function apiAddSubcategory(category: GalleryCategory, name: string) {
  return request<Subcategory>("/api/admin/subcategories", {
    method: "POST",
    body: JSON.stringify({ category, name }),
  });
}

export function apiRenameSubcategory(id: string, name: string) {
  return request<Subcategory>("/api/admin/subcategories", {
    method: "PUT",
    body: JSON.stringify({ id, name }),
  });
}

export function apiRemoveSubcategory(id: string) {
  return request<{ ok: true }>(`/api/admin/subcategories?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export function apiLogin(username: string, password: string) {
  return request<{ ok: true; username: string }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

export function apiLogout() {
  return request<{ ok: true }>("/api/auth/logout", { method: "POST" });
}

export function apiMe() {
  return request<{ username: string }>("/api/auth/me");
}
