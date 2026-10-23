"use client";

/**
 * WhatsAppButton — persistent chat shortcut shown on every page.
 * Physically pinned to the bottom-LEFT in both LTR and RTL (per design
 * request), floating above page content and below the grain/cursor layers.
 */
import { useLocale } from "@/components/providers/locale-provider";
import { WhatsAppIcon } from "@/components/layout/social-icons";
import { whatsappChatHref } from "@/data/site";

/**
 * The floating shortcut uses the shared academy/WhatsApp line; the contact
 * page still lists both WhatsApp numbers from CONTACT.whatsapp.
 */
const WHATSAPP_URL = whatsappChatHref();

export function WhatsAppButton() {
  const { t } = useLocale();

  return (
    <div className="whatsapp-float fixed bottom-5 left-4 z-[65] md:bottom-7 md:left-6">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.common.whatsapp}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,.38)] transition-transform duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 active:scale-95"
      >
        <WhatsAppIcon className="h-7 w-7" />

        {/* Desktop hover label — mirrors the aria-label. */}
        <span
          aria-hidden
          className="glass pointer-events-none absolute bottom-1/2 left-full ml-3 hidden translate-y-1/2 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
        >
          {t.common.whatsapp}
        </span>
      </a>
    </div>
  );
}
