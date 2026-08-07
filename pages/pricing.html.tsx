import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_pricing } from "@/components/content/pricing";

function Page() { return <MarketingPage data={pageData["pricing.html"]}><Content_pricing/></MarketingPage>; }
(Page as any).bodyClass = pageData["pricing.html"].bodyClass;
export default Page;
