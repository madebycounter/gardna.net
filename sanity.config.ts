import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { muxInput } from "sanity-plugin-mux-input";
import { structureTool } from "sanity/structure";

import "@/lib/sanity/removeAllFields.css";
import { configSchema } from "@/lib/sanity/types/Config";
import {
    contactInfoSchema,
    homePageSchema,
    serviceSchema,
} from "@/lib/sanity/types/HomePage";
import { linkSchema } from "@/lib/sanity/types/objects/Link";
import { richTextSchema } from "@/lib/sanity/types/objects/RichText";
import { sanityImageSchema } from "@/lib/sanity/types/objects/SanityImage";
import { socialLinkSchema } from "@/lib/sanity/types/objects/SocialLink";

export default defineConfig({
    basePath: "/studio",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

    schema: {
        types: [
            configSchema,
            linkSchema,
            richTextSchema,
            sanityImageSchema,
            socialLinkSchema,
            homePageSchema,
            serviceSchema,
            contactInfoSchema,
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
