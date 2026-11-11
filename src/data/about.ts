import type { LocalizedText } from "@/lib/i18n";

/** Long-form About copy. */
export const ABOUT: {
  story: LocalizedText[];
  mission: LocalizedText;
  vision: LocalizedText;
} = {
  story: [
    {
      en: "EHATA is a Cairo-based software team and academy working with businesses in Egypt and Saudi Arabia. We build custom systems for logistics, healthcare, pharmacy, commerce and technology operations, alongside practical developer training.",
      ar: "إحاطة فريق برمجيات وأكاديمية تدريب مقرّهما القاهرة، ونعمل مع شركات في مصر والسعودية. نبني أنظمة مخصصة لعمليات اللوجستيات والرعاية الصحية والصيدليات والتجارة والتقنية، إلى جانب تدريب عملي للمطورين.",
    },
    {
      en: "We start by understanding how your operation works and where a purpose-built system can help. Our portfolio includes more than 22 delivered projects; each case study describes its scope based on the available project information.",
      ar: "نبدأ بفهم طريقة عمل نشاطك والمجالات التي قد يساعد فيها نظام مخصص. تضم محفظتنا أكثر من 22 مشروعًا تم تسليمها، وتعرض كل دراسة حالة نطاق العمل وفق المعلومات المتاحة عن المشروع.",
    },
  ],
  mission: {
    en: "Build practical software that helps Egyptian businesses run their operations, and train the next generation of engineers to build it.",
    ar: "بناء برمجيات عملية تساعد الشركات المصرية في إدارة عملياتها، وتدريب الجيل القادم من المهندسين على تطويرها.",
  },
  vision: {
    en: "Make purpose-built digital systems and practical technology education more accessible to businesses and developers in Egypt and the region.",
    ar: "إتاحة الأنظمة الرقمية المصممة حسب الحاجة والتعليم التقني العملي للشركات والمطورين في مصر والمنطقة.",
  },
};
