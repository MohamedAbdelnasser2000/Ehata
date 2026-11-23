import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowUpLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  CircleDollarSign,
  ClipboardList,
  CreditCard,
  Database,
  FileText,
  FlaskConical,
  HeartPulse,
  Layers,
  MessageCircle,
  Pill,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { getProjectClientGuide } from "@/data/project-client-guides";
import { whatsappChatHref } from "@/data/site";
import type { Project } from "@/data/types";
import type { Locale } from "@/lib/i18n";
import { getLocalizedSitePath } from "@/lib/localized-site-path";
import { getProjectsPath } from "@/lib/project-routes";

const FEATURE_ICONS: LucideIcon[] = [
  Activity,
  UsersRound,
  CalendarDays,
  Pill,
  CreditCard,
  FlaskConical,
  CircleDollarSign,
];

export function DentalClinicLandingPage({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const isArabic = locale === "ar";
  const guide = getProjectClientGuide(project.id, locale);
  const features = project.caseStudy.features.map((feature) => ({
    title: feature.title[locale],
    description: feature.description[locale],
  }));
  const audiences = guide.audiences;
  const contactPath = getLocalizedSitePath("/contact/", locale);
  const contactMessage = isArabic
    ? "مرحباً، أود معرفة تفاصيل نظام إدارة عيادة الأسنان والباقات المناسبة."
    : "Hello, I would like to learn more about the dental clinic system and its plans.";
  const contactUrl = whatsappChatHref(contactMessage);

  const copy = isArabic
    ? {
        back: "كل المشاريع",
        eyebrow: "منظومة تشغيل متخصصة لطب الأسنان",
        title: "من أول موعد، إلى آخر تفصيلة في خطة العلاج.",
        heroText:
          "إدارة مترابطة للعيادة تجمع ملف المريض، ومخطط الأسنان، وجدولة الفريق، والعلاج، والفوترة في مكان واحد.",
        viewFeatures: "اكتشف مميزات النظام",
        viewPlans: "قارن الباقات",
        preview: "لقطة فعلية من لوحة الإدارة",
        previewNote:
          "لقطة من النسخة المحلية ببيانات عرض تجريبية، وليست سجلات مرضى حقيقية.",
        metrics: ["وحدات تشغيلية", "مراحل في رحلة المريض", "لغات للواجهة"],
        challengeEyebrow: "من الاستقبال إلى غرفة العلاج",
        challengeTitle: "كل تفاصيل العيادة في مسار واحد واضح.",
        overview: project.caseStudy.overview.ar,
        solutionEyebrow: "القيمة التشغيلية",
        solutionTitle: "رعاية أفضل، ومتابعة أسهل، وصورة مالية أوضح.",
        solution: project.caseStudy.solution.ar,
        publicEyebrow: "موقع العيادة العام",
        publicTitle: "واجهة عامة للمرضى والحجز الإلكتروني.",
        publicText:
          "إلى جانب لوحة الإدارة الداخلية، يوفر النظام موقعاً عاماً للعناية بالمرضى يعرض العيادة وخدماتها وأطبائها وجاليري حالات العمل، ويتيح حجز موعد أونلاين واختيار التخصص والطبيب والموعد المناسب.",
        publicFeatures: [
          "الصفحة الرئيسية والخدمات",
          "معرض قبل وبعد",
          "أطباء العيادة ومواعيدهم",
          "حجز موعد أونلاين",
          "الأسئلة واتصل بنا والتقييمات",
          "دخول وربط فريق العيادة",
        ],
        screenshotsEyebrow: "من داخل لوحة الإدارة",
        screenshotsTitle: "كل مسار تشغيلي موثّق بلقطة من التطبيق.",
        screenshotNote:
          "هذه لقطات فعلية من النسخة المحلية. جميع البيانات الظاهرة تجريبية ولا تمثل سجلات مرضى حقيقية.",
        screenshots: [
          {
            src: "/images/projects/dental-clinic/public-home.png",
            height: 4081,
            title: "الموقع العام للعيادة",
            description: "واجهة ترحيبية تعرض الخدمات والأطباء وحالات النجاح ومعلومات التواصل.",
          },
          {
            src: "/images/projects/dental-clinic/public-booking.png",
            height: 4099,
            title: "الحجز الإلكتروني أونلاين",
            description: "اختيار الخدمة والطبيب والتاريخ والوقت وإرسال تفاصيل الموعد من صفحة عامة.",
          },
          {
            src: "/images/projects/dental-clinic/admin-patients.png",
            height: 1100,
            title: "إدارة ملفات المرضى",
            description: "قائمة المرضى ومعلوماتهم الأساسية للوصول السريع إلى الملفات.",
          },
          {
            src: "/images/projects/dental-clinic/admin-patient-record.png",
            height: 1298,
            title: "الملف الطبي للمريض",
            description: "عرض بيانات المريض وسجله في واجهة واحدة قبل الزيارة وخلالها.",
          },
          {
            src: "/images/projects/dental-clinic/admin-appointments.png",
            height: 1100,
            title: "جدولة المواعيد",
            description: "متابعة الحجوزات ومواعيد الفريق وحالاتها من لوحة واحدة.",
          },
          {
            src: "/images/projects/dental-clinic/admin-visits.png",
            height: 1100,
            title: "توثيق الزيارات",
            description: "ربط تفاصيل الزيارة والملاحظات السريرية بملف المريض.",
          },
          {
            src: "/images/projects/dental-clinic/admin-treatments.png",
            height: 1100,
            title: "العلاجات والخطط",
            description: "متابعة العلاجات وخطط الأسنان ضمن سجل المريض.",
          },
          {
            src: "/images/projects/dental-clinic/admin-prescriptions.png",
            height: 1100,
            title: "الوصفات والأدوية",
            description: "إنشاء الوصفات ومراجعتها وربطها بزيارة المريض.",
          },
          {
            src: "/images/projects/dental-clinic/admin-billing.png",
            height: 1100,
            title: "الفواتير والمدفوعات",
            description: "متابعة الفواتير والمدفوعات والأرصدة المستحقة.",
          },
          {
            src: "/images/projects/dental-clinic/admin-inventory.png",
            height: 1100,
            title: "المخزون والمستلزمات",
            description: "مراجعة كميات الأصناف ومتابعة احتياجات المخزون.",
          },
          {
            src: "/images/projects/dental-clinic/admin-services.png",
            height: 1100,
            title: "الخدمات والتسعير",
            description: "إدارة الخدمات الطبية والأسعار التي تعرضها العيادة.",
          },
          {
            src: "/images/projects/dental-clinic/admin-reports.png",
            height: 1280,
            title: "التقارير التشغيلية",
            description: "استعراض مؤشرات النشاط والمتابعة المالية للعيادة.",
          },
        ],
        modulesEyebrow: "منظومة متكاملة",
        modulesTitle: "كل وحدة تخدم خطوة حقيقية في عمل العيادة.",
        workflowsEyebrow: "منظور يومي للعمل",
        workflowsTitle: "رحلة المريض داخل النظام",
        plansEyebrow: "خطط تشغيل مرنة",
        plansTitle: "اختر التغطية المناسبة لطبيعة عيادتك.",
        plansDisclaimer:
          "هذه باقات مقترحة لتجميع ميزات النظام وليست أسعاراً أو اشتراكات مفعّلة داخله. يتم تحديد السعر النهائي والمدة الشهرية أو السنوية حسب عدد المستخدمين ونطاق التشغيل.",
        planPrice: "تسعير حسب الاحتياج",
        planAction: "اطلب عرضاً مناسباً",
        popular: "الخيار الأكثر شمولاً",
        plans: [
          {
            name: "الانطلاقة",
            audience: "للعيادة الفردية وفريق الاستقبال",
            description: "الأساسيات اليومية لإدارة المواعيد والملفات الطبية.",
            includes: [
              "إدارة المرضى والملفات الطبية",
              "المواعيد وجداول الأطباء",
              "مخطط الأسنان وخطة العلاج",
              "الوصفات الطبية وتوثيق الزيارة",
            ],
          },
          {
            name: "النمو",
            audience: "لعيادة تضم عدة أطباء",
            description: "تغطية أوسع للمتابعة السريرية والتحصيل والتشغيل.",
            includes: [
              "جميع مزايا باقة الانطلاقة",
              "الفواتير والمدفوعات وخطط الأقساط",
              "المخزون والتنبيهات التشغيلية",
              "التقارير والعمولات المالية",
            ],
          },
          {
            name: "المركز",
            audience: "للمراكز والفرق متعددة التخصصات",
            description: "متابعة أكثر تفصيلاً للمعامل والخدمات المساندة.",
            includes: [
              "جميع مزايا باقة النمو",
              "طلبات معامل الأسنان ومتابعة تكلفتها",
              "إدارة التأمين وشركاته",
              "الأدوار والصلاحيات والنسخ الاحتياطي",
            ],
          },
        ],
        audienceEyebrow: "مصمم لفريق العيادة",
        audienceTitle: "كل دور يرى ما يحتاجه لإنجاز عمله.",
        technicalEyebrow: "بنية النظام",
        technicalTitle: "تقنيات موثوقة قابلة للتوسع.",
        technicalNote: project.caseStudy.architecture.ar,
        faqTitle: "أسئلة قبل اختيار النظام",
        faq: [
          {
            question: "هل توجد أسعار اشتراك ثابتة داخل المشروع؟",
            answer:
              "لا يتضمن المشروع حالياً نظام فوترة SaaS أو إدارة اشتراكات. الباقات المعروضة اقتراح تجاري مبني على وحدات النظام، ويحتاج اعتماد الأسعار والحدود قبل النشر.",
          },
          {
            question: "هل يدعم النظام أكثر من دور للمستخدمين؟",
            answer:
              "نعم. يتضمن النظام إدارة مستخدمين وصلاحيات منفصلة، مع مسارات تناسب الإدارة والأطباء والاستقبال والمرضى.",
          },
          {
            question: "ما الذي تعرضه صور الصفحة؟",
            answer:
              "الصور لقطات فعلية من لوحة الإدارة والصفحات التشغيلية أثناء تشغيل نسخة محلية ببيانات عرض تجريبية. لا تعرض بيانات مرضى حقيقية.",
          },
        ],
        contactEyebrow: "جاهز لترتيب تشغيل عيادتك؟",
        contactTitle: "لنحدد معاً الوحدات والباقات التي تناسب فريقك.",
        contactText:
          "شاركنا عدد الأطباء وطريقة العمل الحالية، وسنساعدك في تحديد النطاق الأنسب.",
        contactAction: "تواصل عبر واتساب",
        otherAction: "صفحة التواصل",
      }
    : {
        back: "All projects",
        eyebrow: "Purpose-built dental clinic operations",
        title: "From the first appointment to every treatment detail.",
        heroText:
          "Connect patient records, the odontogram, team scheduling, treatment, and billing in one clinic workspace.",
        viewFeatures: "Explore the capabilities",
        viewPlans: "Compare plans",
        preview: "Captured administration dashboard",
        previewNote:
          "Captured from the local app using sample data, not real patient records.",
        metrics: ["operational modules", "patient journey stages", "interface languages"],
        challengeEyebrow: "From reception to the treatment room",
        challengeTitle: "One clear workflow for every part of your clinic.",
        overview: project.caseStudy.overview.en,
        solutionEyebrow: "Operational value",
        solutionTitle: "Better care, easier follow-up, and clearer finances.",
        solution: project.caseStudy.solution.en,
        publicEyebrow: "Public clinic website",
        publicTitle: "A patient-facing website with online booking.",
        publicText:
          "Alongside the internal dashboard, the system includes a public-facing clinic website for services, dentist profiles and schedules, smile gallery content, contact details, patient reviews, and online appointment booking.",
        publicFeatures: [
          "Home page and clinical services",
          "Before-and-after smile gallery",
          "Dentist profiles and schedules",
          "Online appointment booking",
          "Contact, inquiries, and reviews",
          "Staff portal access",
        ],
        screenshotsEyebrow: "Inside the administration workspace",
        screenshotsTitle: "Real application screens for each workflow.",
        screenshotNote:
          "Captured from the locally running app. All displayed data is sample content, not real patient records.",
        screenshots: [
          {
            src: "/images/projects/dental-clinic/admin-patients.png",
            height: 1100,
            title: "Patient records",
            description: "The patient directory provides quick access to each profile.",
          },
          {
            src: "/images/projects/dental-clinic/admin-patient-record.png",
            height: 1298,
            title: "Patient medical record",
            description: "Review patient details and history in one place.",
          },
          {
            src: "/images/projects/dental-clinic/admin-appointments.png",
            height: 1100,
            title: "Appointment scheduling",
            description: "Track bookings, team schedules, and appointment status.",
          },
          {
            src: "/images/projects/dental-clinic/admin-visits.png",
            height: 1100,
            title: "Visit documentation",
            description: "Keep clinical notes and visit details with the patient record.",
          },
          {
            src: "/images/projects/dental-clinic/admin-treatments.png",
            height: 1100,
            title: "Treatments and plans",
            description: "Manage treatment progress and dental plans within the record.",
          },
          {
            src: "/images/projects/dental-clinic/admin-prescriptions.png",
            height: 1100,
            title: "Prescriptions and medications",
            description: "Create and review prescriptions linked to a patient visit.",
          },
          {
            src: "/images/projects/dental-clinic/admin-billing.png",
            height: 1100,
            title: "Invoices and payments",
            description: "Follow invoices, payments, and outstanding balances.",
          },
          {
            src: "/images/projects/dental-clinic/admin-inventory.png",
            height: 1100,
            title: "Inventory and supplies",
            description: "Review item quantities and track supply needs.",
          },
          {
            src: "/images/projects/dental-clinic/admin-services.png",
            height: 1100,
            title: "Services and pricing",
            description: "Manage the clinic’s available services and prices.",
          },
          {
            src: "/images/projects/dental-clinic/admin-reports.png",
            height: 1280,
            title: "Operational reports",
            description: "Review clinic activity and financial reporting.",
          },
        ],
        modulesEyebrow: "An integrated workspace",
        modulesTitle: "Every module supports a real clinic workflow.",
        workflowsEyebrow: "A day in the clinic",
        workflowsTitle: "The patient journey through the system",
        plansEyebrow: "Flexible operating plans",
        plansTitle: "Choose coverage that fits your clinic.",
        plansDisclaimer:
          "These are suggested bundles of existing system features, not active prices or subscriptions in the app. Final pricing and monthly or annual terms should be agreed based on users and operating scope.",
        planPrice: "Custom quote",
        planAction: "Request a tailored quote",
        popular: "Most comprehensive",
        plans: [
          {
            name: "Essentials",
            audience: "For an independent clinic and reception team",
            description: "Daily essentials for appointments and clinical records.",
            includes: [
              "Patient and medical records",
              "Appointments and dentist schedules",
              "Odontogram and treatment planning",
              "Prescriptions and visit notes",
            ],
          },
          {
            name: "Growth",
            audience: "For a clinic with multiple dentists",
            description: "More coverage for clinical follow-up, billing, and operations.",
            includes: [
              "Everything in Essentials",
              "Invoices, payments, and installment plans",
              "Inventory and operational alerts",
              "Reports and doctor commissions",
            ],
          },
          {
            name: "Center",
            audience: "For centers and multidisciplinary teams",
            description: "Detailed coordination for labs and supporting workflows.",
            includes: [
              "Everything in Growth",
              "Dental lab orders and expense tracking",
              "Insurance and company management",
              "Roles, permissions, and backups",
            ],
          },
        ],
        audienceEyebrow: "Built around your team",
        audienceTitle: "Each role gets the tools it needs to do the work.",
        technicalEyebrow: "System architecture",
        technicalTitle: "A reliable foundation built to grow.",
        technicalNote: project.caseStudy.architecture.en,
        faqTitle: "Questions to consider",
        faq: [
          {
            question: "Does the project include fixed subscription pricing?",
            answer:
              "The project does not currently include SaaS subscription or billing management. The plans shown are proposed bundles based on system modules; pricing and limits need approval before publishing.",
          },
          {
            question: "Can different staff roles use the system?",
            answer:
              "Yes. User and permission management supports separate workflows for administrators, dentists, receptionists, and patients.",
          },
          {
            question: "What do the page screenshots show?",
            answer:
              "They are real captures of the administration and workflow screens from a locally running version. All displayed content is sample data, not real patient records.",
          },
        ],
        contactEyebrow: "Ready to organize your clinic?",
        contactTitle: "Let’s choose the right modules and plan for your team.",
        contactText:
          "Tell us how many dentists you have and how your team works today, and we’ll help scope a suitable setup.",
        contactAction: "Chat on WhatsApp",
        otherAction: "Contact page",
      };

  return (
    <article className="mx-auto w-full max-w-7xl px-5 pb-20 pt-8 md:px-8 md:pt-12">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link
          href={getProjectsPath(locale)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-blue"
        >
          {isArabic ? (
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          ) : (
            <ArrowLeft className="h-4 w-4" aria-hidden />
          )}
          {copy.back}
        </Link>
        <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-muted">
          {isArabic ? "مشروع ويب" : "Web application"}
        </span>
      </div>

      <section className="relative isolate overflow-hidden rounded-[2rem] bg-[#0a1033] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
        <div
          className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-[#2e9bff]/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl"
          aria-hidden
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-emerald-200">
              <Stethoscope className="h-4 w-4" aria-hidden />
              {copy.eyebrow}
            </span>
            <h1 className="mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              {copy.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#modules"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0a1033] transition-transform hover:-translate-y-0.5"
              >
                {copy.viewFeatures}
                {isArabic ? (
                  <ArrowUpLeft className="h-4 w-4" aria-hidden />
                ) : (
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                )}
              </a>
              <a
                href="#plans"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                {copy.viewPlans}
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs leading-6 text-slate-300">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden />
              {isArabic
                ? "صلاحيات واضحة ومسارات مصممة لخصوصية بيانات المرضى."
                : "Role-based workflows designed with patient privacy in mind."}
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-2xl">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white p-2 shadow-2xl shadow-black/30">
              <div className="overflow-hidden rounded-xl bg-[#0b1226]">
                <Image
                  src="/images/projects/dental-clinic/admin-dashboard.png"
                  alt={copy.preview}
                  width={1920}
                  height={1497}
                  priority
                  unoptimized
                  className="block h-auto w-full"
                />
              </div>
            </div>
            <figcaption className="mt-3 text-center text-xs text-slate-300">
              {copy.preview} — {copy.previewNote}
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        aria-label={isArabic ? "ملخص النظام" : "System summary"}
        className="my-7 grid gap-3 rounded-2xl border border-line bg-surface p-4 shadow-[0_12px_42px_-32px_rgba(10,16,51,0.5)] sm:grid-cols-3 sm:p-5"
      >
        {[
          { value: features.length, label: copy.metrics[0] },
          { value: guide.workflows.length, label: copy.metrics[1] },
          { value: 2, label: copy.metrics[2] },
        ].map((metric, index) => (
          <div
            key={metric.label}
            className={`flex items-center gap-4 px-3 py-3 sm:justify-center ${
              index > 0 ? "border-t border-line sm:border-r sm:border-t-0" : ""
            }`}
          >
            <span className="text-3xl font-extrabold tracking-tight text-blue">
              {metric.value}
            </span>
            <span className="max-w-32 text-sm leading-6 text-muted">{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="grid gap-5 py-12 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-3xl border border-line bg-surface p-6 md:p-8">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
            {copy.challengeEyebrow}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug text-foreground md:text-3xl">
            {copy.challengeTitle}
          </h2>
          <p className="mt-4 text-sm leading-8 text-muted md:text-base">
            {project.caseStudy.problem[locale]}
          </p>
        </div>
        <div className="rounded-3xl border border-emerald-900/10 bg-[#e8f5f2] p-6 md:p-8 dark:border-emerald-200/10 dark:bg-emerald-950/20">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
            {copy.solutionEyebrow}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug text-foreground md:text-3xl">
            {copy.solutionTitle}
          </h2>
          <p className="mt-4 text-sm leading-8 text-muted md:text-base">{copy.solution}</p>
        </div>
      </section>

      <section
        aria-label={copy.publicTitle}
        className="my-4 grid gap-6 rounded-3xl border border-blue/10 bg-gradient-to-br from-[#edf6ff] via-surface to-[#e8f5f2] p-6 md:p-8 lg:grid-cols-[0.85fr_1.15fr] dark:from-blue-950/20 dark:to-emerald-950/10"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
            {copy.publicEyebrow}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug text-foreground md:text-3xl">
            {copy.publicTitle}
          </h2>
          <p className="mt-4 text-sm leading-8 text-muted md:text-base">
            {copy.publicText}
          </p>
          <a
            href="http://localhost:5098/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            {isArabic ? "زيارة الموقع العام" : "Visit public website"}
            {isArabic ? (
              <ArrowUpLeft className="h-4 w-4" aria-hidden />
            ) : (
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            )}
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {copy.publicFeatures.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/75 p-4 text-sm font-semibold text-foreground shadow-[0_12px_28px_-22px_rgba(10,16,51,0.5)] dark:border-white/10 dark:bg-white/[0.05]"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                <Check className="h-3.5 w-3.5" aria-hidden />
              </span>
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section id="screenshots" aria-labelledby="dental-screenshots" className="scroll-mt-24 py-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
              {copy.screenshotsEyebrow}
            </span>
            <h2
              id="dental-screenshots"
              className="mt-2 text-2xl font-extrabold text-foreground md:text-3xl"
            >
              {copy.screenshotsTitle}
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-muted">{copy.screenshotNote}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {copy.screenshots.map((screen) => (
            <figure
              key={screen.src}
              className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_18px_48px_-32px_rgba(10,16,51,0.55)]"
            >
              <div className="overflow-hidden bg-[#0b1226]">
                <Image
                  src={screen.src}
                  alt={screen.title}
                  width={1920}
                  height={screen.height}
                  unoptimized
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="px-5 py-4">
                <span className="block font-bold text-foreground">{screen.title}</span>
                <span className="mt-1 block text-xs leading-6 text-muted">
                  {screen.description}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="modules" aria-labelledby="dental-modules" className="scroll-mt-24 py-12">
        <div className="mb-7 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
            {copy.modulesEyebrow}
          </span>
          <h2
            id="dental-modules"
            className="mt-2 text-2xl font-extrabold text-foreground md:text-3xl"
          >
            {copy.modulesTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted md:text-base">
            {copy.overview}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length];
            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue/35 hover:shadow-[0_20px_40px_-30px_rgba(0,87,231,0.5)] md:p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-base font-bold leading-7 text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{feature.description}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            isArabic ? "إدارة المخزون والمستلزمات" : "Inventory and supplies",
            isArabic ? "التأمين والشركات" : "Insurance companies",
            isArabic ? "التقارير والتصدير" : "Reports and exports",
            isArabic ? "إدارة الصلاحيات" : "Permission management",
          ].map((module) => (
            <span
              key={module}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-xs font-semibold text-muted"
            >
              <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
              {module}
            </span>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="dental-workflows"
        className="my-8 rounded-3xl bg-[#111a41] px-6 py-9 text-white md:px-9 md:py-11"
      >
        <div className="mb-7">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
            {copy.workflowsEyebrow}
          </span>
          <h2 id="dental-workflows" className="mt-2 text-2xl font-extrabold md:text-3xl">
            {copy.workflowsTitle}
          </h2>
        </div>
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {guide.workflows.map((workflow, index) => (
            <li
              key={workflow}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-300/15 text-sm font-extrabold text-emerald-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-7 text-slate-200">{workflow}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="plans" aria-labelledby="dental-plans" className="scroll-mt-24 py-12">
        <div className="mx-auto mb-7 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
            {copy.plansEyebrow}
          </span>
          <h2
            id="dental-plans"
            className="mt-2 text-2xl font-extrabold text-foreground md:text-3xl"
          >
            {copy.plansTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">{copy.plansDisclaimer}</p>
        </div>
        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {copy.plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-surface p-6 ${
                index === 1
                  ? "border-blue shadow-[0_24px_70px_-42px_rgba(0,87,231,0.75)] lg:-translate-y-2"
                  : "border-line"
              }`}
            >
              {index === 1 ? (
                <span className="absolute -top-3 right-6 rounded-full bg-blue px-3 py-1 text-xs font-bold text-white">
                  {copy.popular}
                </span>
              ) : null}
              <span className="text-sm font-bold text-blue">{plan.audience}</span>
              <h3 className="mt-3 text-2xl font-extrabold text-foreground">{plan.name}</h3>
              <p className="mt-2 min-h-14 text-sm leading-7 text-muted">
                {plan.description}
              </p>
              <div className="my-5 border-y border-line py-4">
                <span className="block text-xs text-muted">{copy.planPrice}</span>
                <span className="mt-1 block text-lg font-extrabold text-foreground">
                  {isArabic ? "اطلب تسعيراً" : "Request pricing"}
                </span>
              </div>
              <ul className="flex-1 space-y-3">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-muted">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappChatHref(
                  `${contactMessage} ${isArabic ? "الباقة: " : "Plan: "}${plan.name}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                  index === 1
                    ? "bg-blue text-white hover:bg-blue/90"
                    : "border border-line bg-surface text-foreground hover:border-blue/40 hover:text-blue"
                }`}
              >
                {copy.planAction}
                {isArabic ? (
                  <ArrowUpLeft className="h-4 w-4" aria-hidden />
                ) : (
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                )}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
            {copy.audienceEyebrow}
          </span>
          <h2 className="mt-2 text-2xl font-extrabold leading-snug text-foreground md:text-3xl">
            {copy.audienceTitle}
          </h2>
          <ul className="mt-6 space-y-3">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 text-sm leading-6 text-muted"
              >
                <UsersRound className="mt-0.5 h-4 w-4 shrink-0 text-blue" aria-hidden />
                {audience}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-line bg-surface-2/70 p-6 md:p-8">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
            {copy.technicalEyebrow}
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-foreground md:text-3xl">
            {copy.technicalTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">{copy.technicalNote}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { label: "ASP.NET Core MVC", icon: Layers },
              { label: "Entity Framework Core", icon: Database },
              { label: "SQL Server", icon: ClipboardList },
              { label: "C# · Chart.js · Bootstrap", icon: FileText },
            ].map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-foreground"
              >
                <Icon className="h-4 w-4 text-blue" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-muted">
            <HeartPulse className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden />
            {isArabic
              ? "النظام يدعم العربية والإنجليزية، ويقدم واجهات متجاوبة مع إجراءات دخول وصلاحيات."
              : "The system supports Arabic and English, responsive layouts, and role-based access."}
          </p>
        </div>
      </section>

      <section aria-labelledby="dental-faq" className="py-10">
        <h2 id="dental-faq" className="mb-5 text-2xl font-extrabold text-foreground">
          {copy.faqTitle}
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          {copy.faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-line bg-surface p-5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-bold leading-7 text-foreground">
                {item.question}
                <span className="mt-1 text-blue transition-transform group-open:rotate-180">
                  <span className="sr-only">
                    {isArabic ? "عرض الإجابة" : "Show answer"}
                  </span>
                  <span aria-hidden>⌄</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="dental-contact" className="mt-10 scroll-mt-24 overflow-hidden rounded-3xl bg-gradient-to-br from-blue to-[#0a1033] px-6 py-9 text-white md:px-10 md:py-12">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
          {copy.contactEyebrow}
        </span>
        <div className="mt-3 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="max-w-3xl text-2xl font-extrabold leading-snug md:text-3xl">
              {copy.contactTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50">{copy.contactText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-blue transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {copy.contactAction}
            </a>
            <Link
              href={contactPath}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {copy.otherAction}
              {isArabic ? (
                <ArrowUpLeft className="h-4 w-4" aria-hidden />
              ) : (
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              )}
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
