import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_terms } from "@/components/content/terms";

function Page() { return <MarketingPage data={pageData["terms.html"]}><Content_terms/></MarketingPage>; }
(Page as any).bodyClass = pageData["terms.html"].bodyClass;
export default Page;
