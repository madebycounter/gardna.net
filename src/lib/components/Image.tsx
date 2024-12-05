"use client";

import clsx from "clsx";
import { useState } from "react";
import { SanityImage as SanityImageComponent } from "sanity-image";

import Viewer from "@/lib/components/Viewer";
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
    viewer?: boolean;
};

export default function Image(props: ImageProps) {
    const { src, onClick, className, viewer = false, ...rest } = props;
    const [viewerOpen, setViewerOpen] = useState(false);

    if (!src) return null;

    return (
        <>
            {viewer && (
                <Viewer open={viewerOpen} setOpen={setViewerOpen}>
                    <div className="flex h-full w-full flex-col p-4 md:p-16">
                        <SanityImageComponent
                            id={src.id}
                            alt={src.caption}
                            crop={src.crop}
                            hotspot={src.hotspot}
                            projectId={
                                process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                            }
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                            preview={src.preview}
                            className="h-full w-full flex-1 object-contain"
                        />
                        <p className="text-center text-gray-300">
                            {src.caption}
                        </p>
                    </div>
                </Viewer>
            )}

            <SanityImageComponent
                id={src.id}
                alt={src.caption}
                crop={src.crop}
                hotspot={src.hotspot}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                preview={src.preview}
                onClick={() => {
                    if (onClick) onClick(src.id);
                    if (viewer) setViewerOpen(true);
                }}
                className={clsx(
                    props.className,
                    (onClick || viewer) && "cursor-pointer",
                )}
                {...rest}
            />
        </>
    );
}
