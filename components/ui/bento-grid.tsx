"use client";

import { cn } from "@/lib/utils";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[22rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  tech,
  status,
  github,
  liveUrl,
  onClick,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  tech?: string[];
  status?: string;
  github?: string;
  liveUrl?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl overflow-hidden cursor-pointer",
        className,
      )}
    >
      {/* Header/Image */}
      <div className="relative overflow-hidden">
        {header}
        {/* Status Badge */}
        {status && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-xs font-geist-mono text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700">
              {status}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        {/* Icon & Title */}
        <div className="flex items-start gap-3">
          <div className="mt-1 transition-transform duration-300 group-hover/bento:scale-110">
            {icon}
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="font-bold font-geist text-neutral-800 dark:text-neutral-200 group-hover/bento:text-indigo-500 dark:group-hover/bento:text-indigo-400 transition-colors">
              {title}
            </h3>
            <p className="text-xs font-geist-mono text-neutral-600 dark:text-neutral-400 line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tech.slice(0, 4).map((item) => (
              <span
                key={item}
                className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded text-xs font-geist-mono border border-indigo-100 dark:border-indigo-900/30"
              >
                {item}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="px-2 py-0.5 text-xs font-geist-mono text-neutral-500 dark:text-neutral-400">
                +{tech.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Action Buttons */}
        {(github || liveUrl) && (
          <div className="flex gap-2 pt-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-32 flex items-center justify-center gap-2 px-3 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg text-xs font-geist-mono transition-all duration-200 hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <IconBrandGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-32 flex items-center justify-center gap-2 px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-xs font-geist-mono transition-all duration-200 hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <IconExternalLink className="w-4 h-4" />
                <span>View Live</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Hover Indicator */}
      <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover/bento:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};