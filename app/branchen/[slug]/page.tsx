import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES, getPage } from "@/lib/pages";
import { pageMetadata } from "@/lib/metadata";
import { LandingPageView } from "@/components/LandingPageView";

export function generateStaticParams() {
  return INDUSTRIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page || page.category !== "branche") return {};
  return pageMetadata(page);
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page || page.category !== "branche") notFound();
  return <LandingPageView page={page} />;
}
