import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const FOOTER_ITEMS = [
  {
    icon: Github,
    title: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: Instagram,
    title: "Instagram",
    href: "https://instagram.com/yourusername",
  },
  {
    icon: Twitter,
    title: "Twitter",
    href: "https://github.com/yourusername",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50">
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
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
