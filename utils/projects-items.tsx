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
    },
    {
        title: "AI-Agent-ToDo-App",
        description: "CLI-based AI agent with natural language database interactions",
        longDescription: `An intelligent command-line todo application where users interact with their database using natural language through an AI agent.

Built with local LLM integration via Ollama, the agent understands user intent and automatically translates natural language commands into database operations. Users can manage todos conversationally without writing any SQL or remembering specific commands.

The system uses function calling to execute CRUD operations, maintains conversation context, and provides a seamless chat-like interface for database management. All processing happens locally with the qwen2.5:3b model running through Ollama.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-amber-500 to-orange-600" />
        ),
        icon: <IconCode className="h-6 w-6 text-amber-500" />,
        tech: ["JavaScript", "Node.js", "Drizzle ORM", "PostgreSQL", "Docker", "OpenAI SDK", "Ollama"],
        status: "Completed",
        github: "https://github.com/pranavgaikwadcodes/AI-Agent-ToDo-App",
        image: "/images/projects/ai-agent-todo.png",
        features: [
            "Natural language command processing with local LLM (qwen2.5:3b via Ollama)",
            "Function calling architecture for automated tool selection and execution",
            "Complete CRUD operations through conversational interface",
            "Intelligent search with fuzzy matching using SQL ILIKE queries",
            "Contextual conversation memory across multiple interactions",
            "JSON-structured responses ensuring reliable parsing and execution",
            "Bulk operations support (mark all completed, delete all)",
            "Multi-parameter function handling for complex updates"
        ],
        challenges: [
            "Designed robust JSON response format to handle both conversational responses and function calls",
            "Implemented conversation context management to maintain state across user interactions",
            "Built flexible parameter parsing system to handle single and multi-parameter functions from string inputs",
            "Created error handling flow that feeds function errors back to AI for user-friendly explanations",
            "Integrated OpenAI SDK with local Ollama server for completely offline AI processing"
        ],
        timeline: "Jan 2025",
        team: "Solo Developer"
    },
    {
        title: "Central Assessment Program",
        description: "Comprehensive educational assessment management system",
        longDescription: `A transformative platform designed to streamline the educational assessment process from paper assignment to evaluation and payment processing.

Built with the MERN stack, CAP simplifies exam paper-checking workflows for educational institutions by providing secure examiner registration, automated paper allocation, quality control through moderation systems, and integrated payment processing.

The platform ensures data security through robust encryption and digital signatures, while real-time updates via WebSocket provide complete transparency in the evaluation process. Designed for scalability and accessibility, CAP handles the evolving needs of educational institutions with enterprise-grade reliability.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-teal-500 to-cyan-600" />
        ),
        icon: <IconDatabase className="h-6 w-6 text-teal-500" />,
        tech: ["React.js", "Tailwind", "Node.js", "Express.js", "MongoDB", "JWT", "Figma"],
        status: "Completed",
        github: "https://github.com/pranavgaikwadcodes/CentralAssessmentProgram",
        liveUrl: "https://wondrous-toffee-21aa4a.netlify.app/",
        image: "/images/projects/cap.png",
        features: [
            "User-centric examiner registration and verification system",
            "Automated paper assignment to qualified educators",
            "Real-time evaluation progress tracking via WebSocket technology",
            "Moderation system for quality control and standardization",
            "Integrated secure payment gateway for examiner compensation",
            "Digital evaluation workflow reducing human error and time commitment",
            "Robust encryption and digital signatures for data security",
            "JWT-based authentication and authorization",
            "Load balancing for optimal performance across multiple servers",
            "Comprehensive accessibility standards for inclusive usage"
        ],
        challenges: [
            "Implemented WebSocket technology for real-time updates ensuring transparency in evaluation status",
            "Designed secure digital signature system to protect evaluation integrity and prevent tampering",
            "Built scalable paper assignment algorithm to match examiners with appropriate papers based on qualifications",
            "Integrated payment gateway with proper security measures for financial transactions",
            "Created load balancing architecture to distribute traffic efficiently across servers",
            "Ensured compliance with legal and ethical standards for educational data handling"
        ],
        timeline: "Research Project",
        team: "Academic Team"
    },
    {
        title: "EV Charging Station Locator",
        description: "Cross-platform app for finding and booking EV charging stations",
        longDescription: `A comprehensive mobile application designed to help electric vehicle owners locate nearby charging stations, check real-time availability, and pre-book charging slots with integrated payment processing.

Built with Flutter for seamless cross-platform compatibility on both Android and iOS, the app leverages Google Maps integration for location services and Firebase for real-time data synchronization and user authentication.

The application streamlines the EV charging experience by providing live station status updates, advance slot booking capabilities, and secure payment processing through Razorpay, making electric vehicle charging more convenient and predictable for users.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-emerald-500 to-green-600" />
        ),
        icon: <IconRocket className="h-6 w-6 text-emerald-500" />,
        tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "Razorpay", "Cloud Firestore", "GetX"],
        status: "Completed",
        github: "https://github.com/pranavgaikwadcodes/ev_charging_station",
        image: "/images/projects/ev-charging.png",
        features: [
            "Real-time charging station locator with Google Maps integration",
            "Live availability and status updates for nearby charging stations",
            "Advance slot pre-booking system to reserve charging times",
            "Integrated Razorpay payment gateway for seamless transactions",
            "Firebase Authentication for secure user sign-up and sign-in",
            "Cloud Firestore for real-time data synchronization across devices",
            "User rating and review system for charging stations",
            "Geolocation services for automatic nearby station detection",
            "Intuitive onboarding experience with smooth page transitions",
            "GetX state management for efficient app performance"
        ],
        challenges: [
            "Implemented real-time station availability tracking using Cloud Firestore listeners",
            "Integrated Google Maps with custom markers for charging station visualization",
            "Built slot booking system with conflict prevention to avoid double bookings",
            "Integrated Razorpay payment gateway with proper error handling and transaction verification",
            "Designed offline-first architecture using GetStorage for persistent local data",
            "Optimized geolocation queries to efficiently find nearest stations based on user location"
        ],
        timeline: "Sep 2023 - Nov 2023",
        team: "Solo Developer"
    },
    {
        title: "Hand Gesture Snake Game",
        description: "Classic snake game controlled by hand gestures using computer vision",
        longDescription: `An innovative take on the classic snake game where players control the snake using hand gestures detected through a webcam, eliminating the need for keyboard or mouse input.

Built with Python and OpenCV, the game uses MediaPipe-based hand tracking to detect the player's index finger position in real-time. The snake follows the finger movements, creating an immersive and interactive gaming experience.

The application features collision detection using polygon testing algorithms, dynamic snake growth mechanics, and real-time scoring. It demonstrates practical applications of computer vision and gesture recognition in interactive entertainment.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-violet-500 to-purple-600" />
        ),
        icon: <IconCode className="h-6 w-6 text-violet-500" />,
        tech: ["Python", "OpenCV", "CVZone", "MediaPipe", "NumPy"],
        status: "Completed",
        github: "https://github.com/pranavgaikwadcodes/PythonSnakeGame",
        image: "/images/projects/snake-game.png",
        features: [
            "Hand gesture recognition using MediaPipe hand tracking module",
            "Real-time index finger position detection for snake control",
            "Dynamic snake growth system with configurable length constraints",
            "Collision detection using point-polygon testing algorithm",
            "Score tracking system with visual feedback",
            "Random food generation with boundary constraints",
            "Game over detection and restart functionality",
            "Smooth snake movement with distance-based point tracking",
            "Visual overlay of food items and score display"
        ],
        challenges: [
            "Implemented accurate collision detection using cv2.pointPolygonTest for self-intersection checks",
            "Designed smooth snake movement by calculating distances between consecutive points using Euclidean distance",
            "Built dynamic length management system that removes tail segments when exceeding allowed length",
            "Optimized hand detection with high confidence threshold (0.8) for stable gesture recognition",
            "Created responsive game reset mechanism allowing players to restart without relaunching the application"
        ],
        timeline: "Dec 2023",
        team: "Solo Developer"
    },
    {
        title: "CodePen Clone",
        description: "Browser-based code editor with live preview functionality",
        longDescription: `A lightweight web-based code playground that replicates core CodePen functionality, allowing users to write HTML, CSS, and JavaScript with instant live preview in the browser.

Built with React and CodeMirror, this clone provides a split-pane interface where developers can experiment with code and see results immediately. The application uses localStorage for persistence, enabling users to save their work locally without requiring authentication.

Perfect for quick prototyping, learning web development, or testing code snippets, this project demonstrates the fundamentals of building an interactive development environment in the browser.`,
        header: (
            <div className="flex flex-1 w-full h-full min-h-[10rem] bg-gradient-to-br from-slate-700 to-gray-900" />
        ),
        icon: <IconCode className="h-6 w-6 text-slate-500" />,
        tech: ["React", "CodeMirror", "JavaScript", "HTML5", "CSS3", "LocalStorage"],
        status: "Completed",
        github: "https://github.com/pranavgaikwadcodes/codepen-clone",
        liveUrl: "https://pranavgaikwadcodes.github.io/codepen-clone/",
        image: "/images/projects/codepen-clone.png",
        features: [
            "Real-time code editing with syntax highlighting via CodeMirror",
            "Live preview iframe that updates instantly as you type",
            "Support for HTML, CSS, and JavaScript editing in separate panes",
            "LocalStorage persistence for saving code across browser sessions",
            "Split-pane editor layout with resizable sections",
            "Clean, minimalist interface inspired by CodePen",
            "No authentication required for immediate code experimentation",
            "FontAwesome icons for intuitive UI controls"
        ],
        challenges: [
            "Implemented debounced live preview updates to prevent performance issues during rapid typing",
            "Built secure iframe sandboxing to safely execute user-written JavaScript code",
            "Created seamless code injection system combining HTML, CSS, and JS into single preview document",
            "Designed localStorage persistence layer to handle code saving and retrieval across sessions",
            "Configured CodeMirror with appropriate syntax highlighting modes for web languages"
        ],
        timeline: "Jan 2022",
        team: "Solo Developer"
    }
];