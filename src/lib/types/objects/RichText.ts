import { defineType } from "sanity";

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
            type: "image.default",
        },
        {
            type: "gallery",
        },
    ],
});

export const richTextFragment = `
    _type,
    _type == "block" => {
        ...
    },
    _type == "image.default" => {
        ${sanityImageFragment}
    },
    _type == "gallery" => {
        ${galleryFragment}
    },
`;

export type RichText = { _type: "richText" } & any;