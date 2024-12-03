import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "William Gardner | About",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>

            <body>{children}</body>
        </html>
    );
}
