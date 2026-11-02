import { createFileRoute } from "@tanstack/react-router";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { AdminShell } from "@/admin/components/AdminLayout";
import { ConfirmDelete } from "@/admin/components/ConfirmDelete";
import { createId } from "@/admin/id";
import { removeTestimonial, upsertTestimonial, useAdminStore } from "@/admin/store";
import type { AdminTestimonial } from "@/admin/types";
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
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/admin/testimonials")({
  component: AdminTestimonialsPage,
});

type TestimonialForm = {
  id?: string;
  name: string;
  quote: string;
  occupation: string;
  company: string;
};

const emptyForm = (): TestimonialForm => ({
  name: "",
  quote: "",
  occupation: "",
  company: "",
});

function AdminTestimonialsPage() {
  const { testimonials } = useAdminStore();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<TestimonialForm>(emptyForm());

  function openCreate() {
    setForm(emptyForm());
    setOpen(true);
  }

  function openEdit(item: AdminTestimonial) {
    setForm({
      id: item.id,
      name: item.name,
      quote: item.quote,
      occupation: item.occupation,
      company: item.company,
    });
    setOpen(true);
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.quote.trim()) {
      toast.error("Name and testimonial text are required.");
      return;
    }
    if (!form.occupation.trim() || !form.company.trim()) {
      toast.error("Occupation and company are required.");
      return;
    }

    const stamp = new Date().toISOString();
    const existing = form.id ? testimonials.find((t) => t.id === form.id) : undefined;
    const testimonial: AdminTestimonial = {
      id: form.id ?? createId("testimonial"),
      name: form.name.trim(),
      quote: form.quote.trim(),
      occupation: form.occupation.trim(),
      company: form.company.trim(),
      createdAt: existing?.createdAt ?? stamp,
      updatedAt: stamp,
    };
    upsertTestimonial(testimonial);
    toast.success(form.id ? "Testimonial updated" : "Testimonial added");
    setOpen(false);
  }

  return (
    <AdminShell
      title="Testimonials"
      description="Add, edit, or remove partner quotes shown on the homepage."
      actions={
        <Button type="button" onClick={openCreate}>
          <Plus className="h-4 w-4" />
          Add testimonial
        </Button>
      }
    >
      {testimonials.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border px-6 py-16 text-center">
          <p className="text-sm text-muted-foreground">No testimonials yet.</p>
          <Button type="button" className="mt-4" onClick={openCreate}>
            <Plus className="h-4 w-4" />
            Add the first testimonial
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30"
            >
              <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                “{item.quote}”
              </p>
              <div className="mt-4 flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-medium">{item.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {item.occupation} · {item.company}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1">
                  <Button type="button" size="icon" variant="ghost" onClick={() => openEdit(item)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <ConfirmDelete
                    description={`Delete testimonial from ${item.name}?`}
                    onConfirm={() => {
                      removeTestimonial(item.id);
                      toast.success("Testimonial deleted");
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
            <DialogTitle>{form.id ? "Edit testimonial" : "Add testimonial"}</DialogTitle>
            <DialogDescription>
              Name, quote, occupation, and company — ready for a future multi-language API.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="testimonial-name">Person name</Label>
              <Input
                id="testimonial-name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="testimonial-quote">Testimonial</Label>
              <Textarea
                id="testimonial-quote"
                value={form.quote}
                onChange={(e) => setForm((prev) => ({ ...prev, quote: e.target.value }))}
                rows={5}
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="testimonial-occupation">Occupation</Label>
                <Input
                  id="testimonial-occupation"
                  value={form.occupation}
                  onChange={(e) => setForm((prev) => ({ ...prev, occupation: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="testimonial-company">Company</Label>
                <Input
                  id="testimonial-company"
                  value={form.company}
                  onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">{form.id ? "Save changes" : "Add testimonial"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </AdminShell>
  );
}
