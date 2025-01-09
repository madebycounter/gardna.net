import { defineType } from "sanity";

export const embedSchema = defineType({
    type: "object",
    name: "embed",
    title: "Embed",
    fields: [
        {
            type: "string",
            name: "embedType",
            title: "Embed Type",
            options: {
                list: [
                    { title: "URL", value: "url" },
                    { title: "File", value: "file" },
                ],
                layout: "radio",
            },
            initialValue: "url",
        },
        {
            type: "string",
            name: "url",
            title: "URL",
            description:
                "Supported services: YouTube",
            hidden: ({ parent }) => parent?.embedType !== "url",
        },
        {
            type: "file",
            name: "file",
            title: "File",
            hidden: ({ parent }) => parent?.embedType !== "file",
        },
    ],
});

export const embedFragment = `
    _type,
    embedType,
    url,
    "file": file.asset->{
        ...
    }
`;

export interface Embed {
    _type: "embed";
    embedType: "url" | "file";
    url?: string;
    file?: {
        _type: "sanity.fileAsset";
        _id: string;
        _rev: string;
        _createdAt: string;
        _updatedAt: string;
        mimeType: string;
        size: number;
        url: string;
        extension: string;
        sha1hash: string;
        uploadId: string;
        path: string;
        originalFilename: string;
        assetId: string;
    };
}
