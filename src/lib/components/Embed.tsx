"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export interface EmbedProps {
    url: string;
}

export default function Embed({ url }: EmbedProps) {
    const match_pdf_file = /\.(pdf)($|\?)/i;

    return (
        <>
            {match_pdf_file.test(url) ? (
                <div className="aspect-square">
                    <embed
                        className="h-full w-full"
                        src={url}
                        type="application/pdf"
                    ></embed>
                </div>
            ) : (
                <div className="aspect-video">
                    <ReactPlayer
                        width={"100%"}
                        height={"100%"}
                        url={url}
                        controls
                    />
                </div>
            )}
        </>
    );
}

// function determineEmbedType(url: string) {
//     const { hostname } = new URL(url);

//     const match_pdf_file = /\.(pdf)($|\?)/i;
//     const match_audio_file =
//         /\.(mp3|wav|weba|aac|oga|m4a|mp4|ogg|opus|ts|wma|mpga)($|\?)/i;

//     switch (hostname) {
//         case "twitter.com":
//             return "twitter";
//         case "www.youtube.com":
//         case "youtu.be":
//         case "youtube.com":
//             return "youtube";
//         case "soundcloud.com":
//             return "soundcloud";
//         case "jsfiddle.net":
//             return "jsfiddle";
//         case "imgur.com":
//             return "imgur";
//         case "www.instagram.com":
//             return "instagram";
//         case "gist.github.com":
//             return "gist";
//         case "repl.it":
//             return "replit";
//         case "www.figma.com":
//             return "figma";
//         case "www.google.com":
//             return "google";
//         case "gfycat.com":
//             return "gfycat";
//         case "dropbox.com":
//         case "www.dropbox.com":
//             return "dropbox";
//         case "codesandbox.io":
//             if (url.includes("codesandbox.io/embed/")) return "codesandbox";
//             return undefined;
//         default:
//             if (match_pdf_file.test(url)) {
//                 return "pdf";
//             } else if (match_audio_file.test(url)) {
//                 return "simplePlayer";
//             } else {
//                 return undefined;
//             }
//     }
// }
