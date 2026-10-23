import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/services/service-detail-page";
import { SERVICES } from "@/data/services";
import { createServiceMetadata } from "@/lib/service-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }));
}

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.id === slug);

  return service
    ? createServiceMetadata(service, "en")
    : { title: "Service not found", robots: { index: false, follow: false } };
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.id === slug);

  if (!service) notFound();

  return <ServiceDetailPage service={service} locale="en" />;
}
