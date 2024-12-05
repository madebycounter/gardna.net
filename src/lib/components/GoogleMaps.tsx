import { GoogleMapsEmbed } from "@next/third-parties/google";
import clsx from "clsx";

import styles from "./GoogleMaps.module.css";

export type GoogleMapsProps = {
    className?: string;
    zoom?: number;
    query: string;
};

export default function GoogleMaps({
    className,
    zoom = 14,
    query,
}: GoogleMapsProps) {
    if (!process.env.NEXT_PUBLIC_MAPS_API_KEY) {
        console.error("Missing Google Maps API key");
        return null;
    }

    return (
        <div className={clsx(styles.GoogleMaps, className)}>
            <GoogleMapsEmbed
                apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
                q={query}
                zoom={zoom.toString()}
                mode="place"
            />
        </div>
    );
}
