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
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 hidden md:block" />

          <motion.div
            className="space-y-8 md:space-y-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {EXPERIENCE_DATA.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 px-4 md:px-8">
                  <div className="rounded-lg p-px card">
                    <div
                      className={`bg-gradient-to-br p-6 rounded-lg shadow-lg ${
                        index % 2 === 0 ? "md:text-right" : ""
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
                </div>
                {/* Timeline dot - shown on all screens */}
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-full border-4 border-background my-4 md:my-0" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
