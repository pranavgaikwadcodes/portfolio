import Image from 'next/image';

export const timelineData = [
    {
        title: "2024 – Present",
        content: (
            <div className="space-y-6">
                {/* Header with Logo */}
                <div className="flex items-center gap-4 mb-6">
                    <Image
                        src="/images/TimesupervisorLogo.png"
                        alt="Time Supervisor"
                        width={48}
                        height={48}
                        className="rounded-lg"
                    />
                    <div>
                        <h4 className="text-lg font-bold font-geist text-neutral-800 dark:text-neutral-200">
                            Full Stack Software Engineer
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-geist-mono">
                            Time Supervisor India Pvt. Ltd.
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-geist-mono">
                    Leading the development of a comprehensive multi-platform SaaS ecosystem,
                    architecting scalable solutions that seamlessly integrate web, desktop, and
                    browser extension technologies to deliver enterprise-grade time tracking and
                    productivity analytics.
                </p>

                {/* Key Highlights */}
                <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 font-geist">
                        Key Contributions
                    </h5>
                    <div className="grid gap-3">
                        {[
                            "Architecting scalable backend systems with Node.js, Prisma, PostgreSQL & TimescaleDB",
                            "Building high-performance cross-platform desktop app using Rust + Tauri",
                            "Implementing secure JWT-based authentication with granular RBAC",
                            "Developing real-time analytics APIs and interactive data visualizations",
                            "Creating browser extension for seamless activity tracking and monitoring"
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-3 items-start group">
                                <span className="text-indigo-500 mt-1 group-hover:scale-110 transition-transform">▹</span>
                                <span className="text-sm text-neutral-700 dark:text-neutral-300 font-geist-mono">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 font-geist">
                        Technology Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        {["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Node.js", "Express.js", "Prisma",
                            "PostgreSQL", "TimescaleDB", "Rust", "Tauri", "Shell Scripts", "Razorpay API", "Axios", "ZOD", "Docker", "Github Actions CI/CD", "GCP", "Postman", "Swagger-docs", "DB-Diagram"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md text-xs font-geist-mono hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400 transition-colors cursor-default border border-neutral-200 dark:border-neutral-700"
                                >
                                    {tech}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        ),
    },

    {
        title: "2023 – 2024",
        content: (
            <div className="space-y-6">
                <div>
                    <h4 className="text-lg font-bold font-geist text-neutral-800 dark:text-neutral-200 mb-2">
                        Independent Projects & Product Development
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-geist-mono">
                        Building products, solving problems, shipping solutions
                    </p>
                </div>

                {/* Projects */}
                <div className="space-y-6">
                    {/* Virtual Intern Platform */}
                    <div className="group">
                        <div className="flex items-start gap-3">
                            <span className="text-indigo-500 text-xl mt-1 group-hover:scale-110 transition-transform">●</span>
                            <div className="space-y-2 flex-1">
                                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 font-geist">
                                    Virtual Intern Platform
                                    <span className="ml-2 text-xs font-geist-mono text-neutral-500 dark:text-neutral-400">
                                        Startup Project
                                    </span>
                                </h5>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 font-geist-mono leading-relaxed">
                                    Full-stack skill development platform featuring interactive dashboards,
                                    automated assessments, certificate generation, and Razorpay payment integration.
                                    Owned product strategy and technical execution end-to-end.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Central Assessment Program */}
                    <div className="group">
                        <div className="flex items-start gap-3">
                            <span className="text-indigo-500 text-xl mt-1 group-hover:scale-110 transition-transform">●</span>
                            <div className="space-y-2 flex-1">
                                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 font-geist">
                                    Central Assessment Program
                                </h5>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 font-geist-mono leading-relaxed">
                                    MERN-based online examination platform with secure authentication,
                                    real-time monitoring, and automated evaluation systems. Reduced
                                    manual assessment overhead by ~50%.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* EV Station Finder */}
                    <div className="group">
                        <div className="flex items-start gap-3">
                            <span className="text-indigo-500 text-xl mt-1 group-hover:scale-110 transition-transform">●</span>
                            <div className="space-y-2 flex-1">
                                <h5 className="font-semibold text-neutral-800 dark:text-neutral-200 font-geist">
                                    EV Station Finder
                                    <span className="ml-2 text-xs font-geist-mono text-neutral-500 dark:text-neutral-400">
                                        Freelance
                                    </span>
                                </h5>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 font-geist-mono leading-relaxed">
                                    Flutter mobile application for real-time EV charging station discovery
                                    with live availability tracking, booking management, and payment processing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 font-geist">
                        Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "MongoDB", "Express", "Flutter", "Firebase",
                            "PHP", "MySQL", "Razorpay", "REST APIs", "Postman", "Docker", "Figma"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md text-xs font-geist-mono hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/20 dark:hover:text-indigo-400 transition-colors cursor-default border border-neutral-200 dark:border-neutral-700"
                                >
                                    {tech}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        ),
    },

    {
        title: "2021 – 2024",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-bold font-geist text-indigo-500 mb-1">
                        Bachelor of Engineering
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-geist-mono">
                        Information Technology
                    </p>
                </div>

                <div className="space-y-2.5">
                    {[
                        { label: "Institute", value: "Dr. D. Y. Patil Institute of Technology, Pimpri" },
                        { label: "CGPA", value: "8.26", highlight: true },
                        { label: "Focus", value: "Led multiple academic projects & technical initiatives" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <span className="text-indigo-500 mt-1">▹</span>
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-500 font-geist min-w-[70px]">
                                    {item.label}:
                                </span>
                                <span className={`text-sm font-geist-mono ${item.highlight ? 'text-indigo-500 font-bold' : 'text-neutral-700 dark:text-neutral-300'}`}>
                                    {item.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },

    {
        title: "2018 – 2021",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-bold font-geist text-indigo-500 mb-1">
                        Diploma in Information Technology
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-geist-mono">
                        Where it all began
                    </p>
                </div>

                <div className="space-y-2.5">
                    {[
                        { label: "Institute", value: "MIT Polytechnic, Pune" },
                        { label: "Score", value: "95.19%", highlight: true },
                        { label: "Foundation", value: "Built core programming & software development fundamentals" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <span className="text-indigo-500 mt-1">▹</span>
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-500 font-geist min-w-[70px]">
                                    {item.label}:
                                </span>
                                <span className={`text-sm font-geist-mono ${item.highlight ? 'text-indigo-500 font-bold' : 'text-neutral-700 dark:text-neutral-300'}`}>
                                    {item.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                    <p className="text-sm font-geist-mono text-neutral-700 dark:text-neutral-300 italic">
                        "The beginning of a journey that transformed curiosity into craft"
                    </p>
                </div>
            </div>
        ),
    },
];