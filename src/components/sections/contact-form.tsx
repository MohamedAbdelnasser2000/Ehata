"use client";

/**
 * ContactForm — react-hook-form + zod, fully validated, animated states.
 *
 * Submission is configurable because there is NO backend:
 *  1. If `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (or EmailJS/web3forms URL) is set,
 *     the form POSTs JSON there and shows the "sent" success state.
 *  2. Otherwise it falls back to `mailto:` — the visitor's email client
 *     opens pre-filled, and the success panel explains what happened.
 *
 * 👉 Plug your endpoint in `.env.local` (see README — "Wiring the form").
 */
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLocale } from "@/components/providers/locale-provider";
import { CONTACT } from "@/data/site";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const inputCls =
  "h-12 w-full rounded-2xl border border-line bg-surface px-4 text-[15px] text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-blue/60";
const labelCls = "mb-1.5 block text-sm font-semibold text-foreground";

function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1.5 flex items-center gap-1.5 text-sm text-red-500"
          role="alert"
        >
          <CircleAlert className="h-4 w-4 shrink-0" aria-hidden />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export function ContactForm() {
  const { t, tr, locale } = useLocale();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onTouched" });

  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get(
      "service",
    );
    const selectedService = SERVICES.find(
      (service) => service.id === requestedService,
    );
    if (selectedService) setValue("service", selectedService.id);
  }, [setValue]);

  /* Schema rebuilt per locale so validation messages are translated. */
  const schema = useMemo(() => {
    const e = t.contactPage.form.errors;
    return z.object({
      name: z.string().min(2, e.nameShort),
      email: z.email(e.emailInvalid),
      phone: z
        .string()
        .optional()
        .or(z.literal(""))
        .refine(
          (v) => !v || /^[+]?[\d\s\-().]{7,20}$/.test(v),
          e.phoneInvalid,
        ),
      service: z.string().min(1, e.serviceRequired),
      message: z.string().min(20, e.messageShort),
    });
  }, [t]);

  async function onSubmit(values: FormValues) {
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        setError(issue.path[0] as keyof FormValues, {
          message: issue.message,
        });
      }
      return;
    }

    setStatus("sending");
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    try {
      if (endpoint) {
        /* ── Plug-in point: Formspree / EmailJS / web3forms JSON endpoint ── */
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...parsed.data, locale }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        reset();
      } else {
        /* ── No endpoint configured: mailto fallback ── */
        const subject = encodeURIComponent(
          `[EHATA] ${parsed.data.service} — ${parsed.data.name}`,
        );
        const body = encodeURIComponent(
          [
            `${t.contactPage.form.name}: ${parsed.data.name}`,
            `${t.contactPage.form.email}: ${parsed.data.email}`,
            `${t.contactPage.form.phone}: ${parsed.data.phone || "—"}`,
            `${t.contactPage.form.service}: ${parsed.data.service}`,
            "",
            parsed.data.message,
          ].join("\n"),
        );
        window.location.assign(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`);
        setStatus("mailto");
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  }

  const showPanel = status === "sent" || status === "mailto" || status === "error";

  return (
    <div className="relative">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "flex flex-col gap-5 rounded-card border border-line bg-surface p-6 sm:p-8 card-shadow transition-opacity",
          showPanel && "pointer-events-none opacity-0",
        )}
        aria-hidden={showPanel || undefined}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className={labelCls}>
              {t.contactPage.form.name} *
            </label>
            <input
              id="cf-name"
              autoComplete="name"
              placeholder={t.contactPage.form.namePlaceholder}
              className={cn(inputCls, errors.name && "border-red-400")}
              {...register("name")}
            />
            <FieldError message={errors.name?.message} />
          </div>
          <div>
            <label htmlFor="cf-email" className={labelCls}>
              {t.contactPage.form.email} *
            </label>
            <input
              id="cf-email"
              type="email"
              dir="ltr"
              autoComplete="email"
              placeholder={t.contactPage.form.emailPlaceholder}
              className={cn(inputCls, errors.email && "border-red-400")}
              {...register("email")}
            />
            <FieldError message={errors.email?.message} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-phone" className={labelCls}>
              {t.contactPage.form.phone}{" "}
              <span className="font-normal text-muted">
                ({t.contactPage.form.phoneOptional})
              </span>
            </label>
            <input
              id="cf-phone"
              type="tel"
              dir="ltr"
              autoComplete="tel"
              placeholder={t.contactPage.form.phonePlaceholder}
              className={cn(inputCls, errors.phone && "border-red-400")}
              {...register("phone")}
            />
            <FieldError message={errors.phone?.message} />
          </div>
          <div>
            <label htmlFor="cf-service" className={labelCls}>
              {t.contactPage.form.service} *
            </label>
            <select
              id="cf-service"
              className={cn(inputCls, "appearance-none", errors.service && "border-red-400")}
              {...register("service")}
            >
              <option value="" disabled>
                {t.contactPage.form.serviceSelect}
              </option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {tr(s.title)}
                </option>
              ))}
            </select>
            <FieldError message={errors.service?.message} />
          </div>
        </div>

        <div>
          <label htmlFor="cf-message" className={labelCls}>
            {t.contactPage.form.message} *
          </label>
          <textarea
            id="cf-message"
            rows={5}
            placeholder={t.contactPage.form.messagePlaceholder}
            className={cn(
              "w-full rounded-2xl border border-line bg-surface p-4 text-[15px] leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-blue/60",
              errors.message && "border-red-400",
            )}
            {...register("message")}
          />
          <FieldError message={errors.message?.message} />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-gradient-signature group inline-flex h-13 items-center justify-center gap-2 rounded-full px-8 text-[15px] font-semibold text-white shadow-[0_12px_32px_-12px_rgba(0,87,231,.7)] transition-transform hover:scale-[1.02] active:scale-[0.99] disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden />
              {t.contactPage.form.sending}
            </>
          ) : (
            <>
              <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 rtl:-scale-x-100" aria-hidden />
              {t.contactPage.form.submit}
            </>
          )}
        </button>
      </form>

      {/* Animated success / error panel overlays the faded form */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-card border border-line bg-surface p-8 text-center card-shadow"
            role="status"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
              className={cn(
                "grid h-16 w-16 place-items-center rounded-full",
                status === "error"
                  ? "bg-red-500/15 text-red-500"
                  : "bg-gradient-signature text-white",
              )}
            >
              {status === "error" ? (
                <CircleAlert className="h-8 w-8" aria-hidden />
              ) : (
                <CircleCheck className="h-8 w-8" aria-hidden />
              )}
            </motion.span>

            {status === "sent" && (
              <>
                <h3 className="text-xl font-bold">{t.contactPage.form.sentTitle}</h3>
                <p className="max-w-sm text-[15px] text-muted">
                  {t.contactPage.form.sentBody}
                </p>
              </>
            )}
            {status === "mailto" && (
              <>
                <h3 className="text-xl font-bold">
                  {t.contactPage.form.successTitle}
                </h3>
                <p className="max-w-sm text-[15px] text-muted">
                  {t.contactPage.form.successBody}
                </p>
              </>
            )}
            {status === "error" && (
              <>
                <h3 className="text-xl font-bold">{t.contactPage.form.serverError}</h3>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-blue underline-offset-4 hover:underline"
                >
                  {CONTACT.email}
                </a>
              </>
            )}

            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                reset();
              }}
              className="mt-2 rounded-full border border-line px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-blue/50 hover:text-blue"
            >
              {t.contactPage.form.sendAnother}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
