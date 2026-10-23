"use client";

/** Sticky glass navbar: logo, links, language + theme toggles, CTA. */
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { ThemeToggle } from "@/components/providers/theme";
import { LanguageToggle } from "./language-toggle";
import { LogoLockup } from "./logo";
import { NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { getBlogIndexPath } from "@/lib/blog-routes";
import { getLocalizedSitePath } from "@/lib/localized-site-path";

export function Navbar() {
  const { t, locale } = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial read deferred to a frame callback per React 19 effect rules.
    const id = window.requestAnimationFrame(onScroll);
    return () => {
      window.cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // The mobile sheet closes itself on navigation: every link is wrapped in
  // DialogPrimitive.Close, so no pathname-sync effect is needed.

  const links = NAV_LINKS.flatMap((l) => {
    const link = {
      href: getLocalizedSitePath(l.href, locale),
      label: t.nav[l.labelKey],
    };

    return l.href === "/projects"
      ? [
          link,
          {
            href: getBlogIndexPath(locale),
            label: t.footer.blog,
          },
        ]
      : [link];
  });
  const contactHref = getLocalizedSitePath("/contact/", locale);
  const homeHref = getLocalizedSitePath("/", locale);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-[75] transition-all duration-300",
        scrolled
          ? "border-b border-line/60 bg-surface/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label={t.footer.company}
        className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-5 md:px-8"
      >
        <Link href={homeHref} className="shrink-0" aria-label="EHATA — Home">
          <LogoLockup />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[15px] font-medium text-muted transition-colors hover:text-foreground",
                  isActive(l.href) && "text-foreground",
                )}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="bg-gradient-signature absolute inset-x-4 -bottom-px h-0.5 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <MagneticButton href={contactHref} size="md">
            {t.nav.cta}
          </MagneticButton>
        </div>

        {/* Mobile: compact toggles + sheet trigger (language moves into the
            sheet so the bar never overflows a 360px viewport) */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="h-9 w-9" />
          <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
            <DialogPrimitive.Trigger
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/60 text-foreground"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </DialogPrimitive.Trigger>
            <DialogPrimitive.Portal>
              <DialogPrimitive.Overlay className="fixed inset-0 z-[84] bg-navy/50 backdrop-blur-sm" />
              <DialogPrimitive.Content
                className={cn(
                  "fixed inset-x-0 top-0 z-[85] flex flex-col gap-2 rounded-b-3xl bg-surface p-6 pb-8 card-shadow",
                  "data-[state=open]:animate-[modal-in_.3s_cubic-bezier(.22,1,.36,1)]",
                )}
              >
                <DialogPrimitive.Title className="sr-only">
                  {t.nav.openMenu}
                </DialogPrimitive.Title>
                <div className="flex items-center justify-between">
                  <LogoLockup />
                </div>
                <div className="mt-4 flex flex-col">
                  {links.map((l) => (
                    <DialogPrimitive.Close asChild key={l.href}>
                      <Link
                        href={l.href}
                        className={cn(
                          "rounded-2xl px-4 py-3 text-lg font-medium text-muted transition-colors hover:bg-surface-2 hover:text-foreground",
                          isActive(l.href) && "text-foreground bg-surface-2",
                        )}
                      >
                        {l.label}
                      </Link>
                    </DialogPrimitive.Close>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <LanguageToggle />
                </div>
                <MagneticButton href={contactHref} className="mt-3 w-full justify-center">
                  {t.nav.cta}
                </MagneticButton>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>
        </div>
      </nav>
    </header>
  );
}
