"use client";

/** ProjectCover — locally generated vector art, not a product screenshot. */
import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/types";

export function ProjectCover({
  project,
  className,
  loading = "lazy",
}: {
  project: Project;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  const { t, locale } = useLocale();
  const [imageMissing, setImageMissing] = useState(false);
  const title = project.title[locale];
  const status = project.status?.[locale] ?? t.projectsPage.modal.statusNotProvided;

  return (
    <div
      role="img"
      aria-label={`${title}: ${t.projectsPage.modal.illustration}. ${status}`}
      className={cn("relative grid place-items-center overflow-hidden bg-surface-2", className)}
    >
      {!imageMissing && (
        <Image
          src={project.coverImage}
          alt=""
          fill
          unoptimized
          loading={loading}
          onError={() => setImageMissing(true)}
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 40vw"
        />
      )}
      {imageMissing && (
        <>
          <span
            className="select-none text-[clamp(8rem,20vw,15rem)] font-extrabold leading-none tracking-[-0.08em] text-blue/10"
            aria-hidden
          >
            {title.charAt(0)}
          </span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-blue" aria-hidden />
        </>
      )}
      <span className="absolute end-3 top-3 rounded-full border border-white/20 bg-navy/75 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
        {t.projectsPage.modal.illustration}
      </span>
      <span className="absolute start-3 bottom-3 max-w-[calc(100%-1.5rem)] truncate rounded-full border border-white/20 bg-navy/75 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
        {status}
      </span>
    </div>
  );
}
