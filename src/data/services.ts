import type { Service } from "./types";

/**
 * EHATA Core Practice Areas & SaaS Solutions.
 * `id` doubles as the option value in the contact form's service dropdown
 * (src/components/sections/contact-form.tsx) — keep them in sync.
 */
export const SERVICES: Service[] = [
  {
    id: "custom-software",
    icon: "Code2",
    title: { en: "Custom Business & Enterprise Solutions", ar: "حلول برمجية مخصصة للشركات" },
    description: {
      en: "Off-the-shelf software rarely fits complex business models. We engineer robust, high-scalability custom systems tailored to your unique workflows with enterprise security and clean handover.",
      ar: "مش كل برنامج جاهز يناسب طريقة شغلك المعقدة. بنبني حلولاً برمجية مخصصة تلائم مسارات عملك بدقة، مع معمارية قابلة للتوسع وتوثيق وتسليم كامل للكود.",
    },
    features: [
      { en: "Deep workflow mapping & technical architecture design", ar: "رسم مسارات العمل وهندسة معمارية تقنية متطورة" },
      { en: "High-scalability microservices & secure REST/GraphQL APIs", ar: "بنية تحتية سحابية قابلة للتوسع وواجهات برمجة آمنة" },
      { en: "Automated testing & comprehensive quality assurance", ar: "اختبارات آلية لمسارات العمل الأساسية وضمان الجودة" },
      { en: "Complete source code handover & technical documentation", ar: "توثيق شامل وتسليم كامل لملكية الشيفرة البرمجية" },
    ],
  },
  {
    id: "erp",
    icon: "Database",
    title: { en: "ERP & Operations Systems", ar: "أنظمة ERP والعمليات المؤسسية" },
    description: {
      en: "Eliminate operational silos across accounting, supply chain, inventory, and sales. We build connected cloud ERP platforms fully compliant with ZATCA Phase 2 (KSA) and Egyptian ETA e-invoicing.",
      ar: "تخلص من جزر البيانات المنعزلة بين المحاسبة والمخزون والمبيعات والموارد البشرية. نبني أنظمة ERP سحابية متوافقة 100% مع الفاتورة الإلكترونية وهيئة الزكاة والضريبة والجمارك (ZATCA).",
    },
    features: [
      { en: "Phased rollout tailored to critical operational priorities", ar: "تشغيل الوحدات والموديولات على مراحل مخططة ومنضبطة" },
      { en: "Unified purchasing, multi-warehouse stock, sales, and GL accounting", ar: "ربط المشتريات والمخازن المتعددة والمبيعات بالحسابات العامة لحظياً" },
      { en: "Strict compliance with Egyptian ETA and Saudi ZATCA Phase 2", ar: "امتثال كامل لمنظومة الفاتورة الإلكترونية وهيئة الزكاة (ZATCA)" },
      { en: "Seamless historical data migration from Excel or legacy systems", ar: "ترحيل وتدقيق البيانات من الجداول والأنظمة القديمة بأمان" },
    ],
  },
  {
    id: "dental-clinic",
    icon: "Sparkles",
    title: { en: "Dental Clinic SaaS & Medical Systems", ar: "أنظمة إدارة عيادات ومراكز الأسنان الذكية" },
    description: {
      en: "A comprehensive clinical and administrative SaaS platform for dental practices: interactive odontograms, smart appointment scheduling, automated WhatsApp notifications, and lab order tracking.",
      ar: "نظام سحابي ذكي مصمم لمراكز وعيادات طب الأسنان: مخطط أسنان تفاعلي ثلاثي الأبعاد، حجز ذكي، تذكيرات واتساب آلية، تتبع المعامل، وإدارة دقيقة للنسب المالية.",
    },
    features: [
      { en: "Interactive visual tooth chart (Odontogram) & treatment plans", ar: "مخطط أسنان تفاعلي (Odontogram) وخطط علاج متقدمة" },
      { en: "Automated WhatsApp appointment confirmations (cut no-shows by 40%)", ar: "أتمتة تأكيد المواعيد عبر واتساب لتقليل التخلف بنسبة 40%" },
      { en: "Dental laboratory order management & material cost tracking", ar: "متابعة أوامر معامل الأسنان وتكلفة التركيبات بدقة" },
      { en: "Installment billing, electronic prescriptions & doctor revenue sharing", ar: "خطط سداد بالأقساط، وصفات إلكترونية، وحساب نسب الأطباء" },
    ],
  },
  {
    id: "ecommerce",
    icon: "Rocket",
    title: { en: "E-Commerce & High-Volume Retail Platforms", ar: "منصات التجارة الإلكترونية وحلول التجزئة" },
    description: {
      en: "High-performance e-commerce platforms engineered for conversion and speed in Egypt and the GCC: local payment integrations (Paymob, Tamara, Tabby), live courier dispatch, and multi-branch inventory.",
      ar: "منصات تجارة إلكترونية سريعة ومصممة للنمو في مصر والخليج: ربط بوابات الدفع والتقسيط (Paymob، تابي، تمارا)، والتوزيع اللوجستي الآلي، وتتبع المخزون اللحظي.",
    },
    features: [
      { en: "Sub-second page speeds & optimized high-conversion checkout", ar: "سرعة تحميل فائقة وتجربة شراء سلسة لتعظيم المبيعات" },
      { en: "Integrated GCC & Egyptian payment gateways & Buy-Now-Pay-Later", ar: "تكامل مع بوابات الدفع المحلية وخدمات الشراء الآن والدفع لاحقاً" },
      { en: "Automated courier dispatch & live map order tracking", ar: "إسناد آلي لشركات الشحن وتتبع لحظي لمسار الطلبات" },
      { en: "Synchronized multi-branch stock & point-of-sale (POS) connectivity", ar: "مزامنة لحظية للمخزون بين الفروع والمتاجر الإلكترونية" },
    ],
  },
  {
    id: "courses-training",
    icon: "GraduationCap",
    title: { en: "E-Learning Platforms & Technical Academy", ar: "منصات التعليم الإلكتروني والأكاديميات" },
    description: {
      en: "Custom LMS platforms with DRM video piracy protection, interactive quizzes, and live classrooms, alongside hands-on corporate engineering upskilling and developer academy tracks.",
      ar: "منصات تعليم إلكتروني مخصصة (LMS) مع حماية الفيديوهات من القرصنة، واختبارات تفاعلية وفصول مباشرة، إلى جانب تدريب الفرق البرمجية في الشركات.",
    },
    features: [
      { en: "DRM video encryption & watermarking against unauthorized screen recording", ar: "تشفير الفيديوهات (DRM) وعلامات مائية لمنع القرصنة والتسريب" },
      { en: "Interactive assessment engines, quizzes & automated digital certificates", ar: "محركات اختبارات تفاعلية وإصدار شهادات إتمام رقمية معتمدة" },
      { en: "Live cohort scheduling, virtual classrooms & student analytics", ar: "إدارة الفصول الافتراضية المباشرة ولوحات متابعة تقدم الطلاب" },
      { en: "Corporate tech upskilling tailored to your team's exact technology stack", ar: "برامج تدريب وتطوير تقني مخصصة تناسب تقنيات فريق شركتك" },
    ],
  },
  {
    id: "web-saas",
    icon: "Globe",
    title: { en: "Web Platforms & SaaS Products", ar: "منصات الويب ومنتجات SaaS" },
    description: {
      en: "Building a multi-tenant digital product? We architect browser-based SaaS platforms with isolated tenant data, subscription billing, usage analytics, and administrative controls.",
      ar: "تبني منتجاً سحابياً لخدمة آلاف العملاء؟ نطوّر منصات SaaS متكاملة بإدارة اشتراكات دورية، وعزل بيانات العملاء، ولوحات تحليلات متقدمة.",
    },
    features: [
      { en: "Multi-tenant architecture with robust data isolation", ar: "معمارية متعددة المستأجرين مع عزل كامل لحسابات وبيانات العملاء" },
      { en: "Automated recurring subscription billing & tier management", ar: "إدارة الاشتراكات والفوترة الدورية لمختلف الباقات السحابية" },
      { en: "Executive analytics & platform administration dashboards", ar: "لوحات تحكم تنفيذية لمراقبة مؤشرات النمو واستخدام المنصة" },
      { en: "Cloud-native auto-scaling infrastructure on AWS / GCP / Vercel", ar: "بنية تحتية سحابية مرنة وقابلة للتوسع التلقائي عند زيادة الزيارات" },
    ],
  },
  {
    id: "uiux",
    icon: "Palette",
    title: { en: "Interface Design & User Experience", ar: "تصميم الواجهات وتجربة المستخدم" },
    description: {
      en: "Complex software is harder to adopt when its interface does not reflect how people work. We use user research, interactive prototypes, and modern design systems to shape effortless experiences.",
      ar: "يصبح استخدام البرمجيات المعقدة عائقاً عندما لا تعكس واجهتها راحة المستخدم. نعتمد أحدث مناهج البحث والنماذج التفاعلية وأنظمة التصميم لبناء تجارب استثنائية.",
    },
    features: [
      { en: "User research & contextual workflow interviews", ar: "دراسة سلوك المستخدمين الفعليين وفهم متطلباتهم التشغيلية" },
      { en: "Comprehensive design systems & Figma token libraries", ar: "أنظمة تصميم متكاملة ومكتبات عناصر قابلة لإعادة الاستخدام" },
      { en: "WCAG accessibility standards & high-contrast dark modes", ar: "مراعاة معايير الإتاحة العالمية وتوفير أنماط داكنة وفاتحة مريحة" },
      { en: "Interactive high-fidelity prototypes & usability validation", ar: "نماذج تفاعلية عالية الدقة واختبارات لسهولة الاستخدام قبل البرمجة" },
    ],
  },
  {
    id: "consulting",
    icon: "LifeBuoy",
    title: { en: "Technical Consulting & Architecture Audits", ar: "استشارات تقنية ومراجعة المعمارية" },
    description: {
      en: "Inherited a legacy codebase or facing a stalled software initiative? We audit your architecture, identify performance and security bottlenecks, and deliver clear engineering roadmaps.",
      ar: "تواجه تحديات في مشروع برمجي قائم أو ترغب في تدقيق جودة الكود؟ نراجع الأنظمة القائمة ونحدد الثغرات ونقدم خطة عمل هندسية واضحة للارتقاء بالأداء.",
    },
    features: [
      { en: "Codebase quality, security & architectural health reviews", ar: "مراجعة شاملة لجودة الأكواد ومعايير الأمان وقابلية الصيانة" },
      { en: "Cloud cost optimization & infrastructure scaling roadmaps", ar: "ترشيد تكاليف الاستضافة السحابية وخطط التوسع الفني" },
      { en: "Rescue plans & technical triage for stalled projects", ar: "خطط إنقاذ وتطوير للمشاريع البرمجية المتعثرة" },
      { en: "Senior engineering advisory for founders and CTOs", ar: "استشارات وتوجيه تقني رفيع المستوى للإدارات العليا وفرق التطوير" },
    ],
  },
];
