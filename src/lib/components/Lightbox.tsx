"use client";

import { useState } from "react";
import YALB, { MediaSlide } from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import Image from "@/lib/components/Image";
import { SanityImage } from "@/lib/types";

declare module "yet-another-react-lightbox" {
    export interface MediaSlide {
        type: "media-slide";
        data: SanityImage;
    }

    interface SlideTypes {
        "media-slide": MediaSlide;
    }
}

function renderSlide(slide: MediaSlide) {
    return <Image src={slide.data} width={500} />;
}

export interface LightboxProps {
    open: boolean;
    setLightbox?: (open: boolean, id?: string) => void;
    currentSlide?: string;
    slides: SanityImage[];
}

export default function Lightbox({
    open,
    setLightbox,
    currentSlide,
    slides,
}: LightboxProps) {
    var index = 0;

    if (currentSlide) {
        index = slides.findIndex((item) => item.id === currentSlide);
    }

    return (
        <YALB
            className="Lightbox"
            open={open}
            close={() => setLightbox && setLightbox(false)}
            index={index}
            slides={slides.map((item) => ({
                type: "media-slide",
                data: item,
            }))}
            render={{
                slide: ({ slide }) => renderSlide(slide as MediaSlide),
            }}
            plugins={[Counter]}
        />
    );
}

export function useLightboxState(): [
    boolean,
    string | undefined,
    (open: boolean, id?: string) => void,
] {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState<string | undefined>(undefined);

    const setLightbox = (open: boolean, id?: string) => {
        if (id) setCurrent(id);
        setOpen(open);
    };

    return [open, current, setLightbox];
}