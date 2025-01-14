"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-800">
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#e879f9)] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]"></div>
        </div>
        <div className="flex flex-col">
          <div className="container mx-auto px-4 z-10">
            <div className="flex items-center justify-center gap-12 py-10">
              <motion.div
                className="w-full md:w-1/2 text-white"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h3
                  className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Hi, my name is
                </motion.h3>
                <motion.h1
                  className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Aditya Shenoy K
                </motion.h1>
                <motion.p
                  className="text-xl mb-8 text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Full Stack Developer & UI/UX Enthusiast
                </motion.p>
              </motion.div>
            </div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Left side - Image */}
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-72 h-72 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                  <Image
                    src="/Aditya.png"
                    alt="Profile"
                    fill
                    className="object-cover rounded-full p-2 z-10"
                  />
                </div>
              </motion.div>

              {/* Right side - About Content */}
              <motion.div
                className="w-full md:w-1/2 text-white"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h2
                  className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  About me
                </motion.h2>
                <motion.p
                  className="text-xl mb-8 text-gray-200"
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
                  className="text-gray-300 mb-8 leading-relaxed"
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
                  <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition transform hover:scale-105">
                    View Projects
                  </button>
                  <button className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition transform hover:scale-105">
                    Contact Me
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
