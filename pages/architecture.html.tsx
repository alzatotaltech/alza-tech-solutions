import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_architecture } from "@/components/content/architecture";

function Page() { return <MarketingPage data={pageData["architecture.html"]}><Content_architecture/></MarketingPage>; }
(Page as any).bodyClass = pageData["architecture.html"].bodyClass;
export default Page;
