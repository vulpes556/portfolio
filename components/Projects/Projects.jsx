"use client"
import "./Projects.css";
import Image from "next/image";
import portfolioPic from "@/public/portfolio3.png"
import householdPic from "@/public/household.png"
import ladleMeThisPic from "@/public/ladleMe.png"


export default function Projects() {
    return (
        <div id="projects" className="projects-main">
            <h2>Recent Projects</h2>

            <div className="project" onClick={() => window.open("https://github.com/LadleMeThis/LadleMeThis", "_blank")}>
                <div className="project-name">Ladle Me This</div>
                <div className="img-container hover">
                    <Image fill alt="Picture from a project" src={ladleMeThisPic} />
                </div>
                <div className="project-description">
                    A team project of 2, where we created a platform where users can discover and share recipes with one another.
                </div>
            </div>

            <div className="project" onClick={() => window.open("https://github.com/BenceV95/HousholdResponsibilitySharingApp", "_blank")}>
                <div className="project-name">Pura Domus</div>
                <div className="img-container">
                    <Image fill alt="Picture from a project" src={householdPic} />
                </div>
                <div className="project-description">
                    Pura Domus, latin for clean home. It's a household chore assigner/tracker app.
                </div>
            </div>

            <div className="project" onClick={() => window.open("https://github.com/vulpes556/portfolio", "_blank")}>
                <div className="project-name">My Portfolio</div>
                <div className="img-container">
                    <Image fill  alt="Picture from a project" src={portfolioPic}/>
                </div>
                <div className="project-description">This very site's code!</div>
            </div>
        </div>
    )
}
