import Image from "next/image";

import Content from "@/site/Content";

import Action from "@/lib/components/Action";
import { usePage } from "@/lib/queries";

import CounterLogo from "@/counter.png";

import "./globals.css";

export default async function Home() {
    const pageData = await usePage();

    return (
        <div className="mx-auto flex min-h-screen max-w-screen-md flex-col p-4">
            <header className="flex-grow-0">
                <div className="flex justify-between">
                    <div>
                        <span className="my-4 text-4xl font-bold tracking-tight">
                            William Gardner
                        </span>

                        <div className="my-2 block sm:hidden">
                            <p className="my-0">william@madebycounter.com</p>
                            <p className="my-0">San Jose, CA</p>
                        </div>

                        <div className="my-4 flex gap-4">
                            <a href="/about">About</a>
                            <a href="/about">Photography</a>
                            <a href="/projects">Drone</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>

                    <div className="my-4 hidden text-right sm:block">
                        <p className="my-0">william@madebycounter.com</p>
                        <p className="my-0">San Jose, CA</p>
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
                    Last updated 2024
                </p>
                <p className="my-0 text-center text-sm text-black opacity-95">
                    © 2024 William Gardner. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
