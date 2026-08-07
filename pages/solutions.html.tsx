import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_solutions } from "@/components/content/solutions";

function Page() { return <MarketingPage data={pageData["solutions.html"]}><Content_solutions/></MarketingPage>; }
(Page as any).bodyClass = pageData["solutions.html"].bodyClass;
export default Page;
