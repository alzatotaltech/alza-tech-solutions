import type { Metadata } from "next";
import { pageData } from "@/lib/pageData";
import { metadataFor } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { PageExperience } from "@/components/PageExperience";
import { Content_resources_tenant_migration_planning_guide } from "@/components/content/resources_tenant_migration_planning_guide";

const key = "resources/tenant-migration-planning-guide.html";
export const metadata: Metadata = metadataFor(key);

export default function Page() {
  const data=pageData[key];
  return <>
    <JsonLd items={data.jsonLd}/>
    <PageExperience bodyClass={data.bodyClass}><Content_resources_tenant_migration_planning_guide/></PageExperience>
  </>;
}
