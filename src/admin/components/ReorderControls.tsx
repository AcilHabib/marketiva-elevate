"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ReorderControls({
  canMoveUp,
  canMoveDown,
  disabled,
  onMoveUp,
  onMoveDown,
  className,
}: {
  canMoveUp: boolean;
  canMoveDown: boolean;
  disabled?: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="h-7 w-7"
        disabled={disabled || !canMoveUp}
        aria-label="Move up"
        onClick={onMoveUp}
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="h-7 w-7"
        disabled={disabled || !canMoveDown}
        aria-label="Move down"
        onClick={onMoveDown}
      >
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  );
}
