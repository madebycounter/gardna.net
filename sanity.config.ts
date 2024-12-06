import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";
import { muxInput } from "sanity-plugin-mux-input";
import { structureTool } from "sanity/structure";

import {
    configSchema,
    pageSchema,
    richTextSchema,
    socialLinkSchema,
    gallerySchema,
    externalLinkSchema,
    pageLinkSchema,
} from "@/lib/types";

export default defineConfig({
    basePath: "/admin",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

    schema: {
        types: [
            gallerySchema,
            pageLinkSchema,
            externalLinkSchema,
            richTextSchema,
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
        media(),
    ],
});
