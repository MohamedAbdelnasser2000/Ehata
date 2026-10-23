/**
 * Locale primitives.
 *
 * A static export has no server, no middleware and no cookies, so locale
 * routing lives entirely on the client: the dictionary is bundled and the
 * active locale is persisted in localStorage. `next-intl` with URL-based
 * locales would require a request pipeline, so this is the approved
 * "or equivalent" implementation — the surface (`useLocale`, `t`, `dir`)
 * is deliberately small enough to swap for next-intl later.
 */
import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const dictionaries: Record<Locale, typeof en> = {
  en,
  // The Arabic file mirrors the English key structure; the cast keeps types
  // honest while allowing translators to work on the JSON directly.
  ar: ar as typeof en,
};

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export function dirOf(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** A field that carries both language variants (used by /data content). */
export type LocalizedText = { en: string; ar: string };

/** Resolve a LocalizedText for the active locale. */
export function pick(locale: Locale, text: LocalizedText): string {
  return text[locale];
}
