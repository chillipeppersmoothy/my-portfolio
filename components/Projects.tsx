"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Code2, Globe2, Laptop } from "lucide-react";
import { fadeIn, staggerContainer } from "../lib/utils";

type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: any;
  image: string;
  longDescription: string;
  features: string[];
  demoUrl: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    tech: ["Next.js", "Node.js", "MongoDB"],
    icon: Laptop,
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60",
    longDescription:
      "A comprehensive e-commerce platform built with modern technologies. This solution provides a seamless shopping experience with features like real-time inventory management, secure payments, and an intuitive admin dashboard.",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Order management system",
      "Admin dashboard for inventory management",
    ],
    demoUrl: "https://ecommerce-demo.example.com",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses",
    tech: ["React", "Python", "TensorFlow"],
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=60",
    longDescription:
      "An innovative chat application that combines real-time communication with AI-powered responses. The system uses natural language processing to provide intelligent responses and assist users in their conversations.",
    features: [
      "Real-time messaging",
      "AI-powered chat suggestions",
      "Message history and search",
      "User presence indicators",
      "File sharing capabilities",
    ],
    demoUrl: "https://ai-chat.example.com",
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio creator for developers",
    tech: ["Vue.js", "Firebase", "Tailwind"],
    icon: Globe2,
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
    longDescription:
      "A powerful tool that helps developers create stunning portfolios with minimal effort. Users can customize their portfolio's appearance, add projects, and showcase their skills through an intuitive interface.",
    features: [
      "Customizable templates",
      "Real-time preview",
      "SEO optimization",
      "Analytics dashboard",
      "Custom domain support",
    ],
    demoUrl: "https://portfolio-gen.example.com",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      className="py-20 bg-gradient-to-br from-background to-muted"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 dark:from-purple-400 dark:to-pink-400"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group bg-gradient-to-br from-background to-muted rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border border-purple-500/20 dark:border-purple-400/20"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <project.icon className="w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-400/10 dark:to-pink-400/10 text-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl bg-gradient-to-br from-background to-muted">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-lg mt-2 text-muted-foreground">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="relative h-64 w-full mt-4">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  About the Project
                </h4>
                <p className="text-muted-foreground">
                  {selectedProject.longDescription}
                </p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  Key Features
                </h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-400/10 dark:to-pink-400/10 text-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition"
                >
                  View Live Demo
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
