import { ComposeIcon, CogIcon } from "@sanity/icons";
import { defineType } from "sanity";

import { RichText, richTextFragment } from "@/lib/types/objects/RichText";
import {
    SanityImage,
    sanityImageFragment,
} from "@/lib/types/objects/SanityImage";

export const pageSchema = defineType({
    name: "page",
    title: "Page",
    type: "document",
    groups: [
        {
            name: "content",
            title: "Content",
            default: true,
            icon: ComposeIcon,
        },
        {
            name: "settings",
            title: "Settings",
            icon: CogIcon,
        },
    ],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            group: "content",
        },
        {
            name: "content",
            title: "Content",
            type: "richText",
            group: "content",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            group: "settings",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            group: "settings",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            group: "settings",
            readOnly: ({ document }: any) => document.homepage,
            options: {
                source: "title",
            },
        },
        {
            name: "homepage",
            title: "Is Homepage?",
            type: "boolean",
            group: "settings",
            initialValue: false,
        },
    ],
});

export const pageFragment = `
    _type,
    title,
    content[] {
        ${richTextFragment}
    },
    description,
    image {
        ${sanityImageFragment}
    },
    slug {
        current
    },
    homepage
`;

export interface Page {
    title: string;
    content: RichText;
    description: string;
    image: SanityImage;
    slug: {
        current: string;
    };
    homepage: boolean;
}
