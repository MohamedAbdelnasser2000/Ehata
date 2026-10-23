"use client";

/**
 * EnrollButton — the one enrollment entry point.
 * Builds a wa.me link whose message already names the course, so every click
 * opens a ready-to-send conversation on the shared WhatsApp line.
 */
import { WhatsAppIcon } from "@/components/layout/social-icons";
import { useLocale } from "@/components/providers/locale-provider";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { whatsappChatHref } from "@/data/site";
import type { LocalizedText } from "@/lib/i18n";

export function EnrollButton({
  courseTitle,
  label,
  variant = "primary",
  size = "lg",
  className,
}: {
  courseTitle: LocalizedText;
  label?: string;
  variant?: "primary" | "outline" | "ghost" | "onDark";
  size?: "md" | "lg";
  className?: string;
}) {
  const { t, tr } = useLocale();
  const message = t.coursePage.whatsappMessage.replace(
    "{course}",
    tr(courseTitle),
  );

  return (
    <MagneticButton
      href={whatsappChatHref(message)}
      variant={variant}
      size={size}
      className={className}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label ?? t.coursePage.enroll}
    </MagneticButton>
  );
}
