export interface BannerProps {}

export default function Banner() {
    const banner = [
        `                         __                               __ `,
        `   ____ _____ __________/ /___  ____ _        ____  ___  / /_`,
        `  / __ A/ __ A/ ___/ __  / __ B/ __ A/       / __ B/ _ B/ __/`,
        ` / /_/ / /_/ / /  / /_/ / / / / /_/ /  _    / / / /  __/ /_  `,
        ` B__, /B__,_/_/   B__,_/_/ /_/B__,_/  (_)  /_/ /_/B___/B__/  `,
        `/____/                                                       `,
    ];

    return (
        <div>
            {banner.map((line, i) => (
                <pre key={i}>
                    {line.replaceAll("A", "`").replaceAll("B", "\\")}
                </pre>
            ))}
            <br />
        </div>
    );
}
