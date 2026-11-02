"use client";

import { Pencil, Plus, Trash2 } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { AdminShell } from "@/admin/components/AdminLayout";
import { ConfirmDelete } from "@/admin/components/ConfirmDelete";
import { MediaUpload } from "@/admin/components/MediaUpload";
import { ReorderControls } from "@/admin/components/ReorderControls";
import { createId } from "@/admin/id";
import { compareBySortOrder, moveOrderedIds, nextSortOrder } from "@/admin/sort";
import { useAdminStoreApi } from "@/admin/store";
import type { AdminStaffMember } from "@/admin/types";
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

type StaffForm = {
  id?: string;
  name: string;
  skill: string;
  yearsExperience: string;
  photoUrl: string;
};

const emptyForm = (): StaffForm => ({
  name: "",
  skill: "",
  yearsExperience: "",
  photoUrl: "",
});

function formatExperience(years: number | null) {
  if (years === null || Number.isNaN(years)) return "Not shown";
  return `${years}+ years`;
}

export function AdminStaffPage() {
  const { state, upsertStaffMember, removeStaffMember, reorder, loading } = useAdminStoreApi();
  const staff = useMemo(() => [...state.staff].sort(compareBySortOrder), [state.staff]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<StaffForm>(emptyForm());
  const [saving, setSaving] = useState(false);
  const [reordering, setReordering] = useState(false);

  async function moveStaff(index: number, direction: "up" | "down") {
    const orderedIds = moveOrderedIds(
      staff.map((m) => m.id),
      index,
      direction,
    );
    if (orderedIds === staff.map((m) => m.id)) return;
    setReordering(true);
    try {
      await reorder("staff", orderedIds);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to reorder");
    } finally {
      setReordering(false);
    }
  }

  function openCreate() {
    setForm(emptyForm());
    setOpen(true);
  }

  function openEdit(member: AdminStaffMember) {
    setForm({
      id: member.id,
      name: member.name,
      skill: member.skill,
      yearsExperience:
        member.yearsExperience === null || member.yearsExperience === undefined
          ? ""
          : String(member.yearsExperience),
      photoUrl: member.photoUrl,
    });
    setOpen(true);
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim()) {
      toast.error("Name is required.");
      return;
    }
    if (!form.skill.trim()) {
      toast.error("Skill / role is required.");
      return;
    }
    if (!form.photoUrl.trim()) {
      toast.error("Upload or paste a profile picture.");
      return;
    }

    const yearsRaw = form.yearsExperience.trim();
    let yearsExperience: number | null = null;
    if (yearsRaw !== "") {
      const parsed = Number(yearsRaw);
      if (!Number.isFinite(parsed) || parsed < 0) {
        toast.error("Years of experience must be a valid number.");
        return;
      }
      yearsExperience = Math.floor(parsed);
    }

    const stamp = new Date().toISOString();
    const existing = form.id ? staff.find((s) => s.id === form.id) : undefined;
    const member: AdminStaffMember = {
      id: form.id ?? createId("staff"),
      name: form.name.trim(),
      skill: form.skill.trim(),
      yearsExperience,
      photoUrl: form.photoUrl.trim(),
      sortOrder: existing?.sortOrder ?? nextSortOrder(staff),
      createdAt: existing?.createdAt ?? stamp,
      updatedAt: stamp,
    };

    setSaving(true);
    try {
      await upsertStaffMember(member);
      toast.success(form.id ? "Staff member updated" : "Staff member added");
      setOpen(false);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save staff member");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AdminShell
      title="The People"
      description="Create, edit, or remove team members shown in The People section."
      actions={
        <Button type="button" onClick={openCreate}>
          <Plus className="h-4 w-4" />
          Add staff
        </Button>
      }
    >
      {loading ? <p className="mb-4 text-sm text-muted-foreground">Loading staff…</p> : null}
      {staff.length === 0 && !loading ? (
        <div className="rounded-2xl border border-dashed border-border px-6 py-16 text-center">
          <p className="text-sm text-muted-foreground">No staff members yet.</p>
          <Button type="button" className="mt-4" onClick={openCreate}>
            <Plus className="h-4 w-4" />
            Add the first member
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {staff.map((member, index) => (
            <article
              key={member.id}
              className="overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors hover:border-primary/30"
            >
              <div className="aspect-square overflow-hidden border-b border-border bg-background/50">
                {member.photoUrl ? (
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                    No photo
                  </div>
                )}
              </div>
              <div className="flex items-start justify-between gap-2 p-4">
                <div className="min-w-0">
                  <h3 className="truncate font-medium">{member.name}</h3>
                  <p className="mt-1 truncate text-sm text-muted-foreground">{member.skill}</p>
                  <p className="mt-2 text-xs font-medium text-primary">
                    {formatExperience(member.yearsExperience)}
                  </p>
                </div>
                <div className="flex shrink-0 items-start gap-1">
                  <ReorderControls
                    canMoveUp={index > 0}
                    canMoveDown={index < staff.length - 1}
                    disabled={reordering}
                    onMoveUp={() => void moveStaff(index, "up")}
                    onMoveDown={() => void moveStaff(index, "down")}
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => openEdit(member)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <ConfirmDelete
                    description={`Delete staff member “${member.name}”?`}
                    onConfirm={() => {
                      void (async () => {
                        try {
                          await removeStaffMember(member.id);
                          toast.success("Staff member deleted");
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
            </article>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{form.id ? "Edit staff member" : "Add staff member"}</DialogTitle>
            <DialogDescription>
              Name, skill, years of experience, and photo for The People section.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="staff-name">Name</Label>
              <Input
                id="staff-name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="e.g. Assil Habib"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="staff-skill">Skill / role</Label>
              <Input
                id="staff-skill"
                value={form.skill}
                onChange={(e) => setForm((prev) => ({ ...prev, skill: e.target.value }))}
                placeholder="e.g. Full Stack Developer"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="staff-years">Years of experience</Label>
              <Input
                id="staff-years"
                type="number"
                min={0}
                step={1}
                value={form.yearsExperience}
                onChange={(e) => setForm((prev) => ({ ...prev, yearsExperience: e.target.value }))}
                placeholder="Leave empty to hide on the site"
              />
              <p className="text-xs text-muted-foreground">
                Shown as “N+ years”. Leave blank if experience should not appear.
              </p>
            </div>
            <MediaUpload
              label="Picture"
              value={form.photoUrl}
              onChange={(photoUrl) => setForm((prev) => ({ ...prev, photoUrl }))}
              onClear={() => setForm((prev) => ({ ...prev, photoUrl: "" }))}
              aspectClassName="aspect-square max-h-56"
            />
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? "Saving…" : form.id ? "Save changes" : "Add staff"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </AdminShell>
  );
}
