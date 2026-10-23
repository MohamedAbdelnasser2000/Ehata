import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle, AlertCircle, CheckCircle2, Layers } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/data/types";
import { PROJECTS } from "@/data/projects";
import { getProjectClientGuide } from "@/data/project-client-guides";
import { getProjectPath, getProjectsPath } from "@/lib/project-routes";
import { SITE_URL } from "@/lib/site-url";
import { whatsappChatHref } from "@/data/site";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BorderBeam } from "@/components/ui/border-beam";

const COPY = {
  en: {
    breadcrumb: "Breadcrumb",
    home: "Home",
    projects: "Projects",
    caseStudy: "Project case study",
    illustration: "Illustrative cover — not an application screenshot",
    overview: "Executive Overview",
    problem: "Operational Challenges Addressed",
    solution: "The Integrated Solution & Business Value",
    clientExplanation: "How This System Organizes Your Business",
    workflows: "Real-World Operational Workflows",
    features: "Core System Modules & Functional Capabilities",
    moduleBadge: "Module",
    stepBadge: "Phase",
    audience: "Target Business Stakeholders",
    implementation: "Optional technical architecture & stack",
    questions: "Frequently Asked Questions",
    questionProblem: "What does {name} do?",
    questionAudience: "Who is {name} designed for?",
    questionFeatures: "What are the main features of {name}?",
    questionFit: "Can a similar solution be adapted to our needs?",
    answerFit:
      "Yes. This project is a reference for the workflows described on this page. The exact roles, rules, integrations and reports for a new implementation should be agreed around your team's actual process.",
    related: "Related projects",
    back: "Back to all projects",
    contact: "Discuss a similar project",
    contactSecondary: "Contact the team",
    whatsappMessage: "Hello EHATA, I would like to discuss a project similar to {name}.",
  },
  ar: {
    breadcrumb: "مسار التنقل",
    home: "الرئيسية",
    projects: "المشاريع",
    caseStudy: "دراسة حالة المشروع",
    illustration: "غلاف توضيحي — وليس لقطة شاشة للتطبيق",
    overview: "نبذة تنفيذية شاملة عن المنظومة",
    problem: "التحديات التشغيلية التي يعالجها النظام",
    solution: "الحل المتكامل والقيمة التشغيلية المضافة",
    clientExplanation: "كيف ينظم النظام عمليات نشاطك التجاري؟",
    workflows: "سيناريوهات ومراحل التشغيل الواقعية خطوة بخطوة",
    features: "الوحدات والقدرات الوظيفية الشاملة للنظام",
    moduleBadge: "الوحدة",
    stepBadge: "المرحلة",
    audience: "الفئات والجهات المستفيدة من النظام",
    implementation: "تفاصيل البنية التقنية (اختيارية)",
    questions: "أسئلة شائعة وإجابات تفصيلية",
    questionProblem: "ما وظيفة مشروع {name}؟",
    questionAudience: "لمن صُمم مشروع {name}؟",
    questionFeatures: "ما أبرز وحدات وميزات مشروع {name}؟",
    questionFit: "هل يمكن تكييف حل مشابه لاحتياجاتنا التشغيلية؟",
    answerFit:
      "نعم، بالتأكيد. المنظومة المعروضة تمثل نموذجاً عملياً للمسارات الوظيفية المشروحة. يمكن تخصيص الصلاحيات، وإجراءات العمل، والربط مع الأنظمة القائمة، واستخراج التقارير المخصصة وفقاً للاحتياجات المحددة لفريقك ومنشأتك.",
    related: "مشاريع ذات صلة",
    back: "العودة إلى جميع المشاريع",
    contact: "ناقش معنا تنفيذ مشروع مشابه",
    contactSecondary: "تواصل مع الفريق",
    whatsappMessage: "مرحباً EHATA، أود مناقشة مشروع مشابه لمشروع {name}.",
  },
} as const;

const CATEGORY_LABELS = {
  "web-apps": { en: "Web application", ar: "تطبيق ويب" },
  saas: { en: "SaaS platform", ar: "منصة SaaS" },
  mobile: { en: "Mobile application", ar: "تطبيق موبايل" },
  training: { en: "Learning platform", ar: "منصة تعليمية" },
  desktop: { en: "Desktop application", ar: "تطبيق سطح مكتب" },
  interactive: { en: "Interactive web experience", ar: "تجربة ويب تفاعلية" },
} as const;

export function ProjectDetailPage({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const copy = COPY[locale];
  const title = project.title[locale];
  const summary = project.summary[locale];
  const overview = project.caseStudy.overview[locale];
  const problem = project.caseStudy.problem[locale];
  const clientGuide = getProjectClientGuide(project.id, locale);
  const features = project.caseStudy.features.map((feature) => ({
    title: feature.title[locale],
    description: feature.description[locale],
  }));
  const path = getProjectPath(project.id, locale);
  const relatedProjects = PROJECTS.filter(
    (item) => item.id !== project.id && item.category === project.category,
  ).slice(0, 3);
  const breadcrumbId = SITE_URL ? `${SITE_URL}${path}#breadcrumb` : undefined;
  const canonicalUrl = SITE_URL ? `${SITE_URL}${path}` : undefined;
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
        name: copy.projects,
        ...(SITE_URL ? { item: `${SITE_URL}${getProjectsPath()}` } : {}),
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
        description: summary,
        inLanguage: locale,
        breadcrumb: breadcrumbId ? { "@id": breadcrumbId } : breadcrumb,
      },
    ],
  };
  const whatsappMessage = copy.whatsappMessage.replace("{name}", title);
  const contactUrl = whatsappChatHref(whatsappMessage);

  return (
    <>
      <article className="relative mx-auto w-full max-w-5xl px-5 pb-20 pt-10 md:px-8 md:pt-14 overflow-hidden">
        {/* Vengeance UI Aurora Ambient Lighting */}
        <AuroraBackground glowOpacity={0.35} />

        <nav aria-label={copy.breadcrumb} className="mb-9">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li>
              <Link className="transition-colors hover:text-blue" href="/">
                {copy.home}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                className="transition-colors hover:text-blue"
                href={getProjectsPath()}
              >
                {copy.projects}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-foreground">
              {title}
            </li>
          </ol>
        </nav>

        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
              {copy.caseStudy}
            </span>
            <span className="rounded-full border border-line bg-surface/80 px-3 py-1 text-xs font-medium text-muted backdrop-blur-sm">
              {CATEGORY_LABELS[project.category][locale]}
            </span>
            {project.status && (
              <span className="rounded-full border border-line bg-surface/80 px-3 py-1 text-xs font-medium text-muted backdrop-blur-sm">
                {project.status[locale]}
              </span>
            )}
          </div>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{summary}</p>
        </header>

        <figure className="mb-12 overflow-hidden rounded-card border border-line bg-surface-2 card-shadow">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.coverImage}
              alt={
                locale === "ar"
                  ? `رسم توضيحي لمشروع ${title}`
                  : `Illustrative cover for ${title}`
              }
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover"
            />
          </div>
          <figcaption className="px-4 py-3 text-xs text-muted">
            {copy.illustration}
          </figcaption>
        </figure>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 space-y-12">
            {/* Executive Overview */}
            <section aria-labelledby="project-overview">
              <h2 id="project-overview" className="mb-4 text-2xl font-bold text-foreground">
                {copy.overview}
              </h2>
              <SpotlightCard
                spotlightColor="rgba(0, 87, 231, 0.1)"
                className="rounded-2xl border-line/80 bg-surface/85 p-6 md:p-7 backdrop-blur-sm"
              >
                <p className="text-base leading-8 text-muted">{overview}</p>
              </SpotlightCard>
            </section>

            {/* How It Organizes Business */}
            <section aria-labelledby="project-client-explanation">
              <h2
                id="project-client-explanation"
                className="mb-4 text-2xl font-bold text-foreground"
              >
                {copy.clientExplanation}
              </h2>
              <SpotlightCard
                spotlightColor="rgba(46, 155, 255, 0.15)"
                className="rounded-2xl border-blue/25 bg-blue/[0.03] p-6 md:p-7 backdrop-blur-sm"
              >
                <p className="text-base leading-8 text-muted">{clientGuide.explanation}</p>
              </SpotlightCard>
            </section>

            {/* Operational Challenges (Problem) */}
            <section aria-labelledby="project-problem">
              <div className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.04] p-6 md:p-8 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2.5">
                  <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" aria-hidden />
                  <h2 id="project-problem" className="text-2xl font-bold text-foreground">
                    {copy.problem}
                  </h2>
                </div>
                <p className="text-base leading-8 text-muted">{problem}</p>
              </div>
            </section>

            {/* Integrated Solution & Business Value */}
            <section aria-labelledby="project-solution">
              <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.04] p-6 md:p-8 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" aria-hidden />
                  <h2 id="project-solution" className="text-2xl font-bold text-foreground">
                    {copy.solution}
                  </h2>
                </div>
                <p className="text-base leading-8 text-muted">
                  {project.caseStudy.solution[locale]}
                </p>
              </div>
            </section>

            {/* Core Modules & Capabilities with Skiper UI Spotlight Cards */}
            <section aria-labelledby="project-features">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Layers className="h-5 w-5 text-blue shrink-0" aria-hidden />
                  <h2 id="project-features" className="text-2xl font-bold text-foreground">
                    {copy.features}
                  </h2>
                </div>
                <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
                  {features.length} {locale === "ar" ? "وحدات تشغيلية" : "Operational Modules"}
                </span>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, idx) => (
                  <li key={feature.title} className="h-full">
                    <SpotlightCard
                      tilt={true}
                      maxTilt={3}
                      className="flex h-full flex-col justify-between rounded-2xl border-line/80 bg-surface/85 p-6 backdrop-blur-sm transition-all hover:border-blue/40"
                    >
                      <div>
                        <div className="mb-3 flex items-center justify-between">
                          <span className="rounded-full bg-blue/10 px-2.5 py-0.5 text-xs font-bold text-blue">
                            {copy.moduleBadge} {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted">
                          {feature.description}
                        </p>
                      </div>
                    </SpotlightCard>
                  </li>
                ))}
              </ul>
            </section>

            {/* Step-by-Step Operational Workflows */}
            <section aria-labelledby="project-workflows">
              <h2 id="project-workflows" className="mb-5 text-2xl font-bold text-foreground">
                {copy.workflows}
              </h2>
              <ol className="space-y-4">
                {clientGuide.workflows.map((workflow, idx) => (
                  <li key={idx}>
                    <SpotlightCard
                      spotlightColor="rgba(0, 87, 231, 0.08)"
                      className="flex items-start gap-4 rounded-2xl border-line/80 bg-surface-2/70 p-5 md:p-6 backdrop-blur-sm transition-all hover:border-blue/40"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue/15 text-xs font-extrabold text-blue">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-0.5 text-sm leading-7 text-muted">{workflow}</p>
                    </SpotlightCard>
                  </li>
                ))}
              </ol>
            </section>

            {/* Target Stakeholders */}
            <section aria-labelledby="project-audience">
              <h2 id="project-audience" className="mb-4 text-2xl font-bold text-foreground">
                {copy.audience}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {clientGuide.audiences.map((item) => (
                  <li key={item}>
                    <SpotlightCard
                      spotlightColor="rgba(46, 155, 255, 0.08)"
                      className="flex items-start gap-3 rounded-2xl border-line/80 bg-surface/80 p-4 text-muted backdrop-blur-sm transition-all hover:border-blue/35"
                    >
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-blue"
                        aria-hidden
                      />
                      <span className="leading-7 text-sm">{item}</span>
                    </SpotlightCard>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ Section */}
            <section aria-labelledby="project-faq">
              <h2 id="project-faq" className="mb-5 text-2xl font-bold text-foreground">
                {copy.questions}
              </h2>
              <dl className="space-y-4">
                <SpotlightCard className="rounded-2xl border-line/80 bg-surface/85 p-5 backdrop-blur-sm">
                  <dt className="font-semibold text-foreground">
                    {copy.questionProblem.replace("{name}", title)}
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-muted">{problem}</dd>
                </SpotlightCard>
                <SpotlightCard className="rounded-2xl border-line/80 bg-surface/85 p-5 backdrop-blur-sm">
                  <dt className="font-semibold text-foreground">
                    {copy.questionAudience.replace("{name}", title)}
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-muted">
                    {clientGuide.audiences.join(locale === "ar" ? "، " : ", ")}.
                  </dd>
                </SpotlightCard>
                <SpotlightCard className="rounded-2xl border-line/80 bg-surface/85 p-5 backdrop-blur-sm">
                  <dt className="font-semibold text-foreground">
                    {copy.questionFeatures.replace("{name}", title)}
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-muted">
                    {features
                      .map(
                        (feature) =>
                          `${feature.title}: ${feature.description}`,
                      )
                      .join(locale === "ar" ? "؛ " : "; ")}
                  </dd>
                </SpotlightCard>
                <SpotlightCard className="rounded-2xl border-line/80 bg-surface/85 p-5 backdrop-blur-sm">
                  <dt className="font-semibold text-foreground">{copy.questionFit}</dt>
                  <dd className="mt-2 text-sm leading-7 text-muted">
                    {copy.answerFit}
                  </dd>
                </SpotlightCard>
              </dl>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-2xl border border-line/80 bg-surface/90 p-6 card-shadow backdrop-blur-md">
              <BorderBeam size={140} duration={9} borderWidth={1.5} />
              <h2 className="text-lg font-bold">{copy.contact}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {locale === "ar"
                  ? "أخبرنا بما تحتاجه، وسنناقش معك نطاق الحل المناسب لمشروعك."
                  : "Tell us what you need and we’ll discuss a solution that fits your project."}
              </p>
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-signature px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(0,87,231,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {copy.contact}
                <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
              </a>
              <Link
                href="/contact/"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-line bg-surface px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-blue/40 hover:text-blue"
              >
                {copy.contactSecondary}
              </Link>
            </div>
          </aside>
        </div>

        <details className="mt-12 rounded-2xl border border-line/80 bg-surface-2/80 p-5 backdrop-blur-sm">
          <summary className="cursor-pointer font-semibold text-foreground">
            {copy.implementation}
          </summary>
          <div className="mt-4 space-y-4">
            <p className="text-sm leading-7 text-muted">
              {project.caseStudy.architecture[locale]}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </details>
      </article>

      {relatedProjects.length > 0 && (
        <section
          aria-labelledby="related-projects"
          className="border-t border-line bg-surface-2/60 py-14 md:py-20"
        >
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <h2 id="related-projects" className="mb-7 text-2xl font-bold">
              {copy.related}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  href={getProjectPath(related.id, locale)}
                  className="group block h-full focus:outline-none"
                >
                  <SpotlightCard
                    tilt={true}
                    maxTilt={4}
                    className="flex h-full flex-col justify-between rounded-2xl border-line/80 bg-surface/85 p-5 backdrop-blur-sm transition-all hover:border-blue/40"
                  >
                    <div>
                      <span className="text-xs font-semibold text-blue">
                        {copy.related}
                      </span>
                      <h3 className="mt-2 font-bold text-foreground transition-colors group-hover:text-blue">
                        {related.title[locale]}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">
                        {related.summary[locale]}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                      {related.title[locale]}
                      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden />
                    </span>
                  </SpotlightCard>
                </Link>
              ))}
            </div>
            <Link
              href={getProjectsPath()}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-sky"
            >
              <ArrowLeft className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
              {copy.back}
            </Link>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
