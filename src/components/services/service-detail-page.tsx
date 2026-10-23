import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Service } from "@/data/types";
import { COURSES } from "@/data/courses";
import { getServiceDetail } from "@/data/service-details";
import { getServicePath, getContactPath } from "@/lib/service-routes";
import { getLocalizedSitePath } from "@/lib/localized-site-path";
import { SITE_URL } from "@/lib/site-url";
import { whatsappChatHref } from "@/data/site";
import { Icon } from "@/lib/icons";
import { SERVICES } from "@/data/services";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BorderBeam } from "@/components/ui/border-beam";

const COPY = {
  en: {
    breadcrumb: "Breadcrumb",
    home: "Home",
    services: "Services",
    label: "Service details",
    allServices: "All services",
    audience: "Who this service is for",
    challenges: "Problems this service can address",
    approach: "How we approach the work",
    deliverables: "What the engagement may include",
    process: "How the engagement works",
    questions: "Questions about this service",
    trainingCourses: "Training courses",
    trainingCoursesDescription:
      "Explore the academy tracks currently available. Company training can also be tailored to the team's goals.",
    courseDetails: "Explore course",
    courseDuration: "Duration",
    askAboutCourse: "Ask about this course",
    devopsTitle: "DevOps",
    devopsDescription:
      "Contact us for details about the curriculum, prerequisites and available schedule.",
    contact: "Discuss your needs",
    contactForm: "Send a project inquiry",
    related: "Explore other services",
    whatsapp: "Hello EHATA, I would like to discuss {service}.",
  },
  ar: {
    breadcrumb: "مسار التنقل",
    home: "الرئيسية",
    services: "الخدمات",
    label: "تفاصيل الخدمة",
    allServices: "جميع الخدمات",
    audience: "لمن تناسب هذه الخدمة؟",
    challenges: "المشكلات التي يمكن أن تعالجها",
    approach: "كيف نتعامل مع العمل؟",
    deliverables: "ما الذي قد يشمله التعاون؟",
    process: "كيف تسير مراحل التعاون؟",
    questions: "أسئلة عن الخدمة",
    trainingCourses: "الدورات التدريبية",
    trainingCoursesDescription:
      "تعرّف على المسارات المتاحة حاليًا في الأكاديمية، ويمكن أيضًا تنسيق تدريب للشركات وفق أهداف الفريق.",
    courseDetails: "تفاصيل الدورة",
    courseDuration: "المدة",
    askAboutCourse: "استفسر عن الدورة",
    devopsTitle: "DevOps",
    devopsDescription:
      "تواصل معنا لمعرفة تفاصيل المنهج والمتطلبات والمواعيد المتاحة.",
    contact: "ناقش احتياجك معنا",
    contactForm: "أرسل استفساراً عن مشروعك",
    related: "استكشف خدمات أخرى",
    whatsapp: "مرحباً EHATA، أود مناقشة خدمة {service}.",
  },
} as const;

export function ServiceDetailPage({
  service,
  locale,
}: {
  service: Service;
  locale: Locale;
}) {
  const copy = COPY[locale];
  const detail = getServiceDetail(service.id);
  const title = service.title[locale];
  const description = service.description[locale];
  const servicePath = getServicePath(service.id, locale);
  const servicesPath = locale === "ar" ? "/ar/services/" : "/services/";
  const contactPath = getContactPath(locale, service.id);
  const trainingPrograms =
    service.id === "courses-training"
      ? [
          ...COURSES.map((course) => ({
            id: course.id,
            title: course.title[locale],
            description: course.shortDescription[locale],
            duration: course.duration[locale],
            highlights: course.bullets.map((bullet) => bullet[locale]),
            href: `/academy/${course.slug}`,
            linkLabel: copy.courseDetails,
          })),
          {
            id: "devops-training",
            title: copy.devopsTitle,
            description: copy.devopsDescription,
            duration: undefined,
            highlights: [],
            href: contactPath,
            linkLabel: copy.askAboutCourse,
          },
        ]
      : [];
  const relatedServices = SERVICES.filter((item) => item.id !== service.id).slice(
    0,
    3,
  );
  const breadcrumbId = SITE_URL ? `${SITE_URL}${servicePath}#breadcrumb` : undefined;
  const canonicalUrl = SITE_URL ? `${SITE_URL}${servicePath}` : undefined;
  const breadcrumb = {
    "@type": "BreadcrumbList",
    ...(breadcrumbId ? { "@id": breadcrumbId } : {}),
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy.home,
        ...(SITE_URL ? { item: SITE_URL } : {}),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy.services,
        ...(SITE_URL ? { item: `${SITE_URL}${servicesPath}` } : {}),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        ...(canonicalUrl ? { item: canonicalUrl } : {}),
      },
    ],
  };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumb,
      {
        "@type": "WebPage",
        ...(canonicalUrl
          ? { "@id": `${canonicalUrl}#webpage`, url: canonicalUrl }
          : {}),
        name: title,
        description,
        inLanguage: locale,
        breadcrumb: breadcrumbId ? { "@id": breadcrumbId } : undefined,
      },
    ],
  };
  const whatsappUrl = whatsappChatHref(
    copy.whatsapp.replace("{service}", title),
  );

  return (
    <>
      <article className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-10 md:px-8 md:pt-14 overflow-hidden">
        {/* Vengeance UI Aurora Background */}
        <AuroraBackground glowOpacity={0.35} />

        <nav aria-label={copy.breadcrumb} className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li>
              <Link
                className="transition-colors hover:text-blue"
                href={getLocalizedSitePath("/", locale)}
              >
                {copy.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                className="transition-colors hover:text-blue"
                href={servicesPath}
              >
                {copy.allServices}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-foreground">
              {title}
            </li>
          </ol>
        </nav>

        <header className="relative overflow-hidden rounded-3xl border border-line/80 bg-surface/90 px-6 py-10 card-shadow backdrop-blur-md sm:px-10 sm:py-14">
          <BorderBeam size={180} duration={12} borderWidth={1.5} />
          <div className="absolute -end-10 -top-20 h-64 w-64 rounded-full bg-blue/10 blur-3xl" aria-hidden />
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs font-semibold text-blue backdrop-blur-sm">
              <Icon name={service.icon} className="h-4 w-4" />
              {copy.label}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
            <p className="mt-5 max-w-3xl leading-8 text-foreground/85">
              {detail.introduction[locale]}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-signature px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(0,87,231,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {copy.contact}
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
              </a>
              <Link
                href={contactPath}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-blue/40 hover:text-blue"
              >
                {copy.contactForm}
              </Link>
            </div>
          </div>
        </header>

        {trainingPrograms.length > 0 && (
          <section
            aria-labelledby="training-courses"
            className="mt-14"
          >
            <div className="mb-6 max-w-3xl">
              <h2 id="training-courses" className="text-2xl font-bold">
                {copy.trainingCourses}
              </h2>
              <p className="mt-3 leading-7 text-muted">
                {copy.trainingCoursesDescription}
              </p>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {trainingPrograms.map((program) => (
                <li key={program.id} className="h-full">
                  <SpotlightCard
                    tilt={true}
                    maxTilt={4}
                    className="flex h-full flex-col justify-between rounded-2xl border-line/80 bg-surface/85 p-6 backdrop-blur-sm"
                  >
                    <div>
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue/10 text-blue">
                        <GraduationCap className="h-6 w-6" aria-hidden />
                      </span>
                      <h3 className="mt-4 text-lg font-bold text-foreground">
                        {program.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {program.description}
                      </p>
                      {program.duration && (
                        <p className="mt-4 text-xs font-semibold text-blue">
                          {copy.courseDuration}: {program.duration}
                        </p>
                      )}
                      {program.highlights.length > 0 && (
                        <ul className="mt-4 space-y-2 border-t border-line/50 pt-4 text-sm text-muted">
                          {program.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <Check
                                className="mt-1 h-4 w-4 shrink-0 text-blue"
                                aria-hidden
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="mt-6 pt-4 border-t border-line/50">
                      <Link
                        href={program.href}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-blue transition-colors hover:text-sky"
                      >
                        {program.linkLabel}
                        <ArrowUpRight
                          className="h-4 w-4 rtl:-scale-x-100"
                          aria-hidden
                        />
                      </Link>
                    </div>
                  </SpotlightCard>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0 space-y-14">
            <section aria-labelledby="service-audience">
              <h2 id="service-audience" className="mb-5 text-2xl font-bold">
                {copy.audience}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {detail.bestFor.map((item) => (
                  <li key={item.en}>
                    <SpotlightCard
                      spotlightColor="rgba(46, 155, 255, 0.1)"
                      className="flex items-start gap-3 rounded-2xl border-line/80 bg-surface/85 p-4"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-blue" aria-hidden />
                      <span className="leading-7 text-muted text-sm">{item[locale]}</span>
                    </SpotlightCard>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="service-challenges">
              <h2 id="service-challenges" className="mb-5 text-2xl font-bold">
                {copy.challenges}
              </h2>
              <ul className="space-y-3">
                {detail.challenges.map((item) => (
                  <li key={item.en}>
                    <SpotlightCard
                      spotlightColor="rgba(245, 158, 11, 0.1)"
                      className="rounded-2xl border-line/80 bg-surface-2/70 p-5 leading-7 text-muted"
                    >
                      {item[locale]}
                    </SpotlightCard>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="service-approach">
              <h2 id="service-approach" className="mb-5 text-2xl font-bold">
                {copy.approach}
              </h2>
              <ul className="space-y-4">
                {detail.approach.map((item) => (
                  <li key={item.en} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden />
                    <p className="leading-7 text-muted">{item[locale]}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="service-deliverables">
              <h2 id="service-deliverables" className="mb-5 text-2xl font-bold">
                {copy.deliverables}
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {detail.deliverables.map((item) => (
                  <li key={item.en}>
                    <SpotlightCard
                      spotlightColor="rgba(0, 87, 231, 0.12)"
                      className="h-full rounded-2xl border-line/80 bg-surface/85 p-5 leading-7 text-muted"
                    >
                      {item[locale]}
                    </SpotlightCard>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="service-process">
              <h2 id="service-process" className="mb-5 text-2xl font-bold">
                {copy.process}
              </h2>
              <ol className="grid gap-4 sm:grid-cols-2">
                {detail.process.map((step, index) => (
                  <li key={step.title.en}>
                    <SpotlightCard
                      spotlightColor="rgba(0, 87, 231, 0.12)"
                      className="h-full rounded-2xl border-line/80 bg-surface/85 p-5"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue/10 text-xs font-bold text-blue">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 font-bold text-foreground">
                        {step.title[locale]}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {step.description[locale]}
                      </p>
                    </SpotlightCard>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="service-faq">
              <h2 id="service-faq" className="mb-5 text-2xl font-bold">
                {copy.questions}
              </h2>
              <div className="space-y-3">
                {detail.faq.map((item) => (
                  <details
                    key={item.question.en}
                    className="group rounded-2xl border border-line/80 bg-surface/85 p-5 backdrop-blur-sm"
                  >
                    <summary className="cursor-pointer font-semibold text-foreground">
                      {item.question[locale]}
                    </summary>
                    <p className="mt-3 leading-7 text-muted">
                      {item.answer[locale]}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-2xl border border-line/80 bg-surface/90 p-6 card-shadow backdrop-blur-md">
              <BorderBeam size={150} duration={10} borderWidth={1.5} />
              <Icon
                name={service.icon}
                className="h-8 w-8 text-blue"
              />
              <h2 className="mt-4 text-lg font-bold">{copy.contact}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {locale === "ar"
                  ? "شاركنا وضعك الحالي وما تريد تغييره، لنناقش نطاقاً مناسباً لاحتياجك."
                  : "Tell us about your current situation and what you want to change so we can discuss a suitable scope."}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-signature px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(0,87,231,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {copy.contact}
              </a>
              <Link
                href={contactPath}
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-line bg-surface px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-blue/40 hover:text-blue"
              >
                {copy.contactForm}
              </Link>
            </div>
          </aside>
        </div>

        <section
          aria-labelledby="related-services"
          className="mt-16 border-t border-line/70 pt-12"
        >
          <h2 id="related-services" className="mb-6 text-2xl font-bold">
            {copy.related}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.id}
                href={getServicePath(related.id, locale)}
                className="group block h-full focus:outline-none"
              >
                <SpotlightCard
                  tilt={true}
                  maxTilt={4}
                  className="flex h-full flex-col justify-between rounded-2xl border-line/80 bg-surface/85 p-6 backdrop-blur-sm transition-all hover:border-blue/40"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-foreground">
                      <Icon name={related.icon} className="h-4 w-4 text-blue" />
                      {related.title[locale]}
                    </span>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {related.description[locale]}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                    {related.title[locale]}
                    <ArrowLeft
                      className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180"
                      aria-hidden
                    />
                  </span>
                </SpotlightCard>
              </Link>
            ))}
          </div>
          <Link
            href={servicesPath}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-sky"
          >
            <ArrowLeft className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
            {copy.services}
          </Link>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
