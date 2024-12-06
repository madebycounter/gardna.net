import { notFound } from "next/navigation";

import SitePage from "@/site/SitePage";

import { usePage } from "@/lib/queries";

export default async function Page({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    const pageData = await usePage(params.slug);

    if (!pageData) {
        return notFound();
    }

    return <SitePage pageData={pageData} />;
}
