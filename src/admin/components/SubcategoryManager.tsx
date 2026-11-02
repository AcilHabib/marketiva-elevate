import { Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addSubcategory, renameSubcategory, removeSubcategory } from "../store";
import type { GalleryCategory, Subcategory } from "../types";
import { ConfirmDelete } from "./ConfirmDelete";

export function SubcategoryManager({
  category,
  subcategories,
}: {
  category: GalleryCategory;
  subcategories: Subcategory[];
}) {
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  const items = subcategories.filter((s) => s.category === category);

  function onAdd() {
    const trimmed = name.trim();
    if (!trimmed) return;
    addSubcategory(category, trimmed);
    setName("");
    toast.success("Subcategory added");
  }

  function startEdit(item: Subcategory) {
    setEditingId(item.id);
    setEditName(item.name);
  }

  function saveEdit() {
    if (!editingId || !editName.trim()) return;
    renameSubcategory(editingId, editName);
    setEditingId(null);
    setEditName("");
    toast.success("Subcategory renamed");
  }

  return (
    <div className="rounded-xl border border-border bg-background/50 p-3">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Subcategories
      </p>
      <div className="mt-2 flex gap-2">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New subcategory name"
          className="h-8"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onAdd();
            }
          }}
        />
        <Button type="button" size="sm" onClick={onAdd}>
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </div>
      <ul className="mt-3 space-y-2">
        {items.length === 0 ? (
          <li className="text-xs text-muted-foreground">No subcategories yet.</li>
        ) : (
          items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 rounded-lg border border-border/70 px-2 py-1.5"
            >
              {editingId === item.id ? (
                <>
                  <Input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="h-8"
                    autoFocus
                  />
                  <Button type="button" size="sm" onClick={saveEdit}>
                    Save
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <span className="min-w-0 flex-1 truncate text-sm">{item.name}</span>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => startEdit(item)}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <ConfirmDelete
                    description={`Delete subcategory “${item.name}”? Images using it will become uncategorized.`}
                    onConfirm={() => {
                      removeSubcategory(item.id);
                      toast.success("Subcategory deleted");
                    }}
                  >
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-destructive"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </ConfirmDelete>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
