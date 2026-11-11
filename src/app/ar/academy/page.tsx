import type { Metadata } from "next";
import { AcademyIndexSection } from "@/components/academy/academy-index";

export const metadata: Metadata = {
  title: { absolute: "دورات برمجة احترافية بالقاهرة — أكاديمية EHATA" },
  description:
    "مسارات تدريبية عملية في تطوير البرمجيات و.NET وPHP وتطبيقات الهواتف والذكاء الاصطناعي، بإشراف مهندسين وممارسين.",
  alternates: {
    canonical: "/ar/academy/",
    languages: {
      en: "/academy/",
      ar: "/ar/academy/",
      "x-default": "/academy/",
    },
  },
  openGraph: {
    title: "دورات برمجة احترافية بالقاهرة — أكاديمية EHATA",
    description:
      "اختر مسارًا تدريبيًا عمليًا في تطوير البرمجيات وابنِ مشاريع تساعدك على تطبيق ما تتعلمه.",
    url: "/ar/academy/",
    locale: "ar_EG",
  },
};

export default function ArabicAcademyPage() {
  return <AcademyIndexSection />;
}
