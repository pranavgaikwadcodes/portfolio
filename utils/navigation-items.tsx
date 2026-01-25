import {
  IconBrandGithub,
  IconBrandX,
  IconBriefcase,
  IconCode,
  IconExchange,
  IconHome,
  IconMail,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export const NavigationItems = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Experience",
    icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#timeline",
  },
  {
    title: "Projects",
    icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#projects",
  },
  {
    title: "Contact",
    icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#contact",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "https://github.com/pranavgaikwadcodes",
  },
];