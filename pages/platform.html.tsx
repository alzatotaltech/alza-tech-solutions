import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_platform } from "@/components/content/platform";

function Page() { return <MarketingPage data={pageData["platform.html"]}><Content_platform/></MarketingPage>; }
(Page as any).bodyClass = pageData["platform.html"].bodyClass;
export default Page;
