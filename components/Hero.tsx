"use client";

import { motion } from "framer-motion";
import About from "./About";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      id="home"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <section className="container mx-auto px-4 z-10 min-h-screen flex justify-center items-center">
          <div className="flex justify-center gap-12 py-10 w-full">
            <motion.div
              className="text-foreground flex flex-col items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h3
                className="text-2xl self-start font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <strong>Hi, my name is</strong>
              </motion.h3>
              <motion.h1
                className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 dark:from-purple-400 dark:to-pink-400 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Aditya Shenoy K
              </motion.h1>
              <motion.p
                className="text-2xl self-start mb-8 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Full Stack Developer & UI/UX Enthusiast
              </motion.p>
            </motion.div>
          </div>
        </section>
        <About />
      </div>
    </section>
  );
}
