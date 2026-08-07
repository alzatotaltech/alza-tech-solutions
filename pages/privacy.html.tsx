import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_privacy } from "@/components/content/privacy";

function Page() { return <MarketingPage data={pageData["privacy.html"]}><Content_privacy/></MarketingPage>; }
(Page as any).bodyClass = pageData["privacy.html"].bodyClass;
export default Page;
