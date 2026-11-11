import { CONTACT } from "@/data/site";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    title: "Privacy notice",
    intro:
      "This notice describes how EHATA – Digital Solutions handles information when you use this website. It reflects the contact and preference features currently available.",
    sections: [
      {
        title: "Information you provide",
        paragraphs: [
          "The contact form asks for your name, email address, the service you are interested in, and your message. A phone number is optional.",
          "The form currently opens your email application with these details pre-filled. Nothing is sent until you choose to send that email. The website does not currently have a configured form endpoint or store contact submissions in a website database.",
        ],
      },
      {
        title: "Language and appearance preferences",
        paragraphs: [
          "The site saves your selected language and light or dark theme in your browser's local storage so those preferences work across pages. These preference values are stored on your device and are not submitted to EHATA by the site. You can remove them by clearing this site's browser data.",
        ],
      },
      {
        title: "Website hosting",
        paragraphs: [
          "The hosting provider that delivers this website may process ordinary technical connection information, such as an IP address, requested page, and browser details, to operate and protect the service. The provider's own privacy terms apply to that processing.",
        ],
      },
      {
        title: "How information is used and retained",
        paragraphs: [
          "If you send an email through your email application, EHATA uses it to respond to your inquiry and any related follow-up. Your email provider and the recipient's mail provider will also process that message.",
          "We do not sell personal information. Correspondence is kept only as needed to handle the inquiry and maintain appropriate business records; email providers may retain copies under their own settings and policies.",
        ],
      },
      {
        title: "Your choices and requests",
        paragraphs: [
          "Do not include sensitive personal information in a contact request. You can ask us about, correct, or request deletion of information you have sent by contacting us. We will respond subject to applicable record-keeping obligations.",
        ],
      },
      {
        title: "Updates and contact",
        paragraphs: [
          "If the site's data practices change, this notice should be updated to match. For privacy questions or requests, contact EHATA at the email address below.",
        ],
      },
    ],
    contactLabel: "Privacy contact",
  },
  ar: {
    title: "إشعار الخصوصية",
    intro:
      "يوضح هذا الإشعار كيفية تعامل EHATA – Digital Solutions مع المعلومات عند استخدام هذا الموقع، وفقًا لخصائص التواصل والتفضيلات المتاحة حاليًا.",
    sections: [
      {
        title: "المعلومات التي تقدمها",
        paragraphs: [
          "يطلب نموذج التواصل اسمك وبريدك الإلكتروني والخدمة التي تهتم بها ورسالتك. رقم الهاتف اختياري.",
          "يفتح النموذج حاليًا تطبيق البريد لديك مع تعبئة هذه البيانات مسبقًا. لا تُرسل المعلومات إلا إذا اخترت إرسال الرسالة بنفسك. لا توجد حاليًا نقطة إرسال مهيأة للنموذج، ولا يخزن الموقع طلبات التواصل في قاعدة بيانات.",
        ],
      },
      {
        title: "تفضيلات اللغة والمظهر",
        paragraphs: [
          "يحفظ الموقع اختيار اللغة والمظهر الفاتح أو الداكن في التخزين المحلي للمتصفح حتى تبقى هذه التفضيلات عند التنقل بين الصفحات. تبقى هذه القيم على جهازك ولا يرسلها الموقع إلى EHATA. يمكنك حذفها بمسح بيانات هذا الموقع من المتصفح.",
        ],
      },
      {
        title: "استضافة الموقع",
        paragraphs: [
          "قد يعالج مزود استضافة الموقع معلومات الاتصال التقنية المعتادة، مثل عنوان IP والصفحة المطلوبة وبيانات المتصفح، لتشغيل الخدمة وحمايتها. وتخضع هذه المعالجة لشروط الخصوصية الخاصة بمزود الاستضافة.",
        ],
      },
      {
        title: "استخدام المعلومات والاحتفاظ بها",
        paragraphs: [
          "إذا أرسلت رسالة عبر تطبيق البريد، تستخدمها EHATA للرد على استفسارك وما يرتبط به من متابعة. كما يعالج مزود بريدك ومزود بريد المستلِم الرسالة.",
          "لا نبيع المعلومات الشخصية. نحتفظ بالمراسلات بالقدر اللازم لمعالجة الاستفسار وحفظ سجلات العمل المناسبة؛ وقد يحتفظ مزودو البريد بنسخ وفق إعداداتهم وسياساتهم.",
        ],
      },
      {
        title: "خياراتك وطلباتك",
        paragraphs: [
          "يرجى عدم تضمين معلومات شخصية حساسة في طلب التواصل. يمكنك الاستفسار عن المعلومات التي أرسلتها أو طلب تصحيحها أو حذفها بالتواصل معنا. سنستجيب مع مراعاة أي التزامات واجبة للاحتفاظ بالسجلات.",
        ],
      },
      {
        title: "التحديثات والتواصل",
        paragraphs: [
          "إذا تغيرت ممارسات التعامل مع البيانات في الموقع، ينبغي تحديث هذا الإشعار ليعكسها. لأسئلة الخصوصية أو الطلبات، تواصل مع EHATA عبر البريد أدناه.",
        ],
      },
    ],
    contactLabel: "للتواصل بشأن الخصوصية",
  },
} as const;

export function PrivacyPolicy({ locale }: { locale: Locale }) {
  const content = copy[locale];

  return (
    <main
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="min-h-screen py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-3xl px-5 md:px-8">
        <p className="text-sm font-semibold tracking-[0.2em] text-blue">
          EHATA
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {content.intro}
        </p>

        <div className="mt-12 space-y-10">
          {content.sections.map((section, index) => (
            <section
              key={section.title}
              aria-labelledby={`privacy-section-${index}`}
            >
              <h2
                id={`privacy-section-${index}`}
                className="text-xl font-bold text-foreground"
              >
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-7 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-surface p-6">
          <h2 className="text-sm font-semibold text-foreground">
            {content.contactLabel}
          </h2>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-2 inline-block text-blue underline-offset-4 hover:underline"
            dir="ltr"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </main>
  );
}
