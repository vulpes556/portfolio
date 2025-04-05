"use client"
import "./Bio.css"
import { FaMapLocation } from "react-icons/fa6";
import Image from "next/image"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Bio() {

    function calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);

        let age = today.getFullYear() - birth.getFullYear();
        let month = today.getMonth() - birth.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }


    return (
        <div id="bio" className="bio-main">
            <div className="portrait-container">
                <Image className="portrait" alt="An image of the developer" layout="intrinsic" width={200} height={200} src={"/portrait2.jpg"}>
                </Image>
            </div>
            <div className="name-div">Bálint Kovács ({calculateAge("1996-07-22")}) </div>
            <span>Full Stack Developer</span>
            <div className="residence-div">
                <FaMapLocation /> Miskolc, Hungary
            </div>
            <div className="email-div">
                <MdEmail /> balint.kovacs.dev@gmail.com
            </div>
            <div className="contacts">
                <button onClick={() => window.open("https://www.linkedin.com/in/b%C3%A1lint-kov%C3%A1cs-821bb2327/")} >
                    <CiLinkedin size={45} />
                </button>
                <button onClick={() => window.open("https://github.com/vulpes556")} >
                    <FaGithub size={45} />
                </button>
            </div>
            <div className="self-description">
                <p>Hi all! My name is Bálint, and I'm a Junior Fullstack Developer.</p>
                <p>
                    Over the past year, I've been diving into both trending backend and frontend technologies,
                    but I’m definitely more backend-oriented.
                </p>
                <p>
                    My goal is to continuously improve, learn new technologies, and deliver high-quality code.
                </p>
            </div>

        </div>
    )
}