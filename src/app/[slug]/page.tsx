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

    return <SitePage pageData={pageData} />;
}
