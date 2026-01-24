import HeroSection from "@/components/hero/hero";
import ProjectsSection from "@/components/projects/projects";
import TimelineSection from "@/components/timeline/timeline";

export default function Home() {
  return <>
    <div>
      <HeroSection />
      <TimelineSection />
      <ProjectsSection />
    </div>
  </>;
}
