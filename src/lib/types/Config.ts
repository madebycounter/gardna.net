import { UlistIcon, DocumentIcon, EarthGlobeIcon } from "@sanity/icons";
import { defineType } from "sanity";

import {
    ExternalLink,
    externalLinkFragment,
    PageLink,
    pageLinkFragment,
} from "@/lib/types/objects/Link";

export const configSchema = defineType({
    name: "config",
    title: "Config",
    type: "document",
    groups: [
        {
            name: "site",
            title: "Global",
            default: true,
            icon: EarthGlobeIcon,
        },
        {
            name: "nav",
            title: "Navbar",
            icon: UlistIcon,
        },
        {
            name: "pages",
            title: "Pages",
            icon: DocumentIcon,
        },
    ],
    fields: [
        {
            name: "siteTitle",
            title: "Title",
            type: "string",
            group: "site",
        },
        {
            name: "navLinks",
            title: "Nav Links",
            type: "array",
            of: [{ type: "pageLink" }, { type: "externalLink" }],
            group: "nav",
        },
    ],
});

export const configFragment = `
    _id,
    _type,
    siteTitle,
    navLinks[] {
        _type == "pageLink" => {
            ${pageLinkFragment}
        },
        _type == "externalLink" => {
            ${externalLinkFragment}
        },
    },
`;

export interface Config {
    _id: string;
    _type: string;
    siteTitle: string;
    navLinks: (PageLink | ExternalLink)[];
}
