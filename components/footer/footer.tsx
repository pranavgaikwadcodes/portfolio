"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMail,
    IconHeart,
    IconCode
} from "@tabler/icons-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navigation: [
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" }
        ],
        social: [
            {
                name: "GitHub",
                icon: <IconBrandGithub className="w-5 h-5" />,
                href: "https://github.com/pranavgaikwadcodes"
            },
            {
                name: "LinkedIn",
                icon: <IconBrandLinkedin className="w-5 h-5" />,
                href: "https://linkedin.com/in/pranav-gaikwad-a19088223"
            },
            {
                name: "Email",
                icon: <IconMail className="w-5 h-5" />,
                href: "mailto:work.pranavgaikwad@gmail.com"
            }
        ]
    };

    return (
        <footer className="relative w-full bg-neutral-900 dark:bg-black text-white border-t border-neutral-800">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-10 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold font-geist">
                            Pranav <span className="text-indigo-500">Gaikwad</span>
                        </h3>
                        <p className="text-sm text-neutral-400 font-geist-mono leading-relaxed max-w-xs">
                            Full Stack Software Engineer crafting exceptional digital experiences.
                            Always learning, always building.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-neutral-500 font-geist-mono">
                            <IconCode className="w-4 h-4" />
                            <span>Built with Next.js & Aceternity UI</span>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold font-geist">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.navigation.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-400 hover:text-indigo-500 transition-colors font-geist-mono text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-px bg-indigo-500 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold font-geist">Connect</h4>
                        <div className="flex flex-wrap gap-3">
                            {footerLinks.social.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 rounded-lg bg-neutral-800 hover:bg-indigo-600 border border-neutral-700 hover:border-indigo-500 flex items-center justify-center transition-all"
                                    title={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-sm text-neutral-500 font-geist-mono">
                            Open for opportunities and collaborations
                        </p>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8" />

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-sm text-neutral-500 font-geist-mono flex items-center gap-2">
                        © {currentYear} Pranav Gaikwad. Made with
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                        >
                            <IconHeart className="w-4 h-4 text-red-500 fill-red-500" />
                        </motion.span>
                        in India
                    </p>

                    {/* <div className="flex items-center gap-6 text-xs text-neutral-500 font-geist-mono">
                        <Link href="/privacy" className="hover:text-indigo-500 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-indigo-500 transition-colors">
                            Terms of Use
                        </Link>
                    </div> */}
                </motion.div>
            </div>
        </footer>
    );
}