"use client";

/** Localized skip link — a client component so it can read the dictionary. */
import { useLocale } from "./locale-provider";

export function SkipLink() {
  const { t } = useLocale();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-blue focus:px-5 focus:py-2 focus:text-white"
    >
      {t.nav.skipToContent}
    </a>
  );
}
