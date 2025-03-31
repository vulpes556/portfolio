"use client";
import "./ThemeToggleBtn.css";
import Image from "next/image";


import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Image alt="light-mode-toggle" width={50} height={50} src={"/light-mode.svg"} ></Image> : <Image alt="dark-mode-btn" width={50} height={50} src={"/dark-mode.png"} />
                }
            </button>
        </>
    );
}
