import {
    FaFacebook,
    FaGithub,
    FaGoogle,
    FaInstagram,
    FaLink,
    FaLinkedinIn,
    FaPinterest,
    FaRegEnvelope,
    FaYelp,
    FaYoutube,
    FaXTwitter,
    FaPhone,
} from "react-icons/fa6";

export const supportedPlatforms = [
    {
        title: "E-Mail",
        value: "email",
    },
    {
        title: "Phone",
        value: "phone",
    },
    {
        title: "Instagram",
        value: "instagram",
    },
    {
        title: "Facebook",
        value: "facebook",
    },
    {
        title: "Twitter",
        value: "twitter",
    },
    {
        title: "LinkedIn",
        value: "linkedin",
    },
    {
        title: "YouTube",
        value: "youtube",
    },
    {
        title: "GitHub",
        value: "github",
    },
    {
        title: "Yelp",
        value: "yelp",
    },
    {
        title: "Pinterest",
        value: "pinterest",
    },
    {
        title: "Google",
        value: "google",
    },
    {
        title: "Other",
        value: "other",
    },
] as const;

export type SocialPlatform = (typeof supportedPlatforms)[number]["value"];

export function identifyPlatform(url: string): SocialPlatform {
    try {
        var u = new URL(url || "");
    } catch (e) {
        return "other";
    }

    if (u.protocol === "mailto:") {
        return "email";
    }

    if (u.protocol === "tel:") {
        return "phone";
    }

    if (u.host.includes("instagram") || u.host.includes("instagr.am")) {
        return "instagram";
    }

    if (u.host.includes("facebook") || u.host.includes("fb.me")) {
        return "facebook";
    }

    if (u.host.includes("twitter") || u.host.includes("x.com")) {
        return "twitter";
    }

    if (u.host.includes("linkedin")) {
        return "linkedin";
    }

    if (u.host.includes("youtube") || u.host.includes("youtu.be")) {
        return "youtube";
    }

    if (u.host.includes("github")) {
        return "github";
    }

    if (u.host.includes("yelp")) {
        return "yelp";
    }

    if (u.host.includes("pinterest")) {
        return "pinterest";
    }

    if (u.host.includes("google") || u.host.includes("goo.gl")) {
        return "google";
    }

    return "other";
}

export function getSocialIcon(platform: SocialPlatform) {
    switch (platform) {
        case "email":
            return FaRegEnvelope;
        case "phone":
            return FaPhone;
        case "instagram":
            return FaInstagram;
        case "facebook":
            return FaFacebook;
        case "twitter":
            return FaXTwitter;
        case "linkedin":
            return FaLinkedinIn;
        case "youtube":
            return FaYoutube;
        case "github":
            return FaGithub;
        case "yelp":
            return FaYelp;
        case "pinterest":
            return FaPinterest;
        case "google":
            return FaGoogle;
        default:
            return FaLink;
    }
}
