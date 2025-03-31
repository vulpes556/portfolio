"use client"
import "./Navbar.css"
import ThemeToggle from "../ThemeToggleBtn/ThemeToggleBtn"
import { FaBars } from "react-icons/fa";
import { useState } from "react";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the hamburger menu
    function openHamburger() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="navbar-main">
            {/* Hamburger Icon */}
            <div className="hamburger" onClick={openHamburger}>
                <FaBars className="hamburger-icon" />
            </div>

            {/* Navbar Links */}
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="#bio">Bio</a>
                <a href="#my-stack">My Stack</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <ThemeToggle />
        </div>
    );
}