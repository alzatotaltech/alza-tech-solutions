import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_docs_enterprise_checklist } from "@/components/content/docs_enterprise_checklist";

function Page() { return <MarketingPage data={pageData["docs/enterprise-checklist.html"]}><Content_docs_enterprise_checklist/></MarketingPage>; }
(Page as any).bodyClass = pageData["docs/enterprise-checklist.html"].bodyClass;
export default Page;
