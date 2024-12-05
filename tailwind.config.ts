import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        fontFamily: {
            sans: ["Open Sans", "sans-serif"],
        },
        extend: {
            dropShadow: {
                heavy: [
                    "0px 0px 5px rgba(0, 0, 0, 0.5)",
                    "0px 0px 10px rgba(0, 0, 0, 0.5)",
                ],
            },
        },
    },
    plugins: [],
};
export default config;
