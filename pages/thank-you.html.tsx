import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_thank_you } from "@/components/content/thank_you";

function Page() { return <MarketingPage data={pageData["thank-you.html"]}><Content_thank_you/></MarketingPage>; }
(Page as any).bodyClass = pageData["thank-you.html"].bodyClass;
export default Page;
