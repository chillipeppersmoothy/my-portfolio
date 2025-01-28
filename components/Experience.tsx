"use client";

import { fadeIn, staggerContainer } from "../lib/utils";
import { motion } from "framer-motion";

const EXPERIENCE_DATA = [
  {
    year: "2024-present",
    title: "Senior Software Engineer",
    company: "Accenture",
    description: "Led development of enterprise applications",
  },
  {
    year: "2022-2024",
    title: "Software Analyst",
    company: "Accenture",
    description: "Built scalable web applications",
  },
  {
    year: "2021-2022",
    title: "Associate Software Engineer",
    company: "Accenture",
    description: "Created responsive web interfaces",
  },
];

export default function Experience() {
  return (
    <section
      className="relative py-20 bg-black z-10 bg-gradient-to-br from-background to-muted"
      id="experience"
    >
      <div className="absolute inset-0  bg-gradient-to-br from-background to-muted z-[-1]" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 dark:from-purple-400 dark:to-pink-400"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600"></div>

          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {EXPERIENCE_DATA.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-1/2 pr-8 pl-8">
                  <div className="rounded-lg card">
                    <div
                      className={`bg-gradient-to-br from-background to-muted p-6 rounded-lg shadow-lg ${
                        index % 2 === 0 ? "text-right" : ""
                      }`}
                    >
                      <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 font-semibold">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mt-1 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {item.company}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-full border-4 border-background"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
