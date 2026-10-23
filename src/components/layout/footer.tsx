"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import { LogoLockup } from "./logo";
import { SocialIcon } from "./social-icons";
import { CONTACT, NAV_LINKS, SOCIALS, telHref } from "@/data/site";
import { SERVICES } from "@/data/services";

export function Footer() {
  const { t, tr } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:px-8">
        {/* Brand column */}
        <div className="flex flex-col gap-5">
          <LogoLockup />
          <p className="max-w-xs text-[15px] leading-relaxed text-muted">
            {t.footer.tagline}
          </p>
          {SOCIALS.length > 0 && (
            <ul className="flex gap-3" aria-label={t.contactPage.info.followUs}>
              {SOCIALS.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-blue/50 hover:text-blue"
                  >
                    <SocialIcon id={s.id} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Quick links */}
        <nav aria-label={t.footer.company}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            {t.footer.company}
          </h3>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[15px] text-muted transition-colors hover:text-blue"
                >
                  {t.nav[l.labelKey]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label={t.footer.servicesTitle}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            {t.footer.servicesTitle}
          </h3>
          <ul className="flex flex-col gap-2.5">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  href="/services"
                  className="text-[15px] text-muted transition-colors hover:text-blue"
                >
                  {tr(s.title)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            {t.footer.contactTitle}
          </h3>
          <ul className="flex flex-col gap-2.5 text-[15px] text-muted">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-blue">
                {CONTACT.email}
              </a>
            </li>
            {CONTACT.phones.map((phone) => (
              <li key={phone}>
                <a href={telHref(phone)} className="hover:text-blue" dir="ltr">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-sm text-muted md:flex-row md:px-8">
          <p>
            © {year} EHATA – Digital Solutions. {t.footer.rights}
          </p>
          <p className="text-gradient font-medium">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
