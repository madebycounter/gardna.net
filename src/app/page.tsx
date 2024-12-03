import Gallery from "@/components/Gallery";

import bandPhotos from "@/include/bandPhotos";

export default async function Home() {
    return (
        <main className="mx-auto max-w-screen-md p-4">
            <div className="flex justify-between">
                <div>
                    <h1>William Gardner</h1>

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

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </p>

            <Gallery images={bandPhotos} columns={2} />
        </main>
    );
}
