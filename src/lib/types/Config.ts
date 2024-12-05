import { UlistIcon, SplitHorizontalIcon, EarthGlobeIcon } from "@sanity/icons";
import { defineType } from "sanity";

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
            name: "footer",
            title: "Footer",
            icon: SplitHorizontalIcon,
        },
        {
            name: "nav",
            title: "Navbar",
            icon: UlistIcon,
        },
    ],
    fields: [
        {
            name: "siteTitle",
            title: "Title",
            type: "string",
            group: "site",
        },
    ],
});

export const configFragment = `
    _id,
    _type,
    siteTitle,
`;

export interface Config {
    _id: string;
    _type: string;
    siteTitle: string;
}
