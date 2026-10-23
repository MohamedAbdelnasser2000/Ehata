import type { Service } from "./types";

/**
 * Six practice areas. `id` doubles as the option value in the contact form's
 * service dropdown (src/app/contact/contact-form.tsx) — keep them in sync.
 */
export const SERVICES: Service[] = [
  {
    id: "custom-software",
    icon: "Code2",
    title: { en: "Custom Software Development", ar: "تطوير برمجيات مخصصة" },
    description: {
      en: "Bespoke systems engineered around your workflows — from internal tools to customer-facing platforms, built test-first and documented for handover.",
      ar: "أنظمة مصممة حول سير عملك — من الأدوات الداخلية إلى المنصات الموجهة للعملاء، مبنية بالاختبار أولاً وموثّقة للتسليم.",
    },
    features: [
      { en: "Domain modelling & clean architecture", ar: "نمذجة النطاق ومعمارية نظيفة" },
      { en: ".NET / Node / React codebases", ar: "شبكات كود بـ .NET وNode وReact" },
      { en: "CI/CD pipelines & automated testing", ar: "خطوط CI/CD واختبار آلي" },
      { en: "Performance & security reviews", ar: "مراجعات الأداء والأمان" },
    ],
  },
  {
    id: "web-saas",
    icon: "Globe",
    title: { en: "Web Applications & SaaS Platforms", ar: "تطبيقات الويب ومنصات SaaS" },
    description: {
      en: "Multi-tenant products with billing, auth, dashboards and everything between — designed to scale from first user to enterprise contracts.",
      ar: "منتجات متعددة المستأجرين مع فوترة وتحقق ولوحات تحكم وكل ما بينها — مصممة للتوسع من أول مستخدم حتى عقود المؤسسات.",
    },
    features: [
      { en: "Next.js / React frontends", ar: "واجهات بـ Next.js وReact" },
      { en: "Multi-tenancy & subscription billing", ar: "تعدد المستأجرين والفوترة بالاشتراك" },
      { en: "Analytics & admin dashboards", ar: "لوحات تحليلات وإدارة" },
      { en: "Cloud-native deployment on Azure", ar: "نشر سحابي أصلي على Azure" },
    ],
  },
  {
    id: "erp",
    icon: "Database",
    title: { en: "ERP & Business Management Systems", ar: "أنظمة ERP وإدارة الأعمال" },
    description: {
      en: "Inventory, sales, HR, accounting and procurement unified in one fast system — with migrations from legacy spreadsheets and old ERPs.",
      ar: "المخزون والمبيعات والموارد البشرية والمحاسبة والمشتريات موحّدة في نظام واحد سريع — مع ترحيل من الجداول القديمة وأنظمة ERP السابقة.",
    },
    features: [
      { en: "Module-based, phased rollout", ar: "وحدات مُرحّلة على مراحل" },
      { en: "SQL Server reporting & OLAP views", ar: "تقارير SQL Server ولوحات تحليلية" },
      { en: "Role-based access & audit trails", ar: "صلاحيات حسب الدور مع سجلات تدقيق" },
      { en: "Legacy data migration", ar: "ترحيل البيانات القديمة" },
    ],
  },
  {
    id: "uiux",
    icon: "Palette",
    title: { en: "UI/UX Design", ar: "تصميم واجهات وتجربة المستخدم" },
    description: {
      en: "Research-led interfaces, design systems and interactive prototypes that make complex software feel obvious.",
      ar: "واجهات قائمة على البحث وأنظمة تصميم ونماذج تفاعلية تجعل البرمجيات المعقدة بديهية.",
    },
    features: [
      { en: "Design systems with tokens", ar: "أنظمة تصميم مت قائمة على المتغيرات" },
      { en: "Prototyping & usability testing", ar: "نماذج أولية واختبار قابلية الاستخدام" },
      { en: "Accessibility (WCAG AA)", ar: "إتاحة وصول وفق WCAG AA" },
      { en: "Motion & micro-interaction specs", ar: "مواصفات الحركة والتفاعلات الدقيقة" },
    ],
  },
  {
    id: "courses-training",
    icon: "GraduationCap",
    title: { en: "Programming Courses & Corporate Training", ar: "دورات برمجة وتدريب شركات" },
    description: {
      en: "EHATA Academy tracks — from zero to backend developer — plus in-house programs tailored to your team's stack.",
      ar: "مسارات أكاديمية EHATA — من الصفر إلى مطور خلفية — إضافة إلى برامج داخلية مخصصة لتقنيات فريقك.",
    },
    features: [
      { en: "Project-based curriculum", ar: "منهج قائم على المشاريع" },
      { en: "Live cohorts & self-paced paths", ar: "دفعات مباشرة ومسارات ذاتية" },
      { en: "Code reviews from senior engineers", ar: "مراجعات كود من مهندسين محترفين" },
      { en: "Certificates & hiring pipeline", ar: "شهادات ومسار توظيف" },
    ],
  },
  {
    id: "consulting",
    icon: "LifeBuoy",
    title: { en: "Consulting & Technical Support", ar: "استشارات ودعم تقني" },
    description: {
      en: "Architecture reviews, rescue missions for stalled projects, SLA-backed support and fractional engineering leadership.",
      ar: "مراجعات معمارية ومهام إنقاذ للمشاريع المتعثرة ودعم بعقود SLA وقيادة هندسية جزئية.",
    },
    features: [
      { en: "Architecture & code audits", ar: "تدقيق المعمارية والكود" },
      { en: "SLA support & incident response", ar: "دعم بعقود SLA والاستجابة للحوادث" },
      { en: "Cloud cost optimisation", ar: "تحسين تكاليف السحابة" },
      { en: "Team augmentation", ar: "تعزيز الفرق" },
    ],
  },
];
