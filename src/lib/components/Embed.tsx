"use client";

import ReactPlayer, { ReactPlayerProps } from "react-player";

export interface EmbedProps {
    url: string;
}

export default function Embed({ url }: EmbedProps) {
    // const match_pdf_file = /\.(pdf)($|\?)/i;

    const embedType = determineEmbedType(url);

    return (
        <>
            {embedType === "pdf" && (
                <div className="aspect-square">
                    <embed
                        className="h-full w-full"
                        src={url}
                        type="application/pdf"
                    ></embed>
                </div>
            )}

            {embedType === "youtube" && (
                <div className="aspect-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${youTubeID(url)}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </>
    );
}

function youTubeID(url: string) {
    var expr =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(expr);
    return match && match[7].length == 11 ? match[7] : false;
}

function determineEmbedType(url: string) {
    const { hostname } = new URL(url);

    const match_pdf_file = /\.(pdf)($|\?)/i;
    const match_audio_file =
        /\.(mp3|wav|weba|aac|oga|m4a|mp4|ogg|opus|ts|wma|mpga)($|\?)/i;

    switch (hostname) {
        case "twitter.com":
            return "twitter";
        case "www.youtube.com":
        case "youtu.be":
        case "youtube.com":
            return "youtube";
        case "soundcloud.com":
            return "soundcloud";
        case "jsfiddle.net":
            return "jsfiddle";
        case "imgur.com":
            return "imgur";
        case "www.instagram.com":
            return "instagram";
        case "gist.github.com":
            return "gist";
        case "repl.it":
            return "replit";
        case "www.figma.com":
            return "figma";
        case "www.google.com":
            return "google";
        case "gfycat.com":
            return "gfycat";
        case "dropbox.com":
        case "www.dropbox.com":
            return "dropbox";
        case "codesandbox.io":
            if (url.includes("codesandbox.io/embed/")) return "codesandbox";
            return undefined;
        default:
            if (match_pdf_file.test(url)) {
                return "pdf";
            } else if (match_audio_file.test(url)) {
                return "simplePlayer";
            } else {
                return undefined;
            }
    }
}
