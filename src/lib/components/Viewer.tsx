"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

import Action from "@/lib/components/Action";

import styles from "./Viewer.module.css";

export interface ViewerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    children?: React.ReactNode;
    className?: string;
}

export default function Viewer({
    open,
    setOpen,
    children,
    className,
}: ViewerProps) {
    const onKeydown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && open) setOpen(false);
    };

    useEffect(() => {
        document.addEventListener("keydown", onKeydown, false);

        return () => {
            document.removeEventListener("keydown", onKeydown, false);
        };
    }, [onKeydown]);

    return (
        <div
            className={clsx(styles.Viewer, className, {
                [styles.Viewer__open]: open,
            })}
        >
            <Action
                className={styles.ViewerClose}
                onClick={() => setOpen(false)}
            >
                <IoMdClose />
            </Action>
            {children}
        </div>
    );
}
