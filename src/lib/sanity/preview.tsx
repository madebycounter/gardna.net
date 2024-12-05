export function blockToString(blocks: any) {
    const block = (blocks || []).find((block: any) => block._type === "block");
    return block
        ? block.children
              .filter((child: any) => child._type === "span")
              .map((span: any) => span.text)
              .join("")
        : "";
}

export function videoThumbnail(playbackId: string) {
    return playbackId ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={`https://image.mux.com/${playbackId}/thumbnail.jpg?width=200&height=200&fit_mode=crop`}
            alt=""
        />
    ) : undefined;
}
