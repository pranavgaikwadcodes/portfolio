"use client";

import { ProjectsItems } from "@/utils/projects-items";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Link from "next/link";
import { IconArrowRight, IconFolder, IconCode, IconRocket, IconStar } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function ProjectsSection() {
    return (
        <div className="relative w-full py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Section Header */}
                <div className="space-y-4 mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold font-geist">
                        What I'm <span className="text-indigo-500">Building</span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-geist-mono max-w-2xl">
                        Side projects, experiments, and ideas brought to life — constantly shipping and learning
                    </p>
                </div>

                {/* Projects Grid with View All Card */}
                <ProjectsBentoGrid />
            </div>
        </div>
    );
}

const ProjectsBentoGrid = () => {
    // Only show first 3 projects
    const featuredProjects = ProjectsItems.slice(0, 3);

    return (
        <BentoGrid className="max-w-7xl mx-auto">
            {featuredProjects.map((item, i) => (
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
                    className={i === 0 ? "md:col-span-2" : ""}
                />
            ))}

            {/* View All Projects Card */}
            <ViewAllProjectsCard />
        </BentoGrid>
    );
}


const ViewAllProjectsCard = () => {
    return (
        <Link href="/projects">
            <div className="group/bento row-span-1 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 border border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/50 overflow-hidden h-full min-h-[20rem] relative cursor-pointer">
                {/* Animated Background Pattern */}
                <motion.div
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: "linear-gradient(-45deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))",
                        backgroundSize: "400% 400%",
                    }}
                />

                {/* Floating Icons */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-10 left-10 opacity-20"
                    >
                        <IconCode className="w-12 h-12 text-white" />
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -5, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        className="absolute bottom-10 right-10 opacity-20"
                    >
                        <IconRocket className="w-12 h-12 text-white" />
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            x: [0, 10, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                        className="absolute top-1/2 right-1/4 opacity-20"
                    >
                        <IconStar className="w-8 h-8 text-white" />
                    </motion.div>
                </div>

                {/* Main Content */}
                <motion.div
                    initial="initial"
                    whileHover="animate"
                    className="relative z-10 flex flex-col items-center justify-center gap-6 p-8 text-center"
                >
                    {/* Animated Icon Container */}
                    <motion.div
                        variants={{
                            initial: { scale: 1, rotate: 0 },
                            animate: {
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0],
                                transition: {
                                    duration: 0.6,
                                    ease: "easeInOut",
                                },
                            },
                        }}
                        className="relative"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <IconFolder className="w-10 h-10 text-white" />
                        </div>

                        {/* Pulsing ring */}
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                            }}
                            className="absolute inset-0 rounded-2xl border-2 border-white"
                        />
                    </motion.div>

                    {/* Text Content */}
                    <div className="space-y-3">
                        <motion.h3
                            variants={{
                                initial: { y: 0 },
                                animate: {
                                    y: -5,
                                    transition: { duration: 0.3 },
                                },
                            }}
                            className="text-2xl md:text-3xl font-bold font-geist text-white"
                        >
                            View All Projects
                        </motion.h3>
                        <motion.p
                            variants={{
                                initial: { opacity: 0.9 },
                                animate: {
                                    opacity: 1,
                                    transition: { duration: 0.3 },
                                },
                            }}
                            className="text-sm font-geist-mono text-indigo-100 max-w-[220px]"
                        >
                            Explore my complete portfolio of work and experiments
                        </motion.p>
                    </div>

                    {/* Animated Arrow Button */}
                    <motion.div
                        variants={{
                            initial: { x: 0 },
                            animate: {
                                x: 10,
                                transition: {
                                    duration: 0.3,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 0.5,
                                },
                            },
                        }}
                        className="flex items-center gap-2 text-white font-geist-mono text-sm"
                    >
                        <span>Explore Now</span>
                        <IconArrowRight className="w-5 h-5" />
                    </motion.div>

                    {/* Project Count Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="absolute -top-2 -right-2 bg-white text-indigo-600 rounded-full w-12 h-12 flex items-center justify-center font-bold font-geist text-sm border-4 border-indigo-500"
                    >
                        {ProjectsItems.length}+
                    </motion.div>
                </motion.div>

                {/* Bottom Gradient Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-indigo-200 to-white transform scale-x-0 group-hover/bento:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
        </Link>
    );
};