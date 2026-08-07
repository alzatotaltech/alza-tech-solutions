import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_services } from "@/components/content/services";

function Page() { return <MarketingPage data={pageData["services.html"]}><Content_services/></MarketingPage>; }
(Page as any).bodyClass = pageData["services.html"].bodyClass;
export default Page;
