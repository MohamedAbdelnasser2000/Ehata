import type { Service } from "./types";

/**
 * Six practice areas. `id` doubles as the option value in the contact form's
 * service dropdown (src/app/contact/contact-form.tsx) — keep them in sync.
 */
export const SERVICES: Service[] = [
  {
    id: "custom-software",
    icon: "Code2",
    title: { en: "Custom Business Software", ar: "برمجيات أعمال مخصصة" },
    description: {
      en: "Off-the-shelf tools do not always match the way your business works. We build software around your workflows, with clear documentation for handover.",
      ar: "مش كل برنامج جاهز يناسب طريقة شغلك. بنبني برمجيات تناسب سير العمل عندك، مع توثيق واضح للتسليم.",
    },
    features: [
      { en: "Map your workflows before development starts", ar: "نرسم سير العمل قبل بدء التطوير" },
      { en: "Maintainable architecture for future changes", ar: "معمارية قابلة للصيانة والتطوير لاحقًا" },
      { en: "Automated tests for important workflows", ar: "اختبارات آلية لمسارات العمل الأساسية" },
      { en: "Documentation to support a clear handover", ar: "توثيق يساعد على تسليم واضح" },
    ],
  },
  {
    id: "web-saas",
    icon: "Globe",
    title: { en: "Web Platforms & SaaS Products", ar: "منصات الويب ومنتجات SaaS" },
    description: {
      en: "Building a digital product for multiple customers? We develop web platforms with account access, billing and dashboards, shaped around your product's requirements.",
      ar: "تبني منتجًا رقميًا يخدم عدة عملاء؟ نطوّر منصات ويب تتضمن إدارة الحسابات والفوترة ولوحات التحكم، وفق متطلبات منتجك.",
    },
    features: [
      { en: "Separate accounts and access for different customers", ar: "حسابات وصلاحيات منفصلة للعملاء المختلفين" },
      { en: "Subscription billing and payment integrations", ar: "فوترة الاشتراكات وتكاملات الدفع" },
      { en: "Analytics and administration dashboards", ar: "لوحات للتحليلات والإدارة" },
      { en: "Cloud deployment options to fit your product", ar: "خيارات نشر سحابي تناسب منتجك" },
    ],
  },
  {
    id: "erp",
    icon: "Database",
    title: { en: "ERP & Operations Systems", ar: "أنظمة ERP والعمليات" },
    description: {
      en: "When inventory, sales and accounting live in separate spreadsheets, daily follow-up gets harder. We bring the modules your operation needs into one system and can plan a migration from existing data.",
      ar: "لما يكون المخزون والمبيعات والحسابات في جداول منفصلة، تصبح المتابعة اليومية أصعب. نجمع الوحدات التي تحتاجها عملياتك في نظام واحد، ونخطط لترحيل البيانات الموجودة.",
    },
    features: [
      { en: "Roll out modules in planned stages", ar: "تشغيل الوحدات على مراحل مخططة" },
      { en: "Bring purchasing, stock, sales or finance into one workflow", ar: "ربط المشتريات والمخزون والمبيعات أو المالية في سير عمل واحد" },
      { en: "Set access permissions around team roles", ar: "تحديد الصلاحيات وفق أدوار الفريق" },
      { en: "Plan data migration from spreadsheets or older systems", ar: "التخطيط لترحيل البيانات من الجداول أو الأنظمة السابقة" },
    ],
  },
  {
    id: "uiux",
    icon: "Palette",
    title: { en: "Interface Design & User Experience", ar: "تصميم الواجهات وتجربة المستخدم" },
    description: {
      en: "Complex software is harder to use when its interface does not reflect how people work. We use research, prototypes and usability testing to shape clearer experiences before development.",
      ar: "يصبح استخدام البرمجيات المعقدة أصعب عندما لا تعكس واجهتها طريقة عمل الناس. نستخدم البحث والنماذج الأولية واختبار سهولة الاستخدام لتصميم تجربة أوضح قبل التطوير.",
    },
    features: [
      { en: "Research with the people who will use the software", ar: "بحث مع الأشخاص الذين سيستخدمون البرنامج" },
      { en: "Design systems for consistent interfaces", ar: "أنظمة تصميم لواجهات متسقة" },
      { en: "Accessibility considerations for different users", ar: "مراعاة احتياجات الإتاحة لمختلف المستخدمين" },
      { en: "Interactive prototypes and usability testing", ar: "نماذج تفاعلية واختبارات لسهولة الاستخدام" },
    ],
  },
  {
    id: "courses-training",
    icon: "GraduationCap",
    title: { en: "Developer Training & Corporate Upskilling", ar: "تدريب المطورين وتطوير مهارات فرق الشركات" },
    description: {
      en: "Build practical development skills through structured academy tracks, or plan training around your team's learning needs.",
      ar: "اكتسب مهارات تطوير عملية من خلال مسارات الأكاديمية، أو خطط لتدريب يناسب احتياجات فريقك.",
    },
    features: [
      { en: "Project-based learning tracks", ar: "مسارات تعلم قائمة على المشاريع" },
      { en: "Live cohorts and self-paced learning options", ar: "دفعات مباشرة وخيارات تعلم بالسرعة المناسبة" },
      { en: "Code reviews and practical feedback", ar: "مراجعة الكود وملاحظات عملية" },
      { en: "Certificates on completion", ar: "شهادات عند إتمام المسار" },
    ],
  },
  {
    id: "consulting",
    icon: "LifeBuoy",
    title: { en: "Technical Consulting & Project Support", ar: "استشارات تقنية ودعم المشاريع" },
    description: {
      en: "Inherited a codebase or facing a stalled project? We review the current system, identify practical next steps and can provide ongoing technical support.",
      ar: "استلمت مشروعًا قائمًا أو توقف العمل فيه؟ نراجع النظام الحالي، ونحدد خطوات عملية تالية، ويمكننا تقديم دعم تقني مستمر.",
    },
    features: [
      { en: "Architecture and code reviews", ar: "مراجعة المعمارية والكود" },
      { en: "Support plans and incident response", ar: "خطط دعم واستجابة للحوادث" },
      { en: "Cloud infrastructure reviews", ar: "مراجعة البنية التحتية السحابية" },
      { en: "Technical guidance for your team", ar: "توجيه تقني لفريقك" },
    ],
  },
];
