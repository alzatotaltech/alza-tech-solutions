import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_resources_m365_migration_checklist } from "@/components/content/resources_m365_migration_checklist";

function Page() { return <MarketingPage data={pageData["resources/m365-migration-checklist.html"]}><Content_resources_m365_migration_checklist/></MarketingPage>; }
(Page as any).bodyClass = pageData["resources/m365-migration-checklist.html"].bodyClass;
export default Page;
