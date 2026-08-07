import type { Metadata } from "next";
import { pageData } from "@/lib/pageData";

export function metadataFor(key: string): Metadata {
  const data = pageData[key];
  return {
    title: data.title,
    description: data.description,
    robots: data.robots,
    authors: [{ name: "ALZA Total Tech Solutions FZ-LLC" }],
    publisher: "ALZA Total Tech Solutions FZ-LLC",
    alternates: { canonical: data.canonical },
    openGraph: {
      type: data.ogType === "article" ? "article" : "website",
      locale: "en_AE",
      url: data.canonical,
      title: data.ogTitle || data.title,
      description: data.ogDescription || data.description,
      images: data.ogImage ? [{ url: data.ogImage }] : undefined,
      siteName: "ALZA Total Tech Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title: data.twitterTitle || data.title,
      description: data.twitterDescription || data.description,
      images: data.twitterImage ? [data.twitterImage] : undefined,
    },
  };
}
