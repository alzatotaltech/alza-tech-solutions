import type { Metadata } from "next";
import { pageData } from "@/lib/pageData";
import { metadataFor } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { PageExperience } from "@/components/PageExperience";
import { Content_resources_m365_migration_checklist } from "@/components/content/resources_m365_migration_checklist";

const key = "resources/m365-migration-checklist.html";
export const metadata: Metadata = metadataFor(key);

export default function Page() {
  const data=pageData[key];
  return <>
    <JsonLd items={data.jsonLd}/>
    <PageExperience bodyClass={data.bodyClass}><Content_resources_m365_migration_checklist/></PageExperience>
  </>;
}
