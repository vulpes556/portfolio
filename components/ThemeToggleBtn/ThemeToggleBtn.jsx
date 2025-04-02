"use client";
import "./ThemeToggleBtn.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";



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
            {
                theme === "dark" ? <MdLightMode size={40} className="theme-icon" /> : <MdDarkMode size={40} className="theme-icon" />
            }
        </button>
    );
}
