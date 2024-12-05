import { defineType } from "sanity";

import {
    getSocialIcon,
    identifyPlatform,
    SocialPlatform,
    supportedPlatforms,
} from "@/lib/socials";

export const socialLinkSchema = defineType({
    name: "socialLink",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "url",
            title: "URL",
            type: "string",
        },
        {
            name: "platform",
            title: "Platform",
            type: "string",
            options: {
                list: supportedPlatforms,
            },
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "url",
        },
        prepare({ title, subtitle }) {
            var icon = getSocialIcon(identifyPlatform(subtitle));

            return {
                title,
                subtitle,
                icon,
            };
        },
    },
});

export const socialLinkFragment = `
    _type,
    title,
    url,
    platform,
`;

export interface SocialLink {
    _type: "socialLink";
    title?: string;
    url?: string;
    platform?: SocialPlatform;
}
