"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { Button } from "./ui/button";

const NAV_ITEMS = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
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
          <button>
            <Image
              src="/images/logo.webp"
              alt="logo"
              className="rounded-full"
              width="50"
              height="50"
              onClick={() => scrollToSection("home")}
            />
          </button>
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-6"
          >
            {NAV_ITEMS.map((item) => (
              <Button
                variant={"link"}
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
              </Button>
            ))}
            <ThemeToggle />
          </motion.nav>
        </div>
      </div>
    </nav>
  );
}
