import ContactSection from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/hero/hero";
import ProjectsSection from "@/components/projects/projects";
import TimelineSection from "@/components/timeline/timeline";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <HeroSection />
        <TimelineSection />
        <ProjectsSection />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
}
