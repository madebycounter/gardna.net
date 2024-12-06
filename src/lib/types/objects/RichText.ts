import { defineType } from "sanity";

import { embedFragment } from "@/lib/types/objects/Embed";
import { galleryFragment } from "@/lib/types/objects/Gallery";
import { sanityImageFragment } from "@/lib/types/objects/SanityImage";

export const richTextSchema = defineType({
    name: "richText",
    title: "Rich Text",
    type: "array",
    of: [
        {
            type: "block",
            styles: [
                { title: "Normal", value: "normal" },
                { title: "Heading 1", value: "h1" },
                { title: "Heading 2", value: "h2" },
                { title: "Heading 3", value: "h3" },
            ],
            marks: {
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                ],
            },
        },
        {
            type: "image",
        },
        {
            type: "gallery",
        },
        {
            type: "embed",
        },
    ],
});

export const richTextFragment = `
    _type,
    _type == "block" => {
        ...
    },
    _type == "image" => {
        ${sanityImageFragment}
    },
    _type == "gallery" => {
        ${galleryFragment}
    },
    _type == "embed" => {
        ${embedFragment}
    }
`;

export type RichText = { _type: "richText" } & any;
