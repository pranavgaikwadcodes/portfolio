"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconBrandGithub, IconExternalLink, IconClock, IconUsers } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectDetails {
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tech: string[];
    status?: string;
    github?: string;
    liveUrl?: string;
    features?: string[];
    challenges?: string[];
    timeline?: string;
    team?: string;
}

interface ProjectDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: ProjectDetails | null;
}

export default function ProjectDetailsModal({ isOpen, onClose, project }: ProjectDetailsModalProps) {
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                            >
                                <IconX className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                            </button>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto max-h-[90vh]">
                                {/* Header Image */}
                                <div className="relative h-64 md:h-80 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h2 className="text-4xl font-bold text-white/20 font-geist">
                                                {project.title}
                                            </h2>
                                        </div>
                                    )}

                                    {/* Status Badge */}
                                    {project.status && (
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-sm font-geist-mono text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700">
                                                {project.status}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-8 space-y-8">
                                    {/* Title & Description */}
                                    <div className="space-y-4">
                                        <h2 className="text-3xl md:text-4xl font-bold font-geist text-neutral-900 dark:text-neutral-100">
                                            {project.title}
                                        </h2>
                                        <p className="text-lg text-neutral-600 dark:text-neutral-400 font-geist-mono">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-geist-mono text-sm hover:scale-105 transition-transform"
                                            >
                                                <IconBrandGithub className="w-5 h-5" />
                                                View Code
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg font-geist-mono text-sm hover:scale-105 transition-transform"
                                            >
                                                <IconExternalLink className="w-5 h-5" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>

                                    {/* Meta Info */}
                                    {(project.timeline || project.team) && (
                                        <div className="flex flex-wrap gap-6 text-sm">
                                            {project.timeline && (
                                                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 font-geist-mono">
                                                    <IconClock className="w-4 h-4" />
                                                    {project.timeline}
                                                </div>
                                            )}
                                            {project.team && (
                                                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 font-geist-mono">
                                                    <IconUsers className="w-4 h-4" />
                                                    {project.team}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold font-geist text-neutral-900 dark:text-neutral-100">
                                            Technologies Used
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-sm font-geist-mono border border-indigo-100 dark:border-indigo-900/30"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Long Description */}
                                    {project.longDescription && (
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-semibold font-geist text-neutral-900 dark:text-neutral-100">
                                                About This Project
                                            </h3>
                                            <p className="text-neutral-600 dark:text-neutral-400 font-geist-mono leading-relaxed whitespace-pre-line">
                                                {project.longDescription}
                                            </p>
                                        </div>
                                    )}

                                    {/* Features */}
                                    {project.features && project.features.length > 0 && (
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-semibold font-geist text-neutral-900 dark:text-neutral-100">
                                                Key Features
                                            </h3>
                                            <ul className="space-y-2">
                                                {project.features.map((feature, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 font-geist-mono"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Challenges */}
                                    {project.challenges && project.challenges.length > 0 && (
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-semibold font-geist text-neutral-900 dark:text-neutral-100">
                                                Challenges & Solutions
                                            </h3>
                                            <ul className="space-y-2">
                                                {project.challenges.map((challenge, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 font-geist-mono"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                                        {challenge}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}