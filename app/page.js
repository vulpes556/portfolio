import Bio from "@/components/Bio/Bio";
import StackButton from "@/components/TechStack/StackButton";
import TechStack from "@/components/TechStack/TechStack";


export default function Home() {
  return (
    <div className="main">
      <div className="left-section">
        <Bio />
      </div>
      <div className="right-section">
        <TechStack/>
        <h1>secton2</h1>
        <h1>secton3</h1>
        <h1>secton4</h1>
        <h1>secton5</h1>
      </div>
    </div>
  );
}
