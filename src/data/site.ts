/**
 * Global site configuration: navigation, contact details and socials.
 * Replace the placeholder email/address with real ones — nothing else in
 * the codebase needs to change.
 */
import type { LocalizedText } from "@/lib/i18n";

export const NAV_LINKS = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/projects", labelKey: "projects" },
  { href: "/services", labelKey: "services" },
  { href: "/contact", labelKey: "contact" },
] as const;

export interface ContactInfo {
  email: string;
  /** Contact numbers; each row becomes a tel: link. */
  phones: readonly string[];
  /** WhatsApp numbers; each row opens wa.me (digits only, country code kept). */
  whatsapp: readonly string[];
  address: LocalizedText;
}

/* TODO: real email and address (phone/WhatsApp numbers are client-supplied). */
export const CONTACT: ContactInfo = {
  email: "hello@ehata.dev",
  phones: ["+20 11 05180133", "+201001917782"],
  whatsapp: ["+20 11 05180133", "+201001917782"],
  address: {
    en: "Smart Village, Giza, Egypt",
    ar: "سمارت فيليج، الجيزة، مصر",
  },
};

/**
 * Single WhatsApp line for the floating shortcut and academy enrollment.
 * Change it here and every entry point follows.
 */
export const WHATSAPP_NUMBER = "+201001917782";

/** `tel:` href — keep digits and the leading +, drop spaces. */
export function telHref(number: string): string {
  return `tel:${number.replace(/[^\d+]/g, "")}`;
}

/** `wa.me` href — digits only; the stored numbers already include +20. */
export function whatsappHref(number: string): string {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}

/** `wa.me` chat link, optionally with a pre-filled message. */
export function whatsappChatHref(message?: string): string {
  const base = whatsappHref(WHATSAPP_NUMBER);
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** `id` is a key of the PATHS registry in src/components/layout/social-icons.tsx */
export const SOCIALS = [
  { id: "facebook", href: "https://facebook.com/ehata", label: "Facebook" },
  { id: "instagram", href: "https://instagram.com/ehata", label: "Instagram" },
] as const;

export type SocialId = (typeof SOCIALS)[number]["id"];
