"use client";

import { useMemo, useState } from "react";
import { ProjectsItems, ProjectItem } from "@/utils/projects-items";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import ProjectDetailsModal from "@/components/ui/project-details-modal";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ProjectPageNavigationItems } from "@/utils/project-page-navigation-items";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Calculate stats
  const stats = useMemo(() => {
    // Get unique technologies
    const allTech = ProjectsItems.flatMap(project => project.tech || []);
    const uniqueTech = new Set(allTech);

    // Count projects in production
    const inProduction = ProjectsItems.filter(
      project => project.status?.toLowerCase().includes('production') ||
        project.status?.toLowerCase().includes('live')
    ).length;

    return {
      totalProjects: ProjectsItems.length,
      totalTechnologies: uniqueTech.size,
      inProduction: inProduction
    };
  }, []);

  return (
    <>
      <div id="projects" className="relative w-full py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="space-y-6 mb-16">
            <div className="space-y-4 mb-16">
              <h2 className="text-5xl md:text-6xl font-bold font-geist">
                My Work <span className="text-indigo-500">in Code</span>
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-geist-mono max-w-2xl">
                Each project represents a problem I wanted to solve, a technology I wanted to master,
                or an idea I couldn't stop thinking about. Here's everything I've shipped.
              </p>
            </div>

            {/* Dynamic Stats */}
            <div className="flex flex-wrap gap-8 font-geist-mono text-sm">
              <div>
                <span className="text-2xl font-bold text-indigo-500">{stats.totalProjects}+</span>
                <span className="text-neutral-600 dark:text-neutral-400 ml-2">Projects</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-indigo-500">{stats.totalTechnologies}+</span>
                <span className="text-neutral-600 dark:text-neutral-400 ml-2">Technologies</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-indigo-500">{stats.inProduction}</span>
                <span className="text-neutral-600 dark:text-neutral-400 ml-2">In Production</span>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <BentoGrid className="max-w-7xl mx-auto">
            {ProjectsItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                tech={item.tech}
                status={item.status}
                github={item.github}
                liveUrl={item.liveUrl}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                onClick={() => handleProjectClick(item)}
              />
            ))}
          </BentoGrid>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />

      <div className="fixed bottom-6 right-6 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50">
        <FloatingDock items={ProjectPageNavigationItems} />
      </div>
    </>
  );
}