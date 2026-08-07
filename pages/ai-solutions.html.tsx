import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_ai_solutions } from "@/components/content/ai_solutions";

function Page() { return <MarketingPage data={pageData["ai-solutions.html"]}><Content_ai_solutions/></MarketingPage>; }
(Page as any).bodyClass = pageData["ai-solutions.html"].bodyClass;
export default Page;
