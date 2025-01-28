"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
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
                className="text-xl self-start mb-8 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Full Stack Developer & UI/UX Enthusiast
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 z-10 pb-5 pt-20" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-72 h-72 mx-auto">
                <div className="absolute inset-0 rounded-full">
                  <Image
                    src="/images/logo.webp"
                    alt="Profile"
                    width="400"
                    height="400"
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="absolute inset-0 rounded-full overflow-hidden p-2">
                  <Image
                    src="/images/aditya.png"
                    alt="Profile"
                    width="300"
                    height="300"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 text-foreground"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 dark:from-purple-400 dark:to-pink-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About me
              </motion.h2>
              <motion.p
                className="text-xl mb-8 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Passionate about creating beautiful and functional web
                experiences. With expertise in modern web technologies and a
                keen eye for design, I bring ideas to life through clean code
                and intuitive interfaces.
              </motion.p>
              <motion.p
                className="text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Passionate about creating beautiful and functional web
                experiences. With expertise in modern web technologies and a
                keen eye for design, I bring ideas to life through clean code
                and intuitive interfaces.
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button className="px-6 py-3 text-primary rounded-full font-semibold btn-grd">
                  View Resume
                </button>
                <button
                  className="px-6 py-3 text-primary rounded-full font-semibold btn-grd"
                  onClick={() => scrollToSection("getInTouch")}
                >
                  Contact Me
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
