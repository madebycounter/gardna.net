import Image from "next/image";
import Link from "next/link";

import Content from "@/site/Content";

import Action from "@/lib/components/Action";
import { Config, Page } from "@/lib/types";

import CounterLogo from "@/counter.png";

import "./SitePage.css";

export interface SitePageProps {
    pageData: Page;
    config: Config;
}

export default function SitePage({ pageData, config }: SitePageProps) {
    return (
        <div className="mx-auto flex min-h-screen max-w-screen-md flex-col p-4">
            <header className="flex-grow-0">
                <div className="flex justify-between">
                    <div>
                        <span className="my-4 text-4xl font-bold tracking-tight">
                            {config.siteTitle}
                        </span>

                        <div className="my-2 block sm:hidden">
                            <p className="my-0">william@madebycounter.com</p>
                            <p className="my-0">San Jose, CA</p>
                        </div>

                        <div className="my-4 flex gap-4">
                            {config.navLinks.map((link, i) => (
                                <Link
                                    key={i}
                                    href={
                                        link._type === "pageLink"
                                            ? link.homepage
                                                ? "/"
                                                : "/" + link.page.slug.current
                                            : link.url
                                    }
                                    target={
                                        link._type === "pageLink"
                                            ? undefined
                                            : "_blank"
                                    }
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="my-4 hidden text-right sm:block">
                        {config.navSubtitle.map((item, idx) => (
                            <p className="my-0" key={idx}>{item}</p>
                        ))}
                    </div>
                </div>

                <hr />
            </header>

            <main className="flex-grow">
                <Content data={pageData.content} />
            </main>

            <footer className="mb-8 mt-16 flex-grow-0">
                <hr className="mb-8" />

                <div className="my-4 flex justify-center">
                    <Action
                        href="https://madebycounter.com"
                        target="_blank"
                        className="w-fit"
                    >
                        <Image
                            src={CounterLogo}
                            alt="Counter Logo"
                            className="h-10 w-auto object-contain opacity-95"
                        />
                    </Action>
                </div>

                <p className="my-0 text-center text-sm text-black opacity-95">
                    © 2024 {config.siteTitle}. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
