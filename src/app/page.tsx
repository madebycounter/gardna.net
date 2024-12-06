import SitePage from "@/site/SitePage";

import { useHomePage } from "@/lib/queries";

export default async function HomePage() {
    const pageData = await useHomePage();

    return <SitePage pageData={pageData} />;
}
