import { draftMode } from "next/headers";

import { client } from "@/lib/sanity/client";

export async function query<T>(
    query: string,
    params?: any,
    tags?: string[],
): Promise<T> {
    const preview = (await draftMode()).isEnabled;

    return client.fetch(query, params || {}, {
        token: process.env.SANITY_READ_TOKEN,
        ...(preview && {
            perspective: "previewDrafts",
            stega: true,
        }),
        next: {
            ...(preview && {
                revalidate: 1,
            }),
            tags,
        },
    });
}
