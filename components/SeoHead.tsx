import Head from "next/head";
import type { PageData } from "@/lib/pageData";

export function SeoHead({ data }: { data: PageData }) {
  return (
    <Head>
      <title>{data.title}</title>
      {data.description && <meta name="description" content={data.description} />}
      <meta name="robots" content={data.robots} />
      {data.canonical && <link rel="canonical" href={data.canonical} />}
      <meta name="author" content="ALZA Total Tech Solutions FZ-LLC" />
      <meta name="publisher" content="ALZA Total Tech Solutions FZ-LLC" />
      <meta property="og:locale" content="en_AE" />
      <meta property="og:type" content={data.ogType || "website"} />
      {data.ogTitle && <meta property="og:title" content={data.ogTitle} />}
      {data.ogDescription && <meta property="og:description" content={data.ogDescription} />}
      {data.canonical && <meta property="og:url" content={data.canonical} />}
      {data.ogImage && <meta property="og:image" content={data.ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      {data.twitterTitle && <meta name="twitter:title" content={data.twitterTitle} />}
      {data.twitterDescription && <meta name="twitter:description" content={data.twitterDescription} />}
      {data.twitterImage && <meta name="twitter:image" content={data.twitterImage} />}
      {data.jsonLd.map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </Head>
  );
}
