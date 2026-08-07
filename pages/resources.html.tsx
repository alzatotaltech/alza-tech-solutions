import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_resources } from "@/components/content/resources";

function Page() { return <MarketingPage data={pageData["resources.html"]}><Content_resources/></MarketingPage>; }
(Page as any).bodyClass = pageData["resources.html"].bodyClass;
export default Page;
