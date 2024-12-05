import { stegaClean } from "@sanity/client/stega";

import { getSocialIcon, identifyPlatform } from "@/lib/socials";

export interface SocialIconProps {
    className?: string;
    url?: string;
}

export default function SocialIcon({ url, className }: SocialIconProps) {
    const Icon = getSocialIcon(identifyPlatform(stegaClean(url) || ""));

    return <Icon className={className} />;
}
