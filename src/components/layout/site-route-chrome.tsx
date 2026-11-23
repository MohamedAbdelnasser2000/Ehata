"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function SiteRouteChrome({
  children,
  locale,
  siteHeader,
  siteFooter,
  dentalClinicHeader,
  dentalClinicFooter,
}: {
  children: ReactNode;
  locale: Locale;
  siteHeader: ReactNode;
  siteFooter: ReactNode;
  dentalClinicHeader: ReactNode;
  dentalClinicFooter: ReactNode;
}) {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/+$/, "");
  const dentalClinicPath =
    locale === "ar" ? "/ar/projects/dental-clinic" : "/projects/dental-clinic";
  const isDentalClinicPage = normalizedPathname === dentalClinicPath;

  return (
    <>
      {isDentalClinicPage ? dentalClinicHeader : siteHeader}
      {children}
      {isDentalClinicPage ? dentalClinicFooter : siteFooter}
    </>
  );
}
