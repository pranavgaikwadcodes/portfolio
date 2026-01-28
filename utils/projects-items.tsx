import { IconCode, IconRocket, IconDatabase } from "@tabler/icons-react";

export interface ProjectItem {
    title: string;
    description: string;
    longDescription: string;
    header: React.ReactNode;
    icon: React.ReactNode;
    tech: string[];
    status?: string;
    github?: string;
    liveUrl?: string;
    image: string;
    features?: string[];
    challenges?: string[];
    timeline?: string;
    team?: string;
}

export const ProjectsItems: ProjectItem[] = [
    {
        title: "DataNest",
        description: "Mobile app for creating custom collections with dynamic fields",
        longDescription: `A powerful mobile application that lets users organize anything with completely customizable collections and dynamic field structures.

Built with React Native and Expo, DataNest provides a flexible data organization system where users can create collections for any purpose - from tracking books and movies to managing contacts and job applications.

The app features cloud synchronization via Supabase, PDF export capabilities, and a beautiful, intuitive interface with zero advertisements. Each collection can be personalized with colors and emojis, making organization both functional and enjoyable.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-pink-500 to-rose-600" />
        ),
        icon: <IconDatabase className="h-6 w-6 text-pink-500" />,
        tech: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Zustand", "Zod"],
        status: "Completed",
        github: "https://github.com/pranavgaikwadcodes/DataNest",
        image: "/images/projects/datanest.png",
        features: [
            "Custom collections with dynamic JSONB field structures",
            "Personalization with colors and emoji icons for each collection",
            "Cloud synchronization across devices via Supabase",
            "PDF export with beautifully formatted collection data",
            "Row Level Security ensuring users only access their own data",
            "Powerful search and sorting capabilities",
            "Favorites system to pin important collections",
            "Secure authentication with persistent sessions using AsyncStorage",
            "Complete ad-free experience"
        ],
        challenges: [
            "Implemented dynamic schema system using PostgreSQL JSONB to allow users to define any field structure",
            "Built flexible PDF generation that adapts to any collection structure with custom formatting",
            "Designed efficient state management with Zustand for offline-first experience with cloud sync",
            "Implemented Row Level Security policies in Supabase to ensure complete data isolation between users"
        ],
        timeline: "Nov 2024 - Jan 2025",
        team: "Solo Developer"
    }
];