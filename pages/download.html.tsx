import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_download } from "@/components/content/download";

function Page() { return <MarketingPage data={pageData["download.html"]}><Content_download/></MarketingPage>; }
(Page as any).bodyClass = pageData["download.html"].bodyClass;
export default Page;
