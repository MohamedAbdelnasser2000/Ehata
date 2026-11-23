import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight, MessageCircle, Stethoscope } from "lucide-react";
import { whatsappChatHref } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { getProjectPath, getProjectsPath } from "@/lib/project-routes";

function getCopy(locale: Locale) {
  return locale === "ar"
    ? {
        brand: "عيادة الأسنان",
        tagline: "منظومة إدارة متكاملة",
        screenshots: "لقطات النظام",
        modules: "المميزات",
        plans: "الباقات",
        contact: "تواصل معنا",
        language: "EN",
        footerTitle: "تشغيل أوضح. رعاية أكثر ترابطاً.",
        footerText: "إدارة المواعيد والملفات والعلاج والفوترة في تجربة واحدة.",
        footerLinks: "روابط سريعة",
        footerContact: "هل تريد معرفة المزيد عن النظام؟",
        footerBack: "العودة إلى المشاريع",
        rights: "جميع الحقوق محفوظة.",
        message: "مرحباً، أود معرفة المزيد عن نظام إدارة عيادة الأسنان.",
      }
    : {
        brand: "Dental Clinic",
        tagline: "Clinic management system",
        screenshots: "Screenshots",
        modules: "Features",
        plans: "Plans",
        contact: "Contact us",
        language: "عربي",
        footerTitle: "Clearer operations. More connected care.",
        footerText: "Appointments, records, treatment, and billing in one workspace.",
        footerLinks: "Quick links",
        footerContact: "Want to learn more about the system?",
        footerBack: "Back to projects",
        rights: "All rights reserved.",
        message: "Hello, I would like to learn more about the dental clinic management system.",
      };
}

export function DentalClinicHeader({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const isArabic = locale === "ar";
  const projectPath = getProjectPath("dental-clinic", locale);
  const languagePath = getProjectPath("dental-clinic", isArabic ? "en" : "ar");
  const contactUrl = whatsappChatHref(copy.message);

  return (
    <header className="sticky top-0 z-[75] border-b border-line/70 bg-surface/90 backdrop-blur-xl">
      <nav
        aria-label={isArabic ? "التنقل في مشروع عيادة الأسنان" : "Dental clinic project navigation"}
        className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-3 px-5 md:px-8"
      >
        <Link href={projectPath} className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue to-[#0a1033] text-white shadow-[0_12px_28px_-14px_rgba(0,87,231,0.8)]">
            <Stethoscope className="h-5 w-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold text-foreground sm:text-base">
              {copy.brand}
            </span>
            <span className="hidden text-[11px] font-medium text-muted sm:block">
              {copy.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {[
            { href: "#screenshots", label: copy.screenshots },
            { href: "#modules", label: copy.modules },
            { href: "#plans", label: copy.plans },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-muted transition-colors duration-300 hover:bg-surface-2 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={languagePath}
            className="rounded-full border border-line px-3 py-2 text-xs font-bold text-muted transition-colors duration-300 hover:border-blue/40 hover:text-blue"
            aria-label={isArabic ? "View this project in English" : "عرض المشروع بالعربية"}
          >
            {copy.language}
          </Link>
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue px-3 py-2 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue/90 sm:px-4 sm:text-sm"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{copy.contact}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export function DentalClinicFooter({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const isArabic = locale === "ar";
  const projectPath = getProjectPath("dental-clinic", locale);
  const projectsPath = getProjectsPath(locale);
  const contactUrl = whatsappChatHref(copy.message);
  const BackIcon = isArabic ? ArrowUpRight : ArrowUpLeft;

  return (
    <footer className="mt-10 border-t border-white/10 bg-[#09112f] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_0.8fr_1fr] md:px-8">
        <div>
          <Link href={projectPath} className="inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-emerald-200">
              <Stethoscope className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-base font-extrabold">{copy.brand}</span>
          </Link>
          <h2 className="mt-5 max-w-sm text-xl font-extrabold leading-snug">
            {copy.footerTitle}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
            {copy.footerText}
          </p>
        </div>

        <nav aria-label={copy.footerLinks}>
          <h3 className="mb-4 text-sm font-bold text-white">{copy.footerLinks}</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <a className="transition-colors hover:text-white" href="#screenshots">
                {copy.screenshots}
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#modules">
                {copy.modules}
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-white" href="#plans">
                {copy.plans}
              </a>
            </li>
            <li>
              <Link className="inline-flex items-center gap-2 transition-colors hover:text-white" href={projectsPath}>
                <BackIcon className="h-4 w-4" aria-hidden />
                {copy.footerBack}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="mb-3 text-sm font-bold text-white">{copy.footerContact}</h3>
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-bold text-white transition-colors duration-300 hover:border-emerald-300/60 hover:bg-white/5"
          >
            <MessageCircle className="h-4 w-4 text-emerald-200" aria-hidden />
            {copy.contact}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-slate-400 sm:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} {copy.brand}. {copy.rights}
          </p>
          <Link href={projectsPath} className="transition-colors hover:text-white">
            {copy.footerBack}
          </Link>
        </div>
      </div>
    </footer>
  );
}
