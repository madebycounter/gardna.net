import { ComposeIcon, CogIcon } from "@sanity/icons";
import { defineType } from "sanity";

import { RichText, richTextFragment } from "@/lib/types/objects/RichText";

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
    ],
});

export const pageFragment = `
    _type,
    title,
    content[] {
        ${richTextFragment}
    }
`;

export interface Page {
    title: string;
    content: RichText;
}
