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
        title: "TimeSupervisor",
        description: "Comprehensive time tracking system with desktop and web components",
        longDescription: `A full-stack time tracking application designed for enterprises to monitor employee productivity and manage schedules effectively.

Built with modern technologies including React, Node.js, and Rust-based desktop application. Features real-time activity monitoring, screenshot capture, and detailed analytics dashboards.

The system handles complex role-based access control, timezone management, and provides comprehensive audit logging for compliance purposes.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-indigo-500 to-purple-600" />
        ),
        icon: <IconCode className="h-6 w-6 text-indigo-500" />,
        tech: ["React", "Node.js", "Prisma", "PostgreSQL", "Rust", "Tauri", "AWS ECS"],
        status: "In Production",
        github: "https://github.com/yourusername/timesupervisor",
        liveUrl: "https://timesupervisor.com",
        image: "/images/projects/timesupervisor.png",
        features: [
            "Real-time employee activity tracking with screenshot capture",
            "Schedule management with drag-and-drop interface",
            "Role-based access control for multi-level organizations",
            "Cross-platform desktop app (Windows, Mac, Linux)",
            "Advanced analytics and reporting dashboards",
            "Timezone-aware data handling",
            "Comprehensive audit logging for compliance"
        ],
        challenges: [
            "Implemented timezone handling to fix IST timestamp conversion issues where backend stored local time with UTC markers",
            "Resolved authentication issues with refresh token functionality by correcting cookie settings in test environments",
            "Optimized Rust screen recording with custom MP4 writer and frame pooling for memory efficiency",
            "Built file-based sync system transitioning from database to NDJSON files for desktop-to-API data upload"
        ],
        timeline: "Jan 2024 - Present",
        team: "Solo Developer"
    },
    {
        title: "E-Commerce Platform",
        description: "Modern e-commerce solution with real-time inventory",
        longDescription: `A scalable e-commerce platform featuring real-time inventory management, payment integration, and advanced search capabilities.

Implemented with Next.js for optimal performance and SEO, integrated with Stripe for secure payments, and utilizes Redis for caching.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-blue-500 to-cyan-600" />
        ),
        icon: <IconRocket className="h-6 w-6 text-blue-500" />,
        tech: ["Next.js", "TypeScript", "Stripe", "Redis", "MongoDB"],
        status: "Active Development",
        github: "https://github.com/yourusername/ecommerce",
        image: "/images/projects/ecommerce.png",
        features: [
            "Real-time inventory tracking",
            "Stripe payment integration",
            "Advanced product search and filtering",
            "Admin dashboard with analytics",
            "Order management system"
        ],
        timeline: "3 months",
        team: "2 Developers"
    },
    {
        title: "Analytics Dashboard",
        description: "Real-time data visualization platform",
        longDescription: `A comprehensive analytics dashboard for visualizing complex datasets with interactive charts and real-time updates.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-green-500 to-emerald-600" />
        ),
        icon: <IconDatabase className="h-6 w-6 text-green-500" />,
        tech: ["React", "D3.js", "WebSocket", "PostgreSQL"],
        status: "Completed",
        liveUrl: "https://analytics-demo.com",
        image: "/images/projects/analytics.png",
        features: [
            "Real-time data updates via WebSocket",
            "Interactive charts with D3.js",
            "Custom date range filtering",
            "Export to CSV/PDF"
        ],
        timeline: "2 months"
    },{
        title: "TimeSupervisor",
        description: "Comprehensive time tracking system with desktop and web components",
        longDescription: `A full-stack time tracking application designed for enterprises to monitor employee productivity and manage schedules effectively.

Built with modern technologies including React, Node.js, and Rust-based desktop application. Features real-time activity monitoring, screenshot capture, and detailed analytics dashboards.

The system handles complex role-based access control, timezone management, and provides comprehensive audit logging for compliance purposes.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-indigo-500 to-purple-600" />
        ),
        icon: <IconCode className="h-6 w-6 text-indigo-500" />,
        tech: ["React", "Node.js", "Prisma", "PostgreSQL", "Rust", "Tauri", "AWS ECS"],
        status: "In Production",
        github: "https://github.com/yourusername/timesupervisor",
        liveUrl: "https://timesupervisor.com",
        image: "/images/projects/timesupervisor.png",
        features: [
            "Real-time employee activity tracking with screenshot capture",
            "Schedule management with drag-and-drop interface",
            "Role-based access control for multi-level organizations",
            "Cross-platform desktop app (Windows, Mac, Linux)",
            "Advanced analytics and reporting dashboards",
            "Timezone-aware data handling",
            "Comprehensive audit logging for compliance"
        ],
        challenges: [
            "Implemented timezone handling to fix IST timestamp conversion issues where backend stored local time with UTC markers",
            "Resolved authentication issues with refresh token functionality by correcting cookie settings in test environments",
            "Optimized Rust screen recording with custom MP4 writer and frame pooling for memory efficiency",
            "Built file-based sync system transitioning from database to NDJSON files for desktop-to-API data upload"
        ],
        timeline: "Jan 2024 - Present",
        team: "Solo Developer"
    },
    {
        title: "E-Commerce Platform",
        description: "Modern e-commerce solution with real-time inventory",
        longDescription: `A scalable e-commerce platform featuring real-time inventory management, payment integration, and advanced search capabilities.

Implemented with Next.js for optimal performance and SEO, integrated with Stripe for secure payments, and utilizes Redis for caching.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-blue-500 to-cyan-600" />
        ),
        icon: <IconRocket className="h-6 w-6 text-blue-500" />,
        tech: ["Next.js", "TypeScript", "Stripe", "Redis", "MongoDB"],
        status: "Active Development",
        github: "https://github.com/yourusername/ecommerce",
        image: "/images/projects/ecommerce.png",
        features: [
            "Real-time inventory tracking",
            "Stripe payment integration",
            "Advanced product search and filtering",
            "Admin dashboard with analytics",
            "Order management system"
        ],
        timeline: "3 months",
        team: "2 Developers"
    },
    {
        title: "Analytics Dashboard",
        description: "Real-time data visualization platform",
        longDescription: `A comprehensive analytics dashboard for visualizing complex datasets with interactive charts and real-time updates.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-green-500 to-emerald-600" />
        ),
        icon: <IconDatabase className="h-6 w-6 text-green-500" />,
        tech: ["React", "D3.js", "WebSocket", "PostgreSQL"],
        status: "Completed",
        liveUrl: "https://analytics-demo.com",
        image: "/images/projects/analytics.png",
        features: [
            "Real-time data updates via WebSocket",
            "Interactive charts with D3.js",
            "Custom date range filtering",
            "Export to CSV/PDF"
        ],
        timeline: "2 months"
    },{
        title: "TimeSupervisor",
        description: "Comprehensive time tracking system with desktop and web components",
        longDescription: `A full-stack time tracking application designed for enterprises to monitor employee productivity and manage schedules effectively.

Built with modern technologies including React, Node.js, and Rust-based desktop application. Features real-time activity monitoring, screenshot capture, and detailed analytics dashboards.

The system handles complex role-based access control, timezone management, and provides comprehensive audit logging for compliance purposes.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-indigo-500 to-purple-600" />
        ),
        icon: <IconCode className="h-6 w-6 text-indigo-500" />,
        tech: ["React", "Node.js", "Prisma", "PostgreSQL", "Rust", "Tauri", "AWS ECS"],
        status: "In Production",
        github: "https://github.com/yourusername/timesupervisor",
        liveUrl: "https://timesupervisor.com",
        image: "/images/projects/timesupervisor.png",
        features: [
            "Real-time employee activity tracking with screenshot capture",
            "Schedule management with drag-and-drop interface",
            "Role-based access control for multi-level organizations",
            "Cross-platform desktop app (Windows, Mac, Linux)",
            "Advanced analytics and reporting dashboards",
            "Timezone-aware data handling",
            "Comprehensive audit logging for compliance"
        ],
        challenges: [
            "Implemented timezone handling to fix IST timestamp conversion issues where backend stored local time with UTC markers",
            "Resolved authentication issues with refresh token functionality by correcting cookie settings in test environments",
            "Optimized Rust screen recording with custom MP4 writer and frame pooling for memory efficiency",
            "Built file-based sync system transitioning from database to NDJSON files for desktop-to-API data upload"
        ],
        timeline: "Jan 2024 - Present",
        team: "Solo Developer"
    },
    {
        title: "E-Commerce Platform",
        description: "Modern e-commerce solution with real-time inventory",
        longDescription: `A scalable e-commerce platform featuring real-time inventory management, payment integration, and advanced search capabilities.

Implemented with Next.js for optimal performance and SEO, integrated with Stripe for secure payments, and utilizes Redis for caching.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-blue-500 to-cyan-600" />
        ),
        icon: <IconRocket className="h-6 w-6 text-blue-500" />,
        tech: ["Next.js", "TypeScript", "Stripe", "Redis", "MongoDB"],
        status: "Active Development",
        github: "https://github.com/yourusername/ecommerce",
        image: "/images/projects/ecommerce.png",
        features: [
            "Real-time inventory tracking",
            "Stripe payment integration",
            "Advanced product search and filtering",
            "Admin dashboard with analytics",
            "Order management system"
        ],
        timeline: "3 months",
        team: "2 Developers"
    },
    {
        title: "Analytics Dashboard",
        description: "Real-time data visualization platform",
        longDescription: `A comprehensive analytics dashboard for visualizing complex datasets with interactive charts and real-time updates.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-green-500 to-emerald-600" />
        ),
        icon: <IconDatabase className="h-6 w-6 text-green-500" />,
        tech: ["React", "D3.js", "WebSocket", "PostgreSQL"],
        status: "Completed",
        liveUrl: "https://analytics-demo.com",
        image: "/images/projects/analytics.png",
        features: [
            "Real-time data updates via WebSocket",
            "Interactive charts with D3.js",
            "Custom date range filtering",
            "Export to CSV/PDF"
        ],
        timeline: "2 months"
    }
];