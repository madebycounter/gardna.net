import { notFound } from "next/navigation";

import SitePage from "@/site/SitePage";

import { useHomePage } from "@/lib/queries";

export default async function HomePage() {
    const pageData = await useHomePage();

    if (!pageData) {
        return notFound();
    }

    return <SitePage pageData={pageData} />;
}
