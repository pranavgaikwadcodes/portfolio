"use client";

import { motion } from "framer-motion";
import {
    IconMail,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMapPin,
    IconSend,
    IconClock
} from "@tabler/icons-react";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '896ba458-8cf6-4a73-856d-272767f90fa7', // Get from web3forms.com
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            alert('Error sending message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <IconMail className="w-6 h-6" />,
            label: "Email",
            value: "work.pranavgaikwad@gmail.com",
            href: "mailto:work.pranavgaikwad@gmail.com",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <IconMapPin className="w-6 h-6" />,
            label: "Location",
            value: "Pune, Maharashtra, IN",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <IconClock className="w-6 h-6" />,
            label: "Response Time",
            value: "Within 24 hours",
            color: "from-orange-500 to-amber-500"
        }
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: <IconBrandGithub className="w-6 h-6" />,
            href: "https://github.com/pranavgaikwadcodes",
            color: "hover:bg-neutral-800"
        },
        {
            name: "LinkedIn",
            icon: <IconBrandLinkedin className="w-6 h-6" />,
            href: "https://linkedin.com/in/pranav-gaikwad-a19088223",
            color: "hover:bg-blue-600"
        }
    ];

    return (
        <div id="contact" className="relative w-full h-screen py-20 bg-neutral-50 dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Section Header */}
                <div className="space-y-4 mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold font-geist"
                    >
                        Let's <span className="text-indigo-500">Connect</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-geist-mono max-w-2xl mx-auto"
                    >
                        Have a project in mind or just want to chat? Drop me a message!
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative"
                                >
                                    {info.href ? (
                                        <a href={info.href} className="block">
                                            <div className="flex items-center gap-4 p-5 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10">
                                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center text-white`}>
                                                    {info.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-geist-mono text-neutral-500 dark:text-neutral-400">
                                                        {info.label}
                                                    </p>
                                                    <p className="text-base font-geist font-semibold text-neutral-900 dark:text-neutral-100">
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-4 p-5 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center text-white`}>
                                                {info.icon}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-geist-mono text-neutral-500 dark:text-neutral-400">
                                                    {info.label}
                                                </p>
                                                <p className="text-base font-geist font-semibold text-neutral-900 dark:text-neutral-100">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                        >
                            <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 font-geist">
                                Find me on
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-14 h-14 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 transition-all ${social.color}`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-geist-mono font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all font-geist"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-geist-mono font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all font-geist"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-geist-mono font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all font-geist resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold font-geist flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-indigo-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <IconSend className="w-5 h-5" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}