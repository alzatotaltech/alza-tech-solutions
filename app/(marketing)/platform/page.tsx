import type { Metadata } from "next";
import { pageData } from "@/lib/pageData";
import { metadataFor } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { PageExperience } from "@/components/PageExperience";
import { Content_platform } from "@/components/content/platform";

const key = "platform.html";
export const metadata: Metadata = metadataFor(key);

export default function Page() {
  const data=pageData[key];
  return <>
    <JsonLd items={data.jsonLd}/>
    <PageExperience bodyClass={data.bodyClass}><Content_platform/></PageExperience>
  </>;
}
