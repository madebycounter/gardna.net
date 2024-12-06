import { Metadata } from "next";
import { notFound } from "next/navigation";

import SitePage from "@/site/SitePage";

import { usePage } from "@/lib/queries";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const pageData = await usePage(params.slug);

    return {
        title: "William Gardner | " + pageData.title,
        // description,
        // openGraph: {
        //     title,
        //     description,
        //     ...(image && {
        //         images: [
        //             {
        //                 url:
        //                     image._type === "image"
        //                         ? `${image.asset.url}?w=600&h=315&q=50&fm=jpg`
        //                         : `https://image.mux.com/${image.asset.playbackId}/thumbnail.jpg?width=600&height=315`,
        //                 width: 600,
        //                 height: 315,
        //             },
        //         ],
        //     }),
        // },
    };
}

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
