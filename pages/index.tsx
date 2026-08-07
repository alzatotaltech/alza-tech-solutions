import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_index } from "@/components/content/index";

function Page() { return <MarketingPage data={pageData["index.html"]}><Content_index/></MarketingPage>; }
(Page as any).bodyClass = pageData["index.html"].bodyClass;
export default Page;
