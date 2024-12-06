import { DocumentIcon, LinkIcon } from "@sanity/icons";
import { defineType } from "sanity";

import { Page, pageFragment } from "@/lib/types/Page";

export const pageLinkSchema = defineType({
    type: "object",
    name: "pageLink",
    title: "Page Link",
    icon: DocumentIcon,
    fields: [
        {
            name: "label",
            title: "Label",
            type: "string",
        },
        {
            name: "page",
            title: "Page",
            type: "reference",
            to: [{ type: "page" }],
            readOnly: ({ parent }) => parent?.homepage,
            hidden: ({ parent }) => parent?.homepage,
        },
        {
            name: "homepage",
            title: "To Homepage?",
            type: "boolean",
            initialValue: false,
        },
    ],
    preview: {
        select: {
            title: "label",
            refTitle: "page.title",
            homepage: "homepage",
        },
        prepare({ title, refTitle, homepage }) {
            return {
                title,
                subtitle: homepage ? "Homepage" : refTitle,
            };
        },
    },
});

export const pageLinkFragment = `
    _type,
    label,
    page->{
        ${pageFragment}
    },
    homepage,
`;

export interface PageLink {
    _type: "pageLink";
    label: string;
    page: Page;
    homepage: boolean;
}

export const externalLinkSchema = defineType({
    type: "object",
    name: "externalLink",
    title: "External Link",
    icon: LinkIcon,
    fields: [
        {
            name: "label",
            title: "Label",
            type: "string",
        },
        {
            name: "url",
            title: "URL",
            type: "url",
        },
    ],
    preview: {
        select: {
            title: "label",
            subtitle: "url",
        },
    },
});

export const externalLinkFragment = `
    _type,
    label,
    url,
`;

export interface ExternalLink {
    _type: "externalLink";
    label: string;
    url: string;
}
