import { MarketingPage } from "@/components/MarketingPage";
import { pageData } from "@/lib/pageData";
import { Content_products } from "@/components/content/products";

function Page() { return <MarketingPage data={pageData["products.html"]}><Content_products/></MarketingPage>; }
(Page as any).bodyClass = pageData["products.html"].bodyClass;
export default Page;
