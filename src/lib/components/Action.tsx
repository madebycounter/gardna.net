import Link from "next/link";
import { ReactNode } from "react";

export interface ActionProps {
    href?: string;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
    target?: string;
    label?: string;
    disabled?: boolean;
}

export default function Action({
    href,
    onClick,
    className,
    children,
    target,
    label,
    disabled,
}: ActionProps) {
    const Action = href ? Link : "button";

    return (
        <Action
            href={href as string}
            target={target}
            onClick={onClick}
            className={className}
            aria-label={label}
            disabled={disabled}
        >
            {children}
        </Action>
    );
}
