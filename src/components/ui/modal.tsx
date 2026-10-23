"use client";

/**
 * Modal — Radix Dialog, brand-styled, scroll-locked (Lenis is stopped by
 * the dialog's own overflow guard via data-attribute; see navbar for the
 * same pattern). Focus trap + Escape come free with Radix.
 */
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ModalRoot = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;

export function ModalContent({
  children,
  className,
  labelledBy,
  closeLabel,
}: {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
  closeLabel: string;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[80] bg-navy/60 backdrop-blur-sm data-[state=open]:animate-[fade-in_.25s_ease] data-[state=closed]:animate-[fade-out_.2s_ease]" />
      <DialogPrimitive.Content
        aria-labelledby={labelledBy}
        className={cn(
          "fixed inset-x-4 top-[6%] bottom-auto max-h-[88dvh] overflow-y-auto rounded-card bg-surface card-shadow z-[81] focus:outline-none data-[state=open]:animate-[modal-in_.35s_cubic-bezier(.22,1,.36,1)]",
          // Centered without translateX so the entrance animation owns transform.
          "md:inset-x-0 md:top-10 md:mx-auto md:w-full md:max-w-3xl",
          className,
        )}
      >
        <DialogPrimitive.Close
          className={cn(
            "absolute end-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/80 text-muted transition-colors hover:text-blue",
          )}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">{closeLabel}</span>
        </DialogPrimitive.Close>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export const ModalTitle = DialogPrimitive.Title;
export const ModalDescription = DialogPrimitive.Description;
