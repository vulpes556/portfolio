import Bio from "@/components/Bio/Bio";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";


export default function Home() {
  return (
    <div className="main">
      <div className="left-section">
        <Bio />
      </div>
      <div className="right-section">
        <TechStack />
        <Projects />
      </div>
    </div>
  );
}
