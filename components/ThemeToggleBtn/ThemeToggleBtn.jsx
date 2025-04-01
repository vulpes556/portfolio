"use client";
import "./ThemeToggleBtn.css";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isToggling, setIsToggling] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleToggle = () => {
        setIsToggling(true);
        setTimeout(() => {
            setTheme(theme === "dark" ? "light" : "dark");
            setIsToggling(false);
        }, 300);
    };

    return (
        <button onClick={handleToggle} className={isToggling ? "toggle-animation" : ""}>
            <Image
                alt="theme-toggle"
                width={50}
                height={50}
                src={theme === "dark" ? "/light-mode.svg" : "/dark-mode.png"}
                className="theme-icon"
            />
        </button>
    );
}
