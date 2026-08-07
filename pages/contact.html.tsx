import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_contact } from "@/components/content/contact";

function Page() { return <MarketingPage data={pageData["contact.html"]}><Content_contact/></MarketingPage>; }
(Page as any).bodyClass = pageData["contact.html"].bodyClass;
export default Page;
