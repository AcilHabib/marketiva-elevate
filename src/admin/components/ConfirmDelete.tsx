import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type ConfirmDeleteProps = {
  title?: string;
  description: string;
  onConfirm: () => void;
  triggerLabel?: string;
  triggerVariant?: "destructive" | "ghost" | "outline";
  triggerSize?: "default" | "sm" | "icon";
  children?: React.ReactNode;
};

export function ConfirmDelete({
  title = "Delete permanently?",
  description,
  onConfirm,
  triggerLabel = "Delete",
  triggerVariant = "ghost",
  triggerSize = "sm",
  children,
}: ConfirmDeleteProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children ?? (
          <Button
            type="button"
            variant={triggerVariant}
            size={triggerSize}
            className="text-destructive"
          >
            {triggerLabel}
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            onClick={onConfirm}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
