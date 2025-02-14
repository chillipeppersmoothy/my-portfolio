"use client";

import { fadeIn, staggerContainer } from "../lib/utils";
import { motion } from "framer-motion";

const EXPERIENCE_DATA = [
  {
    year: "2024-present",
    title: "Senior Software Engineer",
    company: "Accenture",
    description: `Collaborated with clients and architects to design scalable solutions, enhancing system performance by 30%
                  Worked with UI/UX designer to find the best solution for UI design.
                  Led a team of 5 engineers to develop a web application that automated Postman test conversions to Playwright, reducing manual effort by 98% and winning 1st place in the Hackathon.
                  Increased backend unit test coverage to 100% and UI coverage to 80%, improving software reliability.`,
  },
  {
    year: "2022-2024",
    title: "Software Analyst",
    company: "Accenture",
    description: `Contributed to projects in various capacities, including backend development with NodeJS, Terraform for IAC and AWS. Web GUI using ReactJS and Typescript in a fast-paced le/SCRUM environment.
                  Implemented an automation script using selenium for one of the applications resulting in a 90% reduction in time.
                  Optimized test execution by 85% by developing a Playwright-based framework, enabling concurrent policy generation.`,
  },
  {
    year: "2021-2022",
    title: "Associate Software Engineer",
    company: "Accenture",
    description: `Developed and executed manual/functional test cases and test plans for each release cycle, documenting test results and defects using Microsoft ALM and Excel.
                  Conducted manual, functional, API, regression, integration, smoke testing and provided test reports to stakeholders.
                  Worked closely with developers to reproduce and isolate issues and validate fixes before they are released to production. `,
  },
];

export default function Experience() {
  return (
    <section
      className="relative py-20 bg-black z-10 bg-gradient-to-br from-background to-muted"
      id="experience"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted z-[-1]" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 dark:from-purple-400 dark:to-pink-400"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div key={index} variants={fadeIn} className="relative">
              <div className="card backdrop-blur-sm rounded-lg p-px transition-colors shadow-lg">
                <div className="bg-gradient-to-br from-background to-muted rounded-lg p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 dark:from-purple-400 dark:to-pink-400">
                        {item.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">
                      {item.year}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {item.description.split("\n").map((desc, i) => (
                      <p
                        key={i}
                        className="text-muted-foreground leading-relaxed"
                      >
                        • {desc.trim()}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
