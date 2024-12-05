import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { muxInput } from "sanity-plugin-mux-input";
import { structureTool } from "sanity/structure";

import "@/lib/sanity/removeAllFields.css";
import {
    configSchema,
    pageSchema,
    richTextSchema,
    sanityImageSchema,
    socialLinkSchema,
} from "@/lib/types";
import { gallerySchema } from "@/lib/types/objects/Gallery";

export default defineConfig({
    basePath: "/studio",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

    schema: {
        types: [
            gallerySchema,
            richTextSchema,
            sanityImageSchema,
            socialLinkSchema,
            configSchema,
            pageSchema,
        ],
    },

    plugins: [
        structureTool(),
        visionTool({
            defaultApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        }),
        muxInput(),
    ],
});
