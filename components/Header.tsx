"use client";

import { Laugh } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Contact",
    href: "#getInTouch",
  },
  {
    name: "Resume",
    href: "#resume",
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Laugh className="h-8 w-8 text-indigo-500 dark:text-indigo-400 animate-bounce" />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-6"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={
                  item.href
                    ? () => scrollToSection(item.href.substring(1))
                    : () => {}
                }
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.href.substring(1)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
