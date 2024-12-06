import { Metadata } from "next";
import { notFound } from "next/navigation";

import SitePage from "@/site/SitePage";

import { useConfig, usePage } from "@/lib/queries";

interface Params {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const pageData = await usePage((await params).slug);
    const config = await useConfig();

    const title = config.siteTitle + " | " + pageData.title;
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

export default async function HomePage({ params }: Params) {
    const pageData = await usePage((await params).slug);
    const config = await useConfig();

    if (!pageData) {
        return notFound();
    }

    return <SitePage pageData={pageData} config={config} />;
}
