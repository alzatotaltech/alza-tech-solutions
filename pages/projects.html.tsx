import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_projects } from "@/components/content/projects";

function Page() { return <MarketingPage data={pageData["projects.html"]}><Content_projects/></MarketingPage>; }
(Page as any).bodyClass = pageData["projects.html"].bodyClass;
export default Page;
