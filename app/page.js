import Bio from "@/components/Bio/Bio";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";


export default function Home() {
  return (
    <div className="main">
      <div className="top-section">
      <div className="left-section">
        <Bio />
      </div>
      <div className="right-section">
        <TechStack />
      </div>
      </div>
      <div className="bottom-section">
        <Projects />
      <Contact />
      </div>
    </div>
  );
}
