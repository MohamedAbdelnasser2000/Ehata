import type { FaqItem, PricingModel } from "./types";

export const PRICING: PricingModel[] = [
  {
    id: "fixed",
    icon: "Briefcase",
    name: { en: "Fixed price", ar: "سعر ثابت" },
    blurb: {
      en: "Clear scope, fixed date, one number. Best for well-defined features and MVPs.",
      ar: "نطاق واضح وتاريخ محدد ورقم واحد. الأمثل للميزات المحددة جيداً والنماذج الأولية.",
    },
    bullets: [
      { en: "Detailed written scope before kickoff", ar: "نطاق مكتوب مفصل قبل الانطلاق" },
      { en: "Milestone-based payments", ar: "دفعات على المراحل" },
      { en: "Two revision rounds included", ar: "جولتا تعديل مشمولتان" },
    ],
  },
  {
    id: "dedicated",
    icon: "Users",
    name: { en: "Dedicated team", ar: "فريق مخصص" },
    blurb: {
      en: "A full squad — engineers, design, QA — working only on your product, monthly.",
      ar: "فريق كامل — مهندسون وتصميم وضمان جودة — يعمل على منتجك فقط، بنظام شهري.",
    },
    bullets: [
      { en: "Monthly roadmap planning", ar: "تخطيط شهري لخارطة الطريق" },
      { en: "Direct Slack access to the squad", ar: "وصول Slack مباشر للفريق" },
      { en: "Scale the squad up or down monthly", ar: "كبّر الفريق أو صغّره شهرياً" },
    ],
    popular: true,
  },
  {
    id: "hourly",
    icon: "Timer",
    name: { en: "Hourly", ar: "بالساعة" },
    blurb: {
      en: "Flexible capacity for audits, rescue work and support that doesn't fit a box.",
      ar: "طاقة مرنة للتدقيق ومهام الإنقاذ والدعم الذي لا يدخل في قالب.",
    },
    bullets: [
      { en: "10-hour minimum blocks", ar: "حد أدنى 10 ساعات" },
      { en: "Time-tracked, receipts always open", ar: "بالتتبع والفواتير مفتوحة دائماً" },
      { en: "Same-week availability", ar: "توفر في نفس الأسبوع" },
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    q: { en: "How do engagements usually start?", ar: "كيف تبدأ التعاقدات عادة؟" },
    a: {
      en: "With a two-week paid discovery: workflows, constraints, architecture sketch and a fixed estimate. You keep the artifacts whether or not we build together.",
      ar: "باكتشاف مدفوع لمدة أسبوعين: سير العمل والقيود ورسم معماري وتقدير نهائي. تبقى المخرجات لديك سواء بنينا معاً أم لا.",
    },
  },
  {
    q: { en: "Who owns the code?", ar: "من يملك الكود؟" },
    a: {
      en: "You do — from the first commit. Repos, pipelines and cloud accounts live in your organisation; we work inside them.",
      ar: "أنت — من أول commit. المستودعات والخطوط وحسابات السحابة في منظمتك؛ نحن نعمل داخلها.",
    },
  },
  {
    q: { en: "Do you take on small projects?", ar: "هل تقبلون المشاريع الصغيرة؟" },
    a: {
      en: "Yes, via fixed-price or hourly. Under roughly 40 hours it usually comes from our course graduates' junior pod, reviewed by seniors at the same rate.",
      ar: "نعم، بالسعر الثابت أو بالساعة. تحت 40 ساعة تقريباً يتولاها فريق الخريجين الشاب بمراجعة من المحترفين بنفس المعدل.",
    },
  },
  {
    q: { en: "How does corporate training differ from the academy?", ar: "كيف يختلف تدريب الشركات عن الأكاديمية؟" },
    a: {
      en: "Corporate programs are built on your codebase and goals — same mentors, no syllabus imposed from outside. Academy tracks follow a fixed, proven curriculum.",
      ar: "برامج الشركات تُبنى على كودبيزنسك وأهدافك — نفس المرشدين بلا منهج مفروض من الخارج. مسارات الأكاديمية تتبع منهجاً ثابتاً مجرّباً.",
    },
  },
  {
    q: { en: "What happens after launch?", ar: "ماذا يحدث بعد الإطلاق؟" },
    a: {
      en: "Every build includes 30 days of hypercare. After that, choose an SLA plan or self-serve — monitoring dashboards and runbooks are part of the handover.",
      ar: "كل بناء يشمل 30 يوماً من الرعاية المركزة. بعدها اختر عقد SLA أو اعتمد على نفسك — لوحات المراقبة وأدلة التشغيل جزء من التسليم.",
    },
  },
  {
    q: { en: "Which timezones do you work in?", ar: "في أي مناطق زمنية تعملون؟" },
    a: {
      en: "Core hours are GMT+2 (Cairo), with full overlap for Gulf teams and a two-hour bridge into European mornings.",
      ar: "الساعات الأساسية GMT+2 (القاهرة)، مع تداخل كامل مع فرق الخليج وجسر من ساعتين لصباح أوروبا.",
    },
  },
];
