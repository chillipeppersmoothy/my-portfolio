"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/utils";

type Skill = {
  name: string;
  description: string;
  proficiency: number;
};

const skills: Skill[] = [
  {
    name: "TypeScript",
    description:
      "TypeScript is my preferred language for building applications for the Web, in team settings. The type system helps me catch bugs before they happen, and the language is very expressive.",
    proficiency: 5,
  },
  {
    name: "React",
    description:
      "Extensive experience building modern web applications with React, including state management, custom hooks, and performance optimization.",
    proficiency: 5,
  },
  {
    name: "Node.js",
    description:
      "Proficient in building scalable backend services with Node.js, including REST APIs, real-time applications, and microservices.",
    proficiency: 4,
  },
  {
    name: "Python",
    description:
      "Strong foundation in Python development, particularly in data processing, automation, and building backend services.",
    proficiency: 4,
  },
  {
    name: "PostgreSQL",
    description:
      "Expert in database design, optimization, and complex queries. Experience with both traditional SQL and modern JSON capabilities.",
    proficiency: 4,
  },
  {
    name: "AWS",
    description:
      "Experienced in cloud architecture and deployment using various AWS services including EC2, S3, Lambda, and ECS.",
    proficiency: 4,
  },
  {
    name: "Docker",
    description:
      "Proficient in containerization and orchestration, creating efficient multi-stage builds and managing container lifecycles.",
    proficiency: 4,
  },
  {
    name: "GraphQL",
    description:
      "Experience in designing and implementing GraphQL APIs, including schema design and performance optimization.",
    proficiency: 3,
  },
  {
    name: "MongoDB",
    description:
      "Skilled in NoSQL database design and optimization, including aggregation pipelines and indexing strategies.",
    proficiency: 4,
  },
  {
    name: "Redis",
    description:
      "Proficient in using Redis for caching, session management, and real-time features in high-traffic applications.",
    proficiency: 3,
  },
  {
    name: "Kafka",
    description:
      "Experience with event-driven architectures and stream processing using Apache Kafka.",
    proficiency: 3,
  },
  {
    name: "gRPC",
    description:
      "Knowledge of building efficient microservices communication using gRPC and protocol buffers.",
    proficiency: 3,
  },
];

export default function TechnicalSkills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);

  return (
    <section className="relative py-20 z-10" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 dark:from-purple-400 dark:to-pink-400"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8"
        >
          <motion.div
            variants={fadeIn}
            className="relative w-full h-64 lg:w-1/2 z-10 rounded-lg p-px bg-gradient-to-b from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"
          >
            <div className="h-[253px] bg-gradient-to-br from-background to-muted p-6 rounded-lg border border-purple-500/20 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {selectedSkill.name}
                </h3>
                <p className="text-muted-foreground">
                  {selectedSkill.description}
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full ${
                      i < selectedSkill.proficiency
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="w-full lg:w-1/2 h-1/2 grid grid-cols-3 sm:grid-cols-4 gap-3 place-self-center" 
          >
            {skills.map((skill) => (  
              <motion.button
                key={skill.name}
                onMouseOver={() => setSelectedSkill(skill)}
                onClick={() => setSelectedSkill(skill)}
                className={`px-1 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedSkill.name === skill.name
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.name}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
