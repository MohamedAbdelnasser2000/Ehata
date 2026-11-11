"use client";

import { Check } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { Section } from "@/components/ui/section";

export function TrustSignalsRow() {
  const { t } = useLocale();

  return (
    <Section className="!py-6 md:!py-8">
      <ul
        aria-label={t.trustSignals.ariaLabel}
        className="flex flex-wrap justify-center gap-x-6 gap-y-3"
      >
        {t.trustSignals.items.map((item) => (
          <li
            key={item}
            className="inline-flex items-center gap-2 text-sm text-muted"
          >
            <Check className="h-4 w-4 shrink-0 text-blue" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
