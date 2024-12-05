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

export async function usePage(): Promise<Page> {
    return query(
        `
        *[_type == "page"][0] {
            ${pageFragment}
        }`,
        {},
        ["page"],
    );
}
