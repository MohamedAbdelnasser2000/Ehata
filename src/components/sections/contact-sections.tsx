"use client";

import { Clock, Mail, Phone } from "lucide-react";
import { Kicker, Reveal, SplitHeading } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BorderBeam } from "@/components/ui/border-beam";
import { SocialIcon, WhatsAppIcon } from "@/components/layout/social-icons";
import { ContactForm } from "./contact-form";
import { useLocale } from "@/components/providers/locale-provider";
import { CONTACT, SOCIALS, telHref, whatsappHref } from "@/data/site";

export function ContactHead() {
  const { t } = useLocale();
  return (
    <Section className="relative !pt-36 !pb-6 md:!pt-44 overflow-hidden">
      <AuroraBackground glowOpacity={0.4} />
      <div className="mb-14 flex flex-col items-center gap-5 text-center">
        <Kicker>{t.contactPage.kicker}</Kicker>
        <SplitHeading
          as="h1"
          lines={[t.contactPage.title]}
          className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl"
        />
        <p className="max-w-2xl text-[17px] leading-relaxed text-muted">
          {t.contactPage.subtitle}
        </p>
      </div>
    </Section>
  );
}

export function ContactMain() {
  const { t } = useLocale();

  return (
    <Section className="!pt-6 !pb-24">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Form column with BorderBeam */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <BorderBeam size={200} duration={12} borderWidth={1.5} />
            <ContactForm />
          </div>
        </Reveal>

        {/* Info column with Skiper UI Spotlight Cards */}
        <div className="flex flex-col gap-5">
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-4">
              <InfoCard
                icon={<Mail className="h-5 w-5" />}
                label={t.contactPage.info.emailLabel}
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <InfoCard
                icon={<Phone className="h-5 w-5" />}
                label={t.contactPage.info.phoneLabel}
                links={CONTACT.phones.map((phone) => ({
                  value: phone,
                  href: telHref(phone),
                }))}
                ltr
              />
              <InfoCard
                icon={<WhatsAppIcon className="h-5 w-5" />}
                label={t.contactPage.info.whatsappLabel}
                links={CONTACT.whatsapp.map((phone) => ({
                  value: phone,
                  href: whatsappHref(phone),
                  external: true,
                }))}
                ltr
              />
              <InfoCard
                icon={<Clock className="h-5 w-5" />}
                label={t.contactPage.info.hoursLabel}
                value={`${t.contactPage.info.hoursValue} — ${t.contactPage.info.hoursValue2}`}
              />
            </div>
          </Reveal>

          {SOCIALS.length > 0 && (
            <Reveal delay={0.1}>
              <SpotlightCard
                spotlightColor="rgba(46, 155, 255, 0.12)"
                className="rounded-2xl border-line/80 bg-surface/85 p-6 backdrop-blur-sm"
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                  {t.contactPage.info.followUs}
                </h3>
                <div className="flex gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-muted transition-all hover:border-blue/50 hover:bg-blue hover:text-white hover:shadow-[0_0_12px_rgba(0,87,231,0.4)]"
                    >
                      <SocialIcon id={s.id} />
                    </a>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  );
}

type InfoLink = { value: string; href: string; external?: boolean };

function InfoCard({
  icon,
  label,
  value,
  href,
  links,
  ltr = false,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
  href?: string;
  links?: InfoLink[];
  ltr?: boolean;
}) {
  const body = (
    <SpotlightCard
      spotlightColor="rgba(0, 87, 231, 0.12)"
      className="group flex items-start gap-4 rounded-2xl border-line/80 bg-surface/85 p-5 backdrop-blur-sm transition-all hover:border-blue/40"
    >
      <span className="bg-blue/10 grid h-11 w-11 shrink-0 place-items-center rounded-xl text-blue transition-all group-hover:bg-gradient-signature group-hover:text-white group-hover:shadow-[0_0_14px_rgba(0,87,231,0.4)]">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          {label}
        </span>
        {links ? (
          <span className="mt-0.5 flex flex-col gap-0.5">
            {links.map((link) => (
              <a
                key={link.value}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                dir={ltr ? "ltr" : undefined}
                className="block w-fit text-[15px] font-medium text-foreground transition-colors hover:text-blue"
              >
                {link.value}
              </a>
            ))}
          </span>
        ) : (
          <span className="mt-0.5 block text-[15px] font-medium text-foreground" dir={ltr ? "ltr" : undefined}>
            {value}
          </span>
        )}
      </span>
    </SpotlightCard>
  );
  return href ? (
    <a href={href} className="block focus:outline-none">
      {body}
    </a>
  ) : (
    body
  );
}
