import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_resources_tenant_migration_planning_guide } from "@/components/content/resources_tenant_migration_planning_guide";

function Page() { return <MarketingPage data={pageData["resources/tenant-migration-planning-guide.html"]}><Content_resources_tenant_migration_planning_guide/></MarketingPage>; }
(Page as any).bodyClass = pageData["resources/tenant-migration-planning-guide.html"].bodyClass;
export default Page;
