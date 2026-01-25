"use client";

import { FlipWords } from "../ui/flip-words";
import Image from 'next/image';

let words = ["build", "ship", "scale"];

const techStack = [
    { name: "React & React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
];

export default function HeroSection() {
    return (
        <div className="h-screen flex items-center justify-between px-4 md:px-0">
            <div className="h-full flex flex-col items-start justify-center space-y-8 max-w-3xl">
                {/* Main Content */}
                <div className="space-y-6">
                    {/* Name and Title */}
                    <div className="space-y-4 font-geist-mono">
                        <div id="name" className="flex flex-col md:flex-row md:space-x-6 md:items-baseline space-y-2 md:space-y-0">
                            <span className="font-semibold text-xl md:text-2xl">Hey, I'm</span>
                            <span className="font-bold text-4xl md:text-6xl text-indigo-500 font-geist">
                                Pranav Gaikwad
                            </span>
                        </div>

                        {/* Professional Title */}
                        <div className="flex items-center gap-3">
                            <div className="h-px w-12 bg-indigo-500"></div>
                            <span className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                                Full Stack Software Engineer
                            </span>
                        </div>

                        {/* Tagline with FlipWords */}
                        <div id="title" className="flex flex-wrap items-center text-2xl md:text-4xl font-semibold gap-2">
                            <span>I</span>
                            <FlipWords words={words} className="text-indigo-500" />
                            <span>products that matter</span>
                            <span className="text-indigo-500">.</span>
                        </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-geist-mono max-w-xl leading-relaxed">
                        Specializing in web applications, mobile applications, and cross-platform
                        desktop solutions. Currently building @ Time Supervisor & exploring agentic AI.
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                    <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 font-geist">
                        Technologies I work with
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="group relative"
                                title={tech.name}
                            >
                                <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:border-indigo-500 dark:hover:border-indigo-500 transition-all hover:scale-110 hover:shadow-lg">
                                    <Image
                                        src={tech.icon}
                                        alt={tech.name}
                                        width={28}
                                        height={28}
                                        className="object-contain"
                                    />
                                </div>
                                {/* Tooltip */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <span className="text-xs font-geist-mono bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-2 py-1 rounded whitespace-nowrap">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Simple text indicator */}
                        <div className="flex items-center">
                            <span className="text-sm font-geist-mono text-neutral-500 dark:text-neutral-400 italic">
                                + more
                            </span>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-2">
                    <a href="#contact">
                        <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-bold font-geist transform hover:-translate-y-1 transition duration-400 hover:shadow-xl">
                            Let's Connect
                        </button>
                    </a>
                    <a href="#projects">
                        <button className="px-6 py-3 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg font-bold font-geist hover:border-indigo-500 dark:hover:border-indigo-500 transition duration-400">
                            View Projects
                        </button>
                    </a>
                </div>
            </div>

            {/* Profile Image */}
            <div className="hidden lg:block">
                <div className="relative">
                    <Image
                        src="/images/Pranav.jpg"
                        alt="Pranav Gaikwad"
                        width={400}
                        height={400}
                        className="rounded-xl overflow-hidden shadow-2xl"
                    />
                    {/* Optional: Status Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-white dark:bg-neutral-900 px-4 py-2 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-geist-mono">Available for work</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}