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

export const VALUES: ValueCard[] = [
  {
    icon: "Zap",
    title: { en: "Precision over hype", ar: "الدقة على الضجيج" },
    description: {
      en: "We pick boring, proven technology first — and reserve novelty for places it earns its keep.",
      ar: "نختار التقنيات المجربة والمملة أولاً — ونحتفظ بالجديد للمواضع التي تستحقه.",
    },
  },
  {
    icon: "ShieldCheck",
    title: { en: "Ship with a safety net", ar: "أطلق بشبكة أمان" },
    description: {
      en: "Tests, staging, dry runs and rollbacks. Confidence is engineered, not wished for.",
      ar: "اختبارات وبيئات تجريبية وتجارب ترحيل وخطط تراجع. الثقة تُهندس لا تُمنى.",
    },
  },
  {
    icon: "Users",
    title: { en: "Teach everything", ar: "علّم كل شيء" },
    description: {
      en: "Documentation, sessions and pairing — clients end engagements able to move without us.",
      ar: "توثيق وجلسات وبرمجة ثنائية — يخرج العملاء من التعاقد وقادرون على التحرك بدوننا.",
    },
  },
  {
    icon: "LineChart",
    title: { en: "Measure what matters", ar: "قِس ما يهم" },
    description: {
      en: "Every project carries the metrics it promised on day one. We report against them for free.",
      ar: "كل مشروع يحمل المقاييس التي وعد بها من يومه الأول. نقيسها ونبلغك مجاناً.",
    },
  },
];
