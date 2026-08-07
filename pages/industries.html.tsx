import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_industries } from "@/components/content/industries";

function Page() { return <MarketingPage data={pageData["industries.html"]}><Content_industries/></MarketingPage>; }
(Page as any).bodyClass = pageData["industries.html"].bodyClass;
export default Page;
