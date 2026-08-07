import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_docs_testing_runbook } from "@/components/content/docs_testing_runbook";

function Page() { return <MarketingPage data={pageData["docs/testing-runbook.html"]}><Content_docs_testing_runbook/></MarketingPage>; }
(Page as any).bodyClass = pageData["docs/testing-runbook.html"].bodyClass;
export default Page;
