/**
 * Global site configuration: navigation, contact details and socials.
 * Update contact details and official social URLs here.
 */
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
}

export const CONTACT: ContactInfo = {
  email: "mnkq2000@gmail.com",
  phones: ["+20 11 05180133", "+201001917782"],
  whatsapp: ["+20 11 05180133", "+201001917782"],
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

/** Official social links can be added here once their URLs are confirmed. */
export const SOCIALS: readonly {
  id: "facebook" | "instagram";
  href: string;
  label: string;
}[] = [];

export type SocialId = (typeof SOCIALS)[number]["id"];
