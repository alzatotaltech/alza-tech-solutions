import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_404 } from "@/components/content/404";

function Page() { return <MarketingPage data={pageData["404.html"]}><Content_404/></MarketingPage>; }
(Page as any).bodyClass = pageData["404.html"].bodyClass;
export default Page;
