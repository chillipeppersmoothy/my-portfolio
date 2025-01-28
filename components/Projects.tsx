"use client";

import { motion, AnimatePresence } from "framer-motion";
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
import Link from "next/link";

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

function ProjectCard({
  project,
  index,
  setSelectedProject,
  setSelectedIndex,
}: {
  project: Project;
  index: number;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const handleClick = () => {
    setSelectedProject(project);
    setSelectedIndex(index);
  };

  return (
    <motion.div
      variants={fadeIn}
      key={index}
      className="group relative rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={handleClick}
      layoutId={`project-container-${index}`}
      initial={{ scale: 1 }}
      whileHover={{
        scale: [1, 1.1, 1.05],
        transition: {
          duration: 0.3,
          delay: 0.2,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        },
      }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative h-48 md:h-64 w-full overflow-hidden"
        layoutId={`project-image-${index}`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4">
            <span className="text-purple-400 font-bold px-4 py-2 rounded-full bg-none transition-colors">
              View Project
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-none" id="projects">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              setSelectedProject={setSelectedProject}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          ))}
        </motion.div>
      </div>
      <AnimatePresence mode="popLayout">
        {selectedProject && selectedIndex !== null && (
          <Dialog
            open={!!selectedProject}
            onOpenChange={() => {
              setSelectedProject(null);
              setSelectedIndex(null);
            }}
          >
            <DialogContent
              style={{ animation: "none" }}
              className="max-w-6xl p-0 bg-gradient-to-br from-background to-muted overflow-hidden"
              onPointerDownOutside={() => {
                setSelectedProject(null);
                setSelectedIndex(null);
              }}
              onEscapeKeyDown={() => {
                setSelectedProject(null);
                setSelectedIndex(null);
              }}
            >
              <div className="flex flex-col md:flex-row">
                <motion.div
                  layoutId={`project-image-${selectedIndex}`}
                  className="relative w-full md:w-1/2 h-64 md:h-auto p-8 pr-0"
                  exit={{ opacity: 0 }} // Force instant removal on exit
                  transition={{ duration: 0.4 }} // Remove transition delay
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 p-6 overflow-y-auto max-h-[80vh]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }} // Disable exit delay
                  transition={{ duration: 0 }} // Disable transition delay
                >
                  <DialogHeader>
                    <motion.div layoutId={`project-content-${selectedIndex}`}>
                      <DialogTitle className="text-2xl font-bold text-foreground">
                        {selectedProject.title}
                      </DialogTitle>
                      <DialogDescription className="text-lg mt-2 text-muted-foreground">
                        {selectedProject.description}
                      </DialogDescription>
                    </motion.div>
                  </DialogHeader>
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
                  <div className="mt-6 flex gap-4">
                    <Link
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-primary rounded-full font-semibold btn-grd"
                    >
                      Visit Project
                    </Link>
                    <Link
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-primary rounded-full font-semibold btn-grd"
                    >
                      View Code
                    </Link>
                  </div>
                </motion.div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
