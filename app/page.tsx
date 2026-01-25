import ContactSection from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/hero/hero";
import ProjectsSection from "@/components/projects/projects";
import TimelineSection from "@/components/timeline/timeline";
import { FloatingDock } from "@/components/ui/floating-dock";
import { NavigationItems } from "@/utils/navigation-items";

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

      <div className="fixed bottom-6 right-6 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50">
        <FloatingDock items={NavigationItems} />
      </div>
    </>
  );
}
