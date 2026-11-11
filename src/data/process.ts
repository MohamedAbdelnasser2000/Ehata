import type { ProcessStep, ValueCard } from "./types";

/** Discover → Design → Build → Launch → Support */
export const PROCESS: ProcessStep[] = [
  {
    id: "discover",
    icon: "Eye",
    title: { en: "Discover", ar: "الاكتشاف" },
    description: {
      en: "Workshops with the people who'll actually use the system. We map workflows, constraints and the metrics that define success.",
      ar: "ورش مع الأشخاص الذين سيستخدمون النظام فعلاً. نرسم خريطة سير العمل والقيود والمقاييس التي تعرف النجاح.",
    },
  },
  {
    id: "design",
    icon: "Palette",
    title: { en: "Design", ar: "التصميم" },
    description: {
      en: "Clickable prototypes and architecture decision records in parallel — so nothing is discovered late.",
      ar: "نماذج قابلة للنقر وسجلات قرارات معمارية بالتوازي — حتى لا يُكتشف شيء متأخراً.",
    },
  },
  {
    id: "build",
    icon: "Code2",
    title: { en: "Build", ar: "البناء" },
    description: {
      en: "Weekly demo-driven sprints, test-first code, continuous integration. You see working software every Friday.",
      ar: "أسابيع عرض أسبوعية وكود بالاختبار أولاً وتكامل مستمر. ترى برمجيات عاملة كل جمعة.",
    },
  },
  {
    id: "launch",
    icon: "Rocket",
    title: { en: "Launch", ar: "الإطلاق" },
    description: {
      en: "Migration dry-runs, rollback plans and a cutover weekend with a war room — then boring, calm production.",
      ar: "تجارب ترحيل وخطط تراجع وعطلة تحويل بغرفة عمليات — ثم إنتاج ممل وهادئ.",
    },
  },
  {
    id: "support",
    icon: "LifeBuoy",
    title: { en: "Support", ar: "الدعم" },
    description: {
      en: "SLA-backed monitoring, quarterly reviews and a knowledge transfer plan so the system is never a black box.",
      ar: "مراقبة بعقود SLA ومراجعات ربع سنوية وخطة نقل معرفة حتى لا يكون النظام صندوقاً أسود.",
    },
  },
];

export const HOW_WE_WORK = [
  {
    id: "scoping",
    step: "01",
    icon: "MessageSquare",
    title: { en: "Free scoping session", ar: "جلسة مجانية لتحديد النطاق" },
    description: {
      en: "We discuss how your operation runs, what is getting in the way and what you need the system to do.",
      ar: "نتحدث عن طريقة سير عملياتك، وما يواجهك من تحديات، وما تحتاج أن يقدمه النظام.",
    },
  },
  {
    id: "scope",
    step: "02",
    icon: "FileText",
    title: { en: "Define the right scope", ar: "تحديد نطاق العمل المناسب" },
    description: {
      en: "We clarify your priorities and agree on a practical direction before development starts.",
      ar: "نحدد أولوياتك ونتفق على اتجاه عملي قبل بدء التطوير.",
    },
  },
  {
    id: "build",
    step: "03",
    icon: "Code2",
    title: { en: "Build and review", ar: "التطوير والمراجعة" },
    description: {
      en: "We develop in clear stages and review progress together to keep the work connected to your needs.",
      ar: "نطوّر على مراحل واضحة ونراجع التقدم معًا حتى يظل العمل مرتبطًا باحتياجاتك.",
    },
  },
  {
    id: "handover",
    step: "04",
    icon: "GraduationCap",
    title: { en: "Handover and knowledge sharing", ar: "التسليم ونقل المعرفة" },
    description: {
      en: "We document the work and walk your team through using and maintaining the system.",
      ar: "نوثّق العمل ونشرح لفريقك طريقة استخدام النظام وصيانته.",
    },
  },
] as const;

export const VALUES: ValueCard[] = [
  {
    icon: "MessageSquare",
    title: { en: "Direct communication", ar: "تواصل مباشر" },
    description: {
      en: "You work directly with the engineers building your system — not a sales team relaying messages. Weekly updates, shared project board, honest status reports.",
      ar: "تعمل مباشرة مع المهندسين الذين يبنون نظامك — لا فريق مبيعات ينقل الرسائل. تحديثات أسبوعية ولوحة مشاريع مشتركة وتقارير حالة صادقة.",
    },
  },
  {
    icon: "ShieldCheck",
    title: {
      en: "We only build what you'll actually use",
      ar: "نبني فقط ما ستستخدمه فعلاً",
    },
    description: {
      en: "No scope inflation. If a feature won't earn its keep, we say so before it's on the invoice. Smaller, working software beats large, delayed software every time.",
      ar: "لا توسيع غير مبرر للنطاق. إذا لم تكن الميزة ذات جدوى، نوضح ذلك مسبقاً. البرمجيات المحددة والعاملة تتفوق دائماً على البرمجيات المتأخرة.",
    },
  },
  {
    icon: "FileCode2",
    title: { en: "You own everything we build", ar: "كل ما نبنيه ملك لك" },
    description: {
      en: "Source code, database schemas, and documentation are handed over at every milestone. We build with full client ownership in mind from day one.",
      ar: "الكود المصدري وخطط قواعد البيانات والتوثيق يُسلَّم إليك عند كل مرحلة. نبني مع مراعاة الملكية الكاملة للعميل من اليوم الأول.",
    },
  },
  {
    icon: "TrendingUp",
    title: {
      en: "Success measured by team adoption",
      ar: "نقيس النجاح باعتماد فريقك للنظام",
    },
    description: {
      en: "A system abandoned after launch is a failed investment. We include onboarding, team training, and post-launch follow-up in every engagement.",
      ar: "النظام الذي لا يستخدمه فريقك هو استثمار لم يكتمل. ندرج تدريب الموظفين والتأهيل والدعم العملي بعد الإطلاق كجزء أساسي من كل مشروع.",
    },
  },
];
