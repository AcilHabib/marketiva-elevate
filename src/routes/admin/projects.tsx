import { createFileRoute } from "@tanstack/react-router";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { AdminShell } from "@/admin/components/AdminLayout";
import { ConfirmDelete } from "@/admin/components/ConfirmDelete";
import { MediaUpload } from "@/admin/components/MediaUpload";
import { SubcategoryManager } from "@/admin/components/SubcategoryManager";
import { createId } from "@/admin/id";
import { readVideoAsObjectUrl } from "@/admin/media";
import { removeProject, upsertProject, useAdminStore } from "@/admin/store";
import {
  PROJECT_CATEGORIES,
  isGalleryCategory,
  isVideoCategory,
  type AdminProject,
  type GalleryCategory,
  type MediaOrientation,
  type ProjectCategory,
} from "@/admin/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/projects")({
  component: AdminProjectsPage,
});

type ProjectFormState = {
  id?: string;
  name: string;
  description: string;
  category: ProjectCategory;
  logoUrl: string;
  linkUrl: string;
  videoUrl: string;
  thumbnailUrl: string;
  imageUrl: string;
  subcategoryId: string;
  orientation: MediaOrientation;
};

const emptyForm = (category: ProjectCategory = "software"): ProjectFormState => ({
  name: "",
  description: "",
  category,
  logoUrl: "",
  linkUrl: "",
  videoUrl: "",
  thumbnailUrl: "",
  imageUrl: "",
  subcategoryId: "",
  orientation: category === "design" ? "portrait" : "portrait",
});

function projectToForm(project: AdminProject): ProjectFormState {
  return {
    id: project.id,
    name: project.name,
    description: project.description,
    category: project.category,
    logoUrl: project.logoUrl ?? "",
    linkUrl: project.linkUrl ?? "",
    videoUrl: project.videoUrl ?? "",
    thumbnailUrl: project.thumbnailUrl ?? "",
    imageUrl: project.imageUrl ?? "",
    subcategoryId: project.subcategoryId ?? "",
    orientation: project.orientation ?? "portrait",
  };
}

function previewFor(project: AdminProject): string | undefined {
  if (project.category === "software") return project.logoUrl;
  if (isVideoCategory(project.category)) return project.thumbnailUrl;
  return project.imageUrl;
}

function AdminProjectsPage() {
  const state = useAdminStore();
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<ProjectFormState>(emptyForm());

  const filtered = useMemo(() => {
    const list =
      filter === "all" ? state.projects : state.projects.filter((p) => p.category === filter);
    return [...list].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }, [state.projects, filter]);

  const subcategoryName = (id?: string) =>
    state.subcategories.find((s) => s.id === id)?.name ?? "—";

  function openCreate() {
    setForm(emptyForm(filter === "all" ? "software" : filter));
    setOpen(true);
  }

  function openEdit(project: AdminProject) {
    setForm(projectToForm(project));
    setOpen(true);
  }

  function setField<K extends keyof ProjectFormState>(key: K, value: ProjectFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onCategoryChange(category: ProjectCategory) {
    setForm((prev) => ({
      ...prev,
      category,
      subcategoryId: "",
      orientation:
        category === "design"
          ? prev.orientation === "landscape"
            ? "portrait"
            : prev.orientation
          : category === "photography" || isVideoCategory(category)
            ? prev.orientation === "square"
              ? "portrait"
              : prev.orientation
            : prev.orientation,
    }));
  }

  function validate(): string | null {
    if (!form.name.trim()) return "Project name is required.";
    if (form.category === "software") {
      if (!form.logoUrl.trim()) return "Software projects need a logo.";
      if (!form.linkUrl.trim()) return "Software projects need a link.";
    }
    if (isVideoCategory(form.category)) {
      if (!form.videoUrl.trim()) return "Add a video URL or upload a video.";
      if (!form.thumbnailUrl.trim()) return "Videography / voice-off projects need a thumbnail.";
    }
    if (isGalleryCategory(form.category)) {
      if (!form.imageUrl.trim()) return "Add an image for this project.";
      if (!form.subcategoryId) return "Choose a subcategory (create one if needed).";
    }
    return null;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    const stamp = new Date().toISOString();
    const project: AdminProject = {
      id: form.id ?? createId("project"),
      name: form.name.trim(),
      description: form.description.trim(),
      category: form.category,
      createdAt: form.id
        ? (state.projects.find((p) => p.id === form.id)?.createdAt ?? stamp)
        : stamp,
      updatedAt: stamp,
    };

    if (form.category === "software") {
      project.logoUrl = form.logoUrl.trim();
      project.linkUrl = form.linkUrl.trim();
    } else if (isVideoCategory(form.category)) {
      project.videoUrl = form.videoUrl.trim();
      project.thumbnailUrl = form.thumbnailUrl.trim();
      project.orientation = form.orientation === "square" ? "portrait" : form.orientation;
    } else {
      project.imageUrl = form.imageUrl.trim();
      project.subcategoryId = form.subcategoryId;
      project.orientation = form.orientation;
    }

    upsertProject(project);
    toast.success(form.id ? "Project updated" : "Project added");
    setOpen(false);
  }

  const galleryCategory: GalleryCategory | null = isGalleryCategory(form.category)
    ? form.category
    : null;

  const gallerySubs = galleryCategory
    ? state.subcategories.filter((s) => s.category === galleryCategory)
    : [];

  return (
    <AdminShell
      title="Projects"
      description="Add, edit, or remove portfolio work by category."
      actions={
        <Button type="button" onClick={openCreate}>
          <Plus className="h-4 w-4" />
          Add project
        </Button>
      }
    >
      <Tabs
        value={filter}
        onValueChange={(value) => setFilter(value as ProjectCategory | "all")}
        className="mb-6"
      >
        <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 bg-transparent p-0">
          <TabsTrigger
            value="all"
            className="rounded-full border border-border data-[state=active]:bg-primary/15"
          >
            All
          </TabsTrigger>
          {PROJECT_CATEGORIES.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="rounded-full border border-border data-[state=active]:bg-primary/15"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border px-6 py-16 text-center">
          <p className="text-sm text-muted-foreground">No projects in this category yet.</p>
          <Button type="button" className="mt-4" onClick={openCreate}>
            <Plus className="h-4 w-4" />
            Add the first project
          </Button>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card/40">
          <div className="hidden grid-cols-[72px_1.4fr_0.8fr_0.9fr_auto] gap-3 border-b border-border px-4 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground md:grid">
            <span>Media</span>
            <span>Name</span>
            <span>Category</span>
            <span>Subcategory</span>
            <span className="text-right">Actions</span>
          </div>
          <ul className="divide-y divide-border">
            {filtered.map((project) => {
              const preview = previewFor(project);
              const categoryLabel =
                PROJECT_CATEGORIES.find((c) => c.id === project.category)?.label ??
                project.category;
              return (
                <li
                  key={project.id}
                  className="grid grid-cols-[64px_1fr_auto] items-center gap-3 px-3 py-3 md:grid-cols-[72px_1.4fr_0.8fr_0.9fr_auto] md:px-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-border bg-background/60">
                    {preview ? (
                      <img src={preview} alt="" className="h-full w-full object-contain p-1" />
                    ) : (
                      <span className="text-[10px] text-muted-foreground">N/A</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-medium">{project.name}</p>
                    {project.description ? (
                      <p className="truncate text-xs text-muted-foreground">
                        {project.description}
                      </p>
                    ) : null}
                    <p className="mt-1 text-xs text-muted-foreground md:hidden">{categoryLabel}</p>
                  </div>
                  <p className="hidden text-sm text-muted-foreground md:block">{categoryLabel}</p>
                  <p className="hidden truncate text-sm text-muted-foreground md:block">
                    {isGalleryCategory(project.category)
                      ? subcategoryName(project.subcategoryId)
                      : "—"}
                  </p>
                  <div className="flex items-center justify-end gap-1">
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => openEdit(project)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <ConfirmDelete
                      description={`Delete project “${project.name}”? This only affects the admin mock store until the backend is connected.`}
                      onConfirm={() => {
                        removeProject(project.id);
                        toast.success("Project deleted");
                      }}
                    >
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </ConfirmDelete>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{form.id ? "Edit project" : "Add project"}</DialogTitle>
            <DialogDescription>
              Fields adapt to the selected category. Media is stored locally until MongoDB is ready.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="project-name">Project name</Label>
                <Input
                  id="project-name"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Category</Label>
                <Select
                  value={form.category}
                  onValueChange={(value) => onCategoryChange(value as ProjectCategory)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PROJECT_CATEGORIES.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {(isVideoCategory(form.category) || isGalleryCategory(form.category)) && (
                <div className="space-y-2">
                  <Label>Orientation</Label>
                  <Select
                    value={form.orientation}
                    onValueChange={(value) => setField("orientation", value as MediaOrientation)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="portrait">Portrait</SelectItem>
                      {(form.category === "photography" || isVideoCategory(form.category)) && (
                        <SelectItem value="landscape">Landscape</SelectItem>
                      )}
                      {form.category === "design" && <SelectItem value="square">Square</SelectItem>}
                      {form.category === "prints" && (
                        <>
                          <SelectItem value="landscape">Landscape</SelectItem>
                          <SelectItem value="square">Square</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="project-description">Description</Label>
                <Textarea
                  id="project-description"
                  value={form.description}
                  onChange={(e) => setField("description", e.target.value)}
                  rows={3}
                  placeholder="Short description (optional)"
                />
              </div>
            </div>

            {form.category === "software" ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <MediaUpload
                  label="Logo"
                  value={form.logoUrl}
                  onChange={(url) => setField("logoUrl", url)}
                  onClear={() => setField("logoUrl", "")}
                  aspectClassName="aspect-square max-h-40"
                />
                <div className="space-y-2">
                  <Label htmlFor="project-link">Website / app link</Label>
                  <Input
                    id="project-link"
                    type="url"
                    value={form.linkUrl}
                    onChange={(e) => setField("linkUrl", e.target.value)}
                    placeholder="https://"
                  />
                </div>
              </div>
            ) : null}

            {isVideoCategory(form.category) ? (
              <div className="space-y-4">
                <MediaUpload
                  label="Thumbnail"
                  value={form.thumbnailUrl}
                  onChange={(url) => setField("thumbnailUrl", url)}
                  onClear={() => setField("thumbnailUrl", "")}
                />
                <div className="space-y-2">
                  <Label htmlFor="project-video">Video URL</Label>
                  <Input
                    id="project-video"
                    value={form.videoUrl}
                    onChange={(e) => setField("videoUrl", e.target.value)}
                    placeholder="/videos/projects/example.mp4 or https://"
                  />
                  <div className="flex flex-wrap items-center gap-2">
                    <Label
                      htmlFor="project-video-file"
                      className={cn(
                        "inline-flex h-8 cursor-pointer items-center rounded-md border border-input bg-background px-3 text-xs font-medium shadow-sm hover:bg-accent",
                      )}
                    >
                      Upload video (session preview)
                    </Label>
                    <input
                      id="project-video-file"
                      type="file"
                      accept="video/*"
                      className="sr-only"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const url = readVideoAsObjectUrl(file);
                        setField("videoUrl", url);
                        toast.message(
                          "Video loaded for this session. Paste a permanent URL before backend upload.",
                        );
                        e.target.value = "";
                      }}
                    />
                    <p className="text-xs text-muted-foreground">
                      Blob uploads reset on refresh — prefer a stable URL for now.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            {galleryCategory ? (
              <div className="space-y-4">
                <MediaUpload
                  label="Image"
                  value={form.imageUrl}
                  onChange={(url) => setField("imageUrl", url)}
                  onClear={() => setField("imageUrl", "")}
                />
                <div className="space-y-2">
                  <Label>Subcategory</Label>
                  <Select
                    value={form.subcategoryId || undefined}
                    onValueChange={(value) => setField("subcategoryId", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {gallerySubs.map((sub) => (
                        <SelectItem key={sub.id} value={sub.id}>
                          {sub.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <SubcategoryManager
                  category={galleryCategory}
                  subcategories={state.subcategories}
                />
              </div>
            ) : null}

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">{form.id ? "Save changes" : "Create project"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </AdminShell>
  );
}
