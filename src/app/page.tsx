import { Metadata } from "next";
import { notFound } from "next/navigation";

import SitePage from "@/site/SitePage";

import { useHomePage } from "@/lib/queries";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const pageData = await useHomePage();

    const title = "William Gardner | " + pageData.title;
    const description = pageData.description;
    const image = pageData.image;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            ...(image && {
                images: [
                    {
                        url: `${image.url}?w=600&h=315&q=50&fm=jpg`,
                        width: 600,
                        height: 315,
                    },
                ],
            }),
        },
    };
}

export default async function HomePage() {
    const pageData = await useHomePage();

    if (!pageData) {
        return notFound();
    }

    return <SitePage pageData={pageData} />;
}
