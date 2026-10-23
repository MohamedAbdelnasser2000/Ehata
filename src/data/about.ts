import type { LocalizedText } from "@/lib/i18n";

/** Long-form About copy. */
export const ABOUT: {
  story: LocalizedText[];
  mission: LocalizedText;
  vision: LocalizedText;
} = {
  story: [
    {
      en: "This portfolio brings together software projects across food delivery, enterprise operations, clinic administration, pharmacy inventory and online commerce.",
      ar: "تجمع هذه المحفظة مشاريع برمجية في توصيل الطعام وعمليات المؤسسات وإدارة العيادات ومخزون الصيدليات والتجارة الإلكترونية.",
    },
    {
      en: "Each project summary is grounded in the available source code. Work that is still in progress is identified clearly, and illustrative covers are not presented as product screenshots.",
      ar: "يستند وصف كل مشروع إلى ملفات المصدر المتاحة. وتُوضّح المشاريع التي لا يزال العمل عليها جاريًا، كما لا تُعرض الأغلفة التوضيحية على أنها لقطات من المنتجات.",
    },
  ],
  mission: {
    en: "Combine thoughtful software engineering with practical, accessible technical education.",
    ar: "الجمع بين هندسة البرمجيات المتقنة والتعليم التقني العملي والمتاح.",
  },
  vision: {
    en: "Make well-engineered digital products and practical learning more accessible to teams and developers.",
    ar: "إتاحة المنتجات الرقمية المتقنة والتعلّم العملي لعدد أكبر من الفرق والمطورين.",
  },
};
