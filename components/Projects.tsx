"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { fadeIn, staggerContainer } from "../lib/utils";
import Link from "next/link";

type Project = {
  title: string;
  tech: string[];
  image: string;
  longDescription: string;
  features: string[];
  demoUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "Hired",
    tech: ["react", "shadcn", "clerk", "supabase", "tailwindcss", "typescript"],
    image: "/images/hired.png",
    longDescription:
      "Hired is a web application designed to streamline the job search process by providing users with personalized job recommendations.",
    features: [
      "Users can sign in using their email address or Google account for a seamless login experience.",
      "Browse through a diverse job listing with search and advanced filters to find relevant opportunities.",
      "Employers and recruiters can post job openings, making it easier to connect with potential candidates.",
      "Users can bookmark jobs for later and apply directly through the platform.",
      "Implemented server-side pagination to efficiently fetch job listings based on user preferences.",
    ],
    demoUrl: "https://hired-by-aditya-shenoy-k.vercel.app/",
    githubUrl: "https://github.com/chillipeppersmoothy/hired",
  },
  {
    title: "Forecast-Fusion",
    tech: ["react", "recharts", "tailwindcss", "tanstack query", "shadcn"],
    image: "/images/forecast-fusion.png",
    longDescription:
      "Forecast Fusion is a web application designed to provide users with accurate and up-to-date weather forecasts. By utilizing weather api, the platform offers comprehensive weather insights, helping users plan their activities effectively.",
    features: [
      "Fetches live weather data using an integrated Weather API, ensuring accurate and up-to-date forecasts.",
      "Utilizes Recharts to display weather trends through dynamic graphs and charts.",
      "Implemented TanStack Query for optimized API calls, reducing redundant requests and improving performance.",
      "Hosted on Vercel, ensuring fast load times and global availability.",
    ],
    demoUrl: "https://forecast-fusion-by-aditya-shenoy-k.vercel.app/",
    githubUrl: "https://github.com/chillipeppersmoothy/Forecast-Fusion",
  },
  {
    title: "Splitz",
    tech: ["react", "typescript", "tailwindcss"],
    image: "/images/splitz.png",
    longDescription:
      "Splitz is a web application designed to simplify the management of shared expenses among friends, family, or colleagues. It allows users to effortlessly track, split, and settle expenses, ensuring transparency and fairness in group financial activities. The platform is ideal for trips, shared accommodations, or any situation where multiple parties incur joint expenses.",
    features: [
      "Add, edit, and delete expenses with detailed descriptions and amounts.",
      "Automatically calculates each member's share, simplifying the settlement process.",
      "View a comprehensive history of all expenses",
      "Optimized for various devices, ensuring a seamless experience on desktops, tablets, and smartphones.",
    ],
    demoUrl: "https://splitz-by-aditya-shenoy-k.vercel.app/",
    githubUrl: "https://github.com/chillipeppersmoothy/splitz",
  },
  {
    title: "MemeScroll",
    tech: ["nextjs", "javascript", "tailwindcss"],
    image: "/images/meme-scroll.png",
    longDescription:
      "MemeScroll is a web application designed to provide users with an endless stream of memes through an intuitive infinite scrolling interface. Catering to meme enthusiasts, the platform ensures a seamless and engaging experience, allowing users to enjoy a continuous flow of humor without interruptions.",
    features: [
      "Users can browse an endless feed of memes, enhancing user engagement and satisfaction.",
      "Optimized for various devices, ensuring a consistent experience across desktops, tablets, and smartphones.",
      "Provides a theme toggle option, allowing users to switch between light and dark modes for comfortable viewing.",
      "Simplistic design focusing on content, ensuring easy navigation and an enjoyable user experience.",
    ],
    demoUrl: "https://meme-scroll-by-aditya-shenoy-k.vercel.app/",
    githubUrl: "https://github.com/chillipeppersmoothy/MemeScroll",
  },
  {
    title: "Youtube Clone",
    tech: ["html", "css", "javascript"],
    image: "/images/youtube-clone.png",
    longDescription:
      "YouTube Clone is a static web application that displays a curated list of YouTube videos. The project focuses on creating a clean and responsive user interface that mimics the YouTube homepage. When a user clicks on a video, they are redirected to the original YouTube video page for playback.",
    features: [
      "Displays a set of YouTube videos with thumbnails, titles, and brief descriptions.",
      "Clicking on any video redirects the user to the official YouTube video page.",
      "Provides a theme toggle option, allowing users to switch between light and dark modes for comfortable viewing.",
    ],
    demoUrl: "https://youtube-clone-by-aditya-shenoy-k.vercel.app/",
    githubUrl: "https://github.com/chillipeppersmoothy/youtube-clone-html",
  },
  {
    title: "My store",
    tech: ["react", "redux", "javascript", "vitest"],
    image: "/images/my-store.png",
    longDescription:
      "My Store is a web application designed to provide users with a seamless online shopping experience. The platform allows users to browse products, view detailed information, and manage their shopping cart efficiently. The application emphasizes performance and reliability, ensuring a smooth user experience.",
    features: [
      "State Management with Redux Toolkit efficiently handles application-wide state, improving performance and maintainability.",
      "100% Test Coverage with Vitest for comprehensive unit and integration tests ensure high reliability and prevent regressions.",
      "Optimized Routing with React Router v6 ensures smooth navigation between product listings and details.",
    ],
    demoUrl: "https://my-store-by-aditya-shenoy-k.vercel.app/",
    githubUrl: "https://github.com/chillipeppersmoothy/my-store",
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
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEkKSM4Mjc1NjM4PTEwPDUxMC41Nk9ROFZJSG5dYXNmUVZscWRiYWP/2wBDARUXFx4aHR4eHWNTOFNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
              className="max-w-7xl p-0 bg-gradient-to-br from-background to-muted overflow-hidden m-auto rounded-lg max-h-[75vh] overflow-y-auto"
              onPointerDownOutside={() => {
                setSelectedProject(null);
                setSelectedIndex(null);
              }}
              onEscapeKeyDown={() => {
                setSelectedProject(null);
                setSelectedIndex(null);
              }}
            >
              <div className="flex flex-col md:flex-row m-2">
                <motion.div
                  layoutId={`project-image-${selectedIndex}`}
                  className="relative w-full md:w-3/4 min-h-[200px] md:h-full p-4 md:p-8 md:pr-0"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto max-h-[60vh] md:max-h-[80vh]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0 }}
                >
                  <DialogHeader>
                    <motion.div layoutId={`project-content-${selectedIndex}`}>
                      <DialogTitle className="text-2xl font-bold text-foreground">
                        {selectedProject.title}
                      </DialogTitle>
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
                      href={selectedProject.githubUrl}
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
