import type { Metadata } from "next";
import { AcademyIndexSection } from "@/components/academy/academy-index";

export const metadata: Metadata = {
  title: "أكاديمية إحاطة",
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
    title: "أكاديمية إحاطة | تدريب تقني عملي",
    description:
      "اختر مسارًا تدريبيًا عمليًا في تطوير البرمجيات وابنِ مشاريع تساعدك على تطبيق ما تتعلمه.",
    url: "/ar/academy/",
    locale: "ar_EG",
  },
};

export default function ArabicAcademyPage() {
  return <AcademyIndexSection />;
}
