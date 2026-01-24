import {
    IconRocket,
    IconBrain,
    IconDeviceDesktop,
    IconAppWindow,
    IconChartBar,
    IconCode,
    IconBrandReact,
} from "@tabler/icons-react";
import Image from "next/image";

// Enhanced Skeleton with gradient matching your style
const Skeleton = ({ image }: { image?: string }) => (
    <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden">
        {image ? (
            <Image
                src={image}
                alt="Project preview"
                fill
                className="object-cover"
            />
        ) : (
            <div className="w-full h-full bg-gradient-to-br from-neutral-100 via-neutral-50 to-indigo-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-indigo-950 flex items-center justify-center">
                <div className="text-neutral-300 dark:text-neutral-700">
                    <IconCode className="w-16 h-16" />
                </div>
            </div>
        )}
    </div>
);

export const ProjectsItems = [
    {
        title: "Time Supervisor Desktop",
        description: "Cross-platform activity tracking application built with Rust + Tauri. Features real-time monitoring, screen recording, and seamless cloud sync.",
        header: <Skeleton />,
        icon: <IconDeviceDesktop className="h-4 w-4 text-indigo-500" />,
        tech: ["Rust", "Tauri", "React", "TypeScript"],
        status: "In Production",
        github: "https://github.com/yourusername/timesupervisor-desktop",
        liveUrl: "https://timesupervisor.com/download",
    },
    {
        title: "Virtual Intern Platform",
        description: "Full-stack skill development platform with interactive dashboards, automated assessments, and certificate generation.",
        header: <Skeleton />,
        icon: <IconAppWindow className="h-4 w-4 text-indigo-500" />,
        tech: ["React", "Node.js", "MongoDB", "Razorpay"],
        status: "Startup Project",
        github: "https://github.com/yourusername/virtual-intern",
        liveUrl: "https://virtualintern.example.com",
    },
    {
        title: "AI Research Assistant",
        description: "Agentic AI system that autonomously researches topics, synthesizes information, and generates comprehensive reports.",
        header: <Skeleton />,
        icon: <IconBrain className="h-4 w-4 text-indigo-500" />,
        tech: ["Python", "LangGraph", "OpenAI", "Next.js"],
        status: "Experimental",
        github: "https://github.com/yourusername/ai-research-assistant",
        // No liveUrl for experimental projects
    },
    {
        title: "Central Assessment Program",
        description: "MERN-based online examination platform with secure authentication and real-time monitoring. Reduced manual assessment overhead by 50%.",
        header: <Skeleton />,
        icon: <IconChartBar className="h-4 w-4 text-indigo-500" />,
        tech: ["React", "Node.js", "MongoDB", "Express"],
        status: "Completed",
        link: "#",
    },
    {
        title: "EV Station Finder",
        description: "Flutter mobile app for locating EV charging stations with live availability tracking, booking management, and payment processing.",
        header: <Skeleton />,
        icon: <IconRocket className="h-4 w-4 text-indigo-500" />,
        tech: ["Flutter", "Firebase", "Google Maps API"],
        status: "Freelance",
        link: "#",
    },
    {
        title: "Real-Time Analytics Dashboard",
        description: "Performance monitoring dashboard with interactive visualizations, role-based access control, and automated reporting for business intelligence.",
        header: <Skeleton />,
        icon: <IconBrandReact className="h-4 w-4 text-indigo-500" />,
        tech: ["React", "PostgreSQL", "TimescaleDB", "Node.js"],
        status: "Active Development",
        link: "#",
    },
];