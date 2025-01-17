"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/utils";
import { GraduationCap } from "lucide-react";

const EDUCATION_DATA = [
  {
    degree: "Master of Computer Science",
    school: "Tech University",
    year: "2018-2020",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60",
  },
  {
    degree: "Bachelor of Software Engineering",
    school: "Digital College",
    year: "2014-2018",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60",
  },
];

export default function Education() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-background to-muted"
      id="education"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 dark:from-purple-400 dark:to-pink-400"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <motion.div
          className="flex flex-col gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-gradient-to-br from-background to-muted p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-purple-500/20 dark:border-purple-400/20"
            >
              <edu.icon className="w-10 h-10 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-foreground">
                {edu.degree}
              </h3>
              <p className="text-muted-foreground">{edu.school}</p>
              <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mt-2">
                {edu.year}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
