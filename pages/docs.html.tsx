import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_docs } from "@/components/content/docs";

function Page() { return <MarketingPage data={pageData["docs.html"]}><Content_docs/></MarketingPage>; }
(Page as any).bodyClass = pageData["docs.html"].bodyClass;
export default Page;
