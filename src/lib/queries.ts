import { query } from "@/lib/sanity";
import { Config, configFragment, Page, pageFragment } from "@/lib/types";

export async function useConfig(): Promise<Config> {
    return query(
        `
        *[_type == "config"][0] {
            ${configFragment}
        }`,
        {},
        ["config"],
    );
}

export async function useHomePage(): Promise<Page> {
    return query(
        `
        *[_type == "page" && homepage][0] {
            ${pageFragment}
        }`,
        {},
        ["page"],
    );
}

export async function usePage(slug: string): Promise<Page> {
    return query(
        `
        *[_type == "page" && slug.current == $slug][0] {
            ${pageFragment}
        }`,
        { slug },
        ["page"],
    );
}
