"use client";

import { PortableText } from "next-sanity";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

import Embed from "@/lib/components/Embed";
import Gallery from "@/lib/components/Gallery";
import Image from "@/lib/components/Image";
import {
    Embed as EmbedData,
    Gallery as GalleryData,
    RichText,
    SanityImage,
} from "@/lib/types";

export interface ContentProps {
    data: RichText;
}

export interface ComponentProps<T> {
    value: T;
}

export default function Content({ data }: ContentProps) {
    // const [lightboxOpen, lightboxCurrent, setLightbox] = useLightboxState();

    // const slides = [
    //     ...data.filter((block: any) => block._type === "image"),
    //     ...data
    //         .filter((block: any) => block._type === "gallery")
    //         .flatMap((block: any) => block.images),
    // ].filter((a, i, r) => r.findIndex((b) => b.id === a.id) === i);

    // const onImageClick = (id: string) => {
    //     setLightbox(true, id);
    // };

    return (
        <>
            <PortableText
                value={data}
                components={{
                    block: {
                        normal: (props: any) => <p>{props.children}</p>,
                        h1: (props: any) => <h1>{props.children}</h1>,
                        h2: (props: any) => <h2>{props.children}</h2>,
                        h3: (props: any) => <h3>{props.children}</h3>,
                    },
                    marks: {
                        strong: (props: any) => (
                            <strong>{props.children}</strong>
                        ),
                        link: (props: any) => (
                            <Link href={props.value.href}>{props.text}</Link>
                        ),
                    },
                    types: {
                        gallery: (props: ComponentProps<GalleryData>) => (
                            <>
                                <Gallery
                                    images={props.value.images}
                                    columns={2}
                                    width={600}
                                    queryParams={{ q: 50 }}
                                    viewer
                                />
                            </>
                        ),
                        image: (props: ComponentProps<SanityImage>) => (
                            <Image
                                src={props.value}
                                className="my-4"
                                width={800}
                                viewer
                            />
                        ),
                        embed: (props: ComponentProps<EmbedData>) => (
                            <Embed
                                url={
                                    (props.value.embedType == "url"
                                        ? props.value.url
                                        : props.value.file?.url) || ""
                                }
                            />
                        ),
                    },
                }}
            />
        </>
    );
}
