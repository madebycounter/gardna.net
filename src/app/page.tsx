import Content from "@/site/Content";

import { usePage } from "@/lib/queries";

import "./globals.css";

export default async function Home() {
    const pageData = await usePage();

    return (
        <main className="mx-auto max-w-screen-md p-4">
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

            <Content data={pageData.content} />
        </main>
    );
}
