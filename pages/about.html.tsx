import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_about } from "@/components/content/about";

function Page() { return <MarketingPage data={pageData["about.html"]}><Content_about/></MarketingPage>; }
(Page as any).bodyClass = pageData["about.html"].bodyClass;
export default Page;
