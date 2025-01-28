"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/utils";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="relative py-20 bg-black z-10" id="education">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted z-[-1]" />

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
          className="flex flex-col lg:flex-row gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeIn} className="w-full lg:w-1/2">
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/nmamit.webp"
                alt="NMAM Institute of Technology"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="w-full lg:w-1/2 space-y-6">
            <div>
              <GraduationCap className="w-10 h-10 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-muted-foreground mb-2">
                Bachelor of Mechanical Engineering
              </h3>
              <h4 className="text-3xl font-bold text-foreground mb-4">
                NMAM Institute of Technology
              </h4>
            </div>

            <h5 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
              2016 - 2020
            </h5>
            <h5 className="text-lg text-muted-foreground">CGPA: 8.7</h5>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
