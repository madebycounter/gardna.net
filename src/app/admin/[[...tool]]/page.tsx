import Studio from "./Studio";
import "./sanity.css";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
    return <Studio />;
}
