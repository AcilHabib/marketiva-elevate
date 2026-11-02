"use client";

import { Pencil, Plus, Trash2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { AdminShell } from "@/admin/components/AdminLayout";
import { ConfirmDelete } from "@/admin/components/ConfirmDelete";
import { MediaUpload } from "@/admin/components/MediaUpload";
import { createId } from "@/admin/id";
import { useAdminStoreApi } from "@/admin/store";
import type { TrustedBrand } from "@/admin/types";
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

type BrandForm = {
  id?: string;
  name: string;
  logoUrl: string;
};

export function AdminTrustedByPage() {
  const { state, upsertBrand, removeBrand, loading } = useAdminStoreApi();
  const brands = state.brands;
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<BrandForm>({ name: "", logoUrl: "" });
  const [saving, setSaving] = useState(false);

  function openCreate() {
    setForm({ name: "", logoUrl: "" });
    setOpen(true);
  }

  function openEdit(brand: TrustedBrand) {
    setForm({ id: brand.id, name: brand.name, logoUrl: brand.logoUrl });
    setOpen(true);
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim()) {
      toast.error("Brand name is required (staff-only, not shown on the site).");
      return;
    }
    if (!form.logoUrl.trim()) {
      toast.error("Upload or paste a logo.");
      return;
    }

    const stamp = new Date().toISOString();
    const existing = form.id ? brands.find((b) => b.id === form.id) : undefined;
    const brand: TrustedBrand = {
      id: form.id ?? createId("brand"),
      name: form.name.trim(),
      logoUrl: form.logoUrl.trim(),
      createdAt: existing?.createdAt ?? stamp,
      updatedAt: stamp,
    };
    setSaving(true);
    try {
      await upsertBrand(brand);
      toast.success(form.id ? "Brand updated" : "Brand added");
      setOpen(false);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save brand");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AdminShell
      title="Trusted By"
      description="Manage client logos for the homepage marquee. Brand names are for staff only."
      actions={
        <Button type="button" onClick={openCreate}>
          <Plus className="h-4 w-4" />
          Add logo
        </Button>
      }
    >
      {loading ? <p className="mb-4 text-sm text-muted-foreground">Loading logos…</p> : null}
      {brands.length === 0 && !loading ? (
        <div className="rounded-2xl border border-dashed border-border px-6 py-16 text-center">
          <p className="text-sm text-muted-foreground">No logos yet.</p>
          <Button type="button" className="mt-4" onClick={openCreate}>
            <Plus className="h-4 w-4" />
            Add the first logo
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group rounded-2xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/30"
            >
              <div className="flex h-28 items-center justify-center rounded-xl border border-border/70 bg-background/50 p-3">
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain opacity-90"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{brand.name}</p>
                  <p className="text-[11px] text-muted-foreground">Staff label · not displayed</p>
                </div>
                <div className="flex shrink-0 gap-1">
                  <Button type="button" size="icon" variant="ghost" onClick={() => openEdit(brand)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <ConfirmDelete
                    description={`Remove “${brand.name}” from Trusted By?`}
                    onConfirm={() => {
                      void (async () => {
                        try {
                          await removeBrand(brand.id);
                          toast.success("Logo removed");
                        } catch (err) {
                          toast.error(err instanceof Error ? err.message : "Delete failed");
                        }
                      })();
                    }}
                  >
                    <Button type="button" size="icon" variant="ghost" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </ConfirmDelete>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{form.id ? "Edit brand logo" : "Add brand logo"}</DialogTitle>
            <DialogDescription>
              The name helps staff identify the logo; only the image appears on the site.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="brand-name">Brand name</Label>
              <Input
                id="brand-name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="e.g. Gharzouli"
                required
              />
            </div>
            <MediaUpload
              label="Logo"
              value={form.logoUrl}
              onChange={(logoUrl) => setForm((prev) => ({ ...prev, logoUrl }))}
              onClear={() => setForm((prev) => ({ ...prev, logoUrl: "" }))}
              aspectClassName="aspect-[16/10]"
            />
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? "Saving…" : form.id ? "Save changes" : "Add logo"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </AdminShell>
  );
}
