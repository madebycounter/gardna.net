// import { ImageIcon } from "@sanity/icons";
// import { defineType } from "sanity";

// export const sanityImageSchema = defineType({
//     name: "image",
//     title: "Image",
//     type: "image",
//     options: {
//         hotspot: true,
//     },
//     fields: [
//         {
//             type: "string",
//             name: "caption",
//             title: "Caption",
//         },
//     ],
//     icon: ImageIcon,
//     preview: {
//         select: {
//             title: "asset.originalFilename",
//             caption: "caption",
//             media: "asset",
//         },
//         prepare(selection) {
//             return {
//                 title: selection.caption ? selection.caption : selection.title,
//                 media: selection.media,
//             };
//         },
//     },
// });

export interface SanityImage {
    _type: "image";
    id: string;
    preview: any;
    hotspot?: { x: number; y: number };
    crop?: { top: number; bottom: number; left: number; right: number };
    altText?: string;
    description?: string;
    title?: string;
    url: string;
}

export const sanityImageFragment = `
    _type,
    "id": asset._ref,
    "preview": asset->metadata.lqip,
    hotspot { x, y },
    crop {
        bottom,
        left,
        right,
        top,
    },
    "altText": asset->altText,
    "description": asset->description,
    "title": asset->title,
    "url": asset->url,
`;
