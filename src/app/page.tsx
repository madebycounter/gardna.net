import { PortableText } from "next-sanity";
import Link from "next/link";

import Gallery from "@/lib/components/Gallery";
import Image from "@/lib/components/Image";
import { usePage } from "@/lib/queries";

export default async function Home() {
    const pageData = await usePage();

    console.log(pageData);

    return (
        <main className="mx-auto max-w-screen-md p-4">
            <div className="flex justify-between">
                <div>
                    <span className="my-4 text-4xl font-bold tracking-tight">
                        William Gardner
                    </span>

                    <div className="my-4 flex gap-4">
                        <a href="/about">About</a>
                        <a href="/about">Photography</a>
                        <a href="/projects">Drone</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>

                <div className="my-4 text-right">
                    <p className="my-0">william@madebycounter.com</p>
                    <p className="my-0">San Jose, CA</p>
                </div>
            </div>

            <hr />

            <PortableText
                value={pageData.content}
                components={{
                    block: {
                        normal: (props: any) => <p>{props.children}</p>,
                        h1: (props: any) => <h1>{props.children}</h1>,
                        h2: (props: any) => <h2>{props.children}</h2>,
                        h3: (props: any) => <h3>{props.children}</h3>,
                    },
                    marks: {
                        strong: (props: any) => (
                            <strong>{props.children}</strong>
                        ),
                        link: (props: any) => (
                            <Link href={props.value.href}>{props.text}</Link>
                        ),
                    },
                    types: {
                        gallery: (props: any) => (
                            <Gallery images={props.value.images} columns={2} />
                        ),
                        "image.default": (props: any) => (
                            <Image
                                src={props.value}
                                className="my-4"
                                width={800}
                            />
                        ),
                    },
                }}
            />
        </main>
    );
}
