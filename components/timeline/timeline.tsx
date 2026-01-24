"use client";

import { timelineData } from "@/utils/timeline-items";
import { Timeline } from "../ui/timeline";

export default function TimelineSection() {

    return (
        <div className="relative w-full overflow-clip">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 md:px-10 pt-20 pb-10">
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold font-geist">
                        Experience <span className="text-indigo-500">&</span> Education
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-geist-mono max-w-2xl">
                        A timeline of growth, learning, and impact
                    </p>
                </div>
            </div>

            <Timeline data={timelineData} />
        </div>
    );
}