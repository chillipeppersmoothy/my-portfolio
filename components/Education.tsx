"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/utils";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

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
          <div className="flex justify-center items-center">
            <motion.div
              variants={fadeIn}
              className="rounded-lg p-px bg-gradient-to-b from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mb-4"
            >
              <div className="bg-gradient-to-br from-background to-muted p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <GraduationCap className="w-10 h-10 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mb-4" />
                <h3 className="text-xl font-bold text-foreground">
                  Bachelor of Engineering
                </h3>
                <p className="text-muted-foreground">
                  NMAM Institute of Technology
                </p>
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mt-2">
                  2016-2020
                </p>
                <p className="text-muted-foreground">CGPA: 8.7</p>
              </div>
            </motion.div>
            <Image
              src="/nmamit.webp"
              alt="NMAM Institute of Technology"
              loading="lazy"
              width="500"
              height="400"
              decoding="async"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
