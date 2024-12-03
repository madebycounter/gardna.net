import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        fontFamily: {
            sans: ["Open Sans", "sans-serif"],
        },
    },
    plugins: [],
};
export default config;
