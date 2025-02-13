import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const FOOTER_ITEMS = [
  {
    icon: Github,
    title: "GitHub",
    href: "https://github.com/chillipeppersmoothy/",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-shenoy-k-a78119178/",
  },
  {
    icon: SiLeetcode,
    title: "Leetcode",
    href: "https://leetcode.com/u/adityashenoy11/",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted z-[-1]" />
      <div className="container mx-auto pt-8 pb-2">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            {FOOTER_ITEMS.map((item, index) => (
              <Button variant="ghost" size="icon" asChild key={index}>
                <Link href={item.href} target="_blank" aria-label={item.title}>
                  <item.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Designed and Developed by Aditya Shenoy K
          </p>
        </div>
      </div>
    </footer>
  );
}
