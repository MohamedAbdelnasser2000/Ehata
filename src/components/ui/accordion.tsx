"use client";

/**
 * Accordion — Radix primitives, brand-styled. Used by the Services FAQ.
 */
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const AccordionRoot = AccordionPrimitive.Root;

export function AccordionItem({
  value,
  question,
  children,
}: {
  value: string;
  question: ReactNode;
  children: ReactNode;
}) {
  return (
    <AccordionPrimitive.Item
      value={value}
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-surface/70 transition-colors data-[state=open]:border-blue/40",
      )}
    >
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger
          className={cn(
            "group flex w-full items-center justify-between gap-4 px-5 py-4 text-start text-[15px] font-semibold text-foreground transition-colors hover:text-blue",
          )}
        >
          {question}
          <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content
        className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.25s_ease] data-[state=open]:animate-[accordion-down_0.3s_ease]"
      >
        <div className="px-5 pb-5 text-[15px] leading-relaxed text-muted">
          {children}
        </div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}
