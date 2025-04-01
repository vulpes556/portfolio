import StackButton from "./StackButton";
import "./TechStack.css";




export default function TechStack() {
    const frontend = [
        { name: "JavaScript", img: "/js.png", alt: "JavaScript button" },
        { name: "HTML", img: "/html.png", alt: "HTML button" },
        { name: "CSS", img: "/css.png", alt: "CSS button" },
        { name: "React", img: "/react.png", alt: "React button" },
        { name: "Bootstrap", img: "/bootstrap.png", alt: "Bootstrap button" },
        { name: "Node.js", img: "/node.png", alt: "Node.js button" },
        { name: "Next.js", img: "/next.png", alt: "Next.js button" }
    ];

    const backend = [
        { name: "C#", img: "/csharp.png", alt: "C# button" },
        { name: ".NET", img: "/net.png", alt: ".NET button" },
        { name: "IdentityFW", img: "/nuget.png", alt: "IdentityFW button" },
        { name: "EntityFW", img: "/nuget.png", alt: "EntityFW button" }
    ];

    const database = [
        { name: "PostgreSQL", img: "/postgre.png", alt: "PostgreSQL button" },
        { name: "MSSQL", img: "/mssql.png", alt: "MSSQL button" }
    ];

    const misc = [
        { name: "Git", img: "/git.png", alt: "Git button" },
        { name: "Docker", img: "/docker.png", alt: "Docker button" }
    ];



    return (
        <div className="tech-stack-main">
            <h2>My Stack</h2>
            <h3>Frontend</h3>
            <div className="tech-category frontend">
                {frontend.map(tech => <StackButton alt={tech.alt} key={tech.name} stackImg={tech.img} stackName={tech.name} />)}
            </div>
            <h3>Backend</h3>
            <div className="tech-category backend">
                {backend.map(tech => <StackButton alt={tech.alt} key={tech.name} stackImg={tech.img} stackName={tech.name} />)}
            </div>
            <h3>Database</h3>
            <div className="tech-category database">
                {database.map(tech => <StackButton alt={tech.alt} key={tech.name} stackImg={tech.img} stackName={tech.name} />)}
            </div>
            <h3>Misc.</h3>
            <div className="tech-category misc">
                {misc.map(tech => <StackButton alt={tech.alt} key={tech.name} stackImg={tech.img} stackName={tech.name} />)}
            </div>
        </div>
    )
}
