"use client";

import clsx from "clsx";
import { SanityImage as SanityImageComponent } from "sanity-image";

import { SanityImage } from "@/lib/types";

export type ImageProps = Omit<
    React.ComponentProps<typeof SanityImageComponent>,
    | "baseUrl"
    | "dataset"
    | "projectId"
    | "hotspot"
    | "crop"
    | "id"
    | "alt"
    | "onClick"
> & {
    src?: SanityImage;
    onClick?: (id: string) => void;
};

export default function Image(props: ImageProps) {
    const { src, onClick, className, ...rest } = props;

    if (!src) return null;

    return (
        <SanityImageComponent
            id={src.id}
            alt={src.caption}
            crop={src.crop}
            hotspot={src.hotspot}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            preview={src.preview}
            onClick={onClick ? () => onClick(src.id) : undefined}
            className={clsx(props.className, onClick && "cursor-pointer")}
            {...rest}
        />
    );
}
