import { SITE_URL } from "@/lib/site-url";

const organizationId = `${SITE_URL}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": organizationId,
  name: "EHATA",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  areaServed: ["Egypt", "Saudi Arabia"],
  knowsLanguage: ["ar", "en"],
};
