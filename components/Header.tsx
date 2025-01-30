"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
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
          <button
            onClick={() => scrollToSection("home")}
            className="relative w-12 h-12"
          >
            <Image
              src="/images/logo.webp"
              alt="logo"
              className="rounded-full object-cover"
              fill
              sizes="(max-width: 48px) 100vw"
              priority
            />
          </button>

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex gap-3 items-center"
          >
            {NAV_ITEMS.map((item) => (
              <Button
                variant="link"
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
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

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "fixed right-0 top-[73px] w-1/3 h-[calc(100vh-73px)] bg-background md:hidden transform transition-transform duration-200 ease-in-out border-l",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
            !isMenuOpen && "hidden"
          )}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 p-4"
          >
            {NAV_ITEMS.map((item) => (
              <Button
                variant="ghost"
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={cn(
                  "w-full justify-end text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.href.substring(1)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Button>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
