import { getImageDimensions } from "@sanity/asset-utils";

import { SanityImage } from "../types";
import Image from "./Image";

type GalleryLayout<T> = {
    items: T[];
    size: number;
}[];

// https://github.com/yixizhang/seed-shuffle/blob/master/index.js
function seededShuffle(array: any[], seed: number) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;
    seed = seed || 1;
    let random = function () {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function createLayout<T>(
    items: T[],
    groups: number,
    getSize: (item: T) => number,
) {
    // Sort images by size
    items.sort((a, b) => getSize(b) - getSize(a));

    // Create layout
    var layout: GalleryLayout<T> = [];
    for (let i = 0; i < groups; i++) layout.push({ items: [], size: 0 });

    // Add images to shortest column until all images are added
    for (let i = 0; i < items.length; i++) {
        var img = items[i];
        var shortestColumn = layout.reduce((prev, curr) =>
            prev.size < curr.size ? prev : curr,
        );

        shortestColumn.items.push(img);
        shortestColumn.size += getSize(img);
    }

    // Shuffle images deterministically
    for (let i = 0; i < groups; i++) {
        layout[i].items = seededShuffle(layout[i].items, 1);
    }

    return layout.map((group) => group.items);
}

export interface GalleryProps {
    images: SanityImage[];
    columns?: number;
}

export default function Gallery({ images, columns = 2 }: GalleryProps) {
    var layout = createLayout(images, columns, (item) => {
        const { width, height } = getImageDimensions(item);
        return width / height;
    });

    return (
        <div className="flex flex-row gap-2">
            {layout.map((group, i) => (
                <div className="flex flex-col gap-2" key={i}>
                    {group.map((photo, j) => (
                        <Image
                            className="flex-auto object-cover"
                            src={photo}
                            key={j}
                            width={600}
                            queryParams={{ q: 50 }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
