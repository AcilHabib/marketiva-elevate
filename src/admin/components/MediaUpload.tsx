import { ImagePlus, X } from "lucide-react";
import { useId, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { readFileAsDataUrl } from "../media";

type MediaUploadProps = {
  label: string;
  value?: string;
  onChange: (url: string) => void;
  onClear?: () => void;
  accept?: string;
  hint?: string;
  className?: string;
  aspectClassName?: string;
};

export function MediaUpload({
  label,
  value,
  onChange,
  onClear,
  accept = "image/*",
  hint,
  className,
  aspectClassName = "aspect-video",
}: MediaUploadProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  async function onFile(file: File | undefined) {
    if (!file) return;
    setBusy(true);
    try {
      const dataUrl = await readFileAsDataUrl(file);
      onChange(dataUrl);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={inputId}>{label}</Label>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-dashed border-border bg-card/40",
          aspectClassName,
        )}
      >
        {value ? (
          <>
            <img src={value} alt="" className="h-full w-full object-contain p-2" />
            {onClear ? (
              <Button
                type="button"
                size="icon"
                variant="secondary"
                className="absolute right-2 top-2 h-8 w-8"
                onClick={onClear}
              >
                <X className="h-4 w-4" />
              </Button>
            ) : null}
          </>
        ) : (
          <button
            type="button"
            disabled={busy}
            onClick={() => inputRef.current?.click()}
            className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground"
          >
            <ImagePlus className="h-6 w-6" />
            <span className="text-xs">{busy ? "Reading…" : "Choose image"}</span>
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={busy}
          onClick={() => inputRef.current?.click()}
        >
          Upload file
        </Button>
        <Input
          placeholder="Or paste image URL"
          value={value?.startsWith("data:") ? "" : (value ?? "")}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 flex-1 min-w-[12rem]"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        {hint ?? "Images are compressed before upload (max ~1.5 MB). Prefer under 2000px wide."}
      </p>
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(e) => void onFile(e.target.files?.[0])}
      />
    </div>
  );
}
