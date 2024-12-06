import { ImagesIcon } from "@sanity/icons";
import { Box, Text } from "@sanity/ui";
import { defineType } from "sanity";

import {
    SanityImage,
    sanityImageFragment,
} from "@/lib/types/objects/SanityImage";

// function GalleryComponent(props: any) {
//     console.log(props);
//     return (
//         <Box padding={2} style={{ outline: "1px solid" }}>
//             <Text>Custom Component</Text>
//         </Box>
//     );
// }

export const gallerySchema = defineType({
    name: "gallery",
    type: "object",
    icon: ImagesIcon,
    fields: [
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
        },
    ],
    // components: {
    //     block: GalleryComponent,
    // },
});

export const galleryFragment = `
    _type,
    images[] {
        ${sanityImageFragment}
    },
`;

export interface Gallery {
    _type: "gallery";
    images: SanityImage[];
}
