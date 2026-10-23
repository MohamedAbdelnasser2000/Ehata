"use client";

/** EN/AR switch — flips the LocaleProvider and lets <html dir> react. */
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/components/providers/locale-provider";
import { getProjectPath } from "@/lib/project-routes";
import { getContactPath, getServicePath } from "@/lib/service-routes";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        const nextLocale = locale === "en" ? "ar" : "en";
        const projectRoute = pathname.match(/^\/(?:ar\/)?projects\/([^/]+)\/?$/);
        const serviceRoute = pathname.match(/^\/(?:ar\/)?services\/([^/]+)\/?$/);
        const isServiceIndex = /^\/(?:ar\/)?services\/?$/.test(pathname);
        const isContact = /^\/(?:ar\/)?contact\/?$/.test(pathname);
        const serviceInquiry = isContact
          ? new URLSearchParams(window.location.search).get("service") ?? undefined
          : undefined;

        setLocale(nextLocale);
        if (projectRoute) {
          router.push(getProjectPath(projectRoute[1], nextLocale));
        } else if (serviceRoute) {
          router.push(getServicePath(serviceRoute[1], nextLocale));
        } else if (isServiceIndex) {
          router.push(nextLocale === "ar" ? "/ar/services/" : "/services/");
        } else if (isContact) {
          router.push(getContactPath(nextLocale, serviceInquiry));
        }
      }}
      aria-label={t.nav.toggleLanguage}
      className={cn(
        "flex h-10 items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 text-sm font-semibold text-foreground transition-colors hover:border-blue/40 hover:text-blue",
        className,
      )}
    >
      <Languages className="h-4 w-4" aria-hidden />
      <span className="tabular-nums">
        {locale === "en" ? "AR" : "EN"}
      </span>
    </button>
  );
}
