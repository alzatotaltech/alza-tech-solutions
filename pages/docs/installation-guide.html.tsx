import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_docs_installation_guide } from "@/components/content/docs_installation_guide";

function Page() { return <MarketingPage data={pageData["docs/installation-guide.html"]}><Content_docs_installation_guide/></MarketingPage>; }
(Page as any).bodyClass = pageData["docs/installation-guide.html"].bodyClass;
export default Page;
