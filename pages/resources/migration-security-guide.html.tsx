import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_resources_migration_security_guide } from "@/components/content/resources_migration_security_guide";

function Page() { return <MarketingPage data={pageData["resources/migration-security-guide.html"]}><Content_resources_migration_security_guide/></MarketingPage>; }
(Page as any).bodyClass = pageData["resources/migration-security-guide.html"].bodyClass;
export default Page;
