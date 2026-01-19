"use client";

import { FlipWords } from "../ui/flip-words";
import Image from 'next/image';

let words = ["build",
    "ship",
    "scale"];


export default function HeroSection() {
    return (
        <>
            <div className="h-screen flex items-center justify-between">
                <div className="h-full flex flex-col items-start justify-center space-y-8">
                    <div>
                        <div className="space-y-4 font-geist-mono">
                            <div id="name" className="flex space-x-6 items-baseline">
                                <span className="font-semibold text-2xl">Hey, I'm</span>
                                <span className={`font-bold text-6xl text-indigo-500 font-geist`}>Pranav Gaikwad</span>
                            </div>
                            <div id="title" className="flex text-4xl font-semibold">
                                <span>I</span>
                                <FlipWords words={words} className={'text-indigo-500 ml-4'} />
                                <span>Products that matters</span><span className="text-indigo-500">.</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                            Let's Connect
                        </button>
                    </div>
                </div>
                <div>
                    <Image src="/images/Pranav.jpg" alt="Profile Picture" width={400} height={400} className="rounded-xl overflow-hidden shadow-lg" />
                </div>
            </div>
        </>
    );
}