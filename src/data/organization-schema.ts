import { SITE_URL } from "@/lib/site-url";
import { CONTACT } from "@/data/site";

const organizationId = `${SITE_URL}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": organizationId,
  name: "EHATA",
  alternateName: "إحاطة",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  email: CONTACT.email,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT.email,
      telephone: CONTACT.phones[0],
      availableLanguage: ["Arabic", "English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  areaServed: ["Egypt", "Saudi Arabia"],
  knowsLanguage: ["ar", "en"],
};
