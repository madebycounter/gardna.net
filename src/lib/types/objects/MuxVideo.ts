export interface MuxVideo {
    _type: "mux.video";
    asset: {
        playbackId: string;
        data: {
            aspect_ratio: string;
        };
    };
}

export const muxVideoFragment = `
    _type,
    asset-> {
        playbackId,
        data {
            aspect_ratio
        }
    }
`;
