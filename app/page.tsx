"use client";

import { motion } from "framer-motion";
import { Book, Calendar, GraduationCap, Mail, User } from "lucide-react";
import Image from "next/image";
import Projects from "@/components/Projects";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Split Layout */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-800">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#e879f9)] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]"></div>
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
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-full p-2"
                />
              </div>
            </motion.div>

            {/* Gradient Separator Line */}
            <div className="hidden md:block w-px h-96 bg-gradient-to-b from-transparent via-white to-transparent opacity-30"></div>

            {/* Right side - About Content */}
            <motion.div 
              className="w-full md:w-1/2 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                John Developer
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Full Stack Developer & UI/UX Enthusiast
              </motion.p>
              <motion.p 
                className="text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Passionate about creating beautiful and functional web experiences. With expertise in modern web technologies and a keen eye for design, I bring ideas to life through clean code and intuitive interfaces.
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
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                degree: "Master of Computer Science",
                school: "Tech University",
                year: "2018-2020",
                icon: GraduationCap
              },
              {
                degree: "Bachelor of Software Engineering",
                school: "Digital College",
                year: "2014-2018",
                icon: Book
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <edu.icon className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-sm text-purple-600 mt-2">{edu.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Experience Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            <motion.div 
              className="space-y-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  year: "2023",
                  title: "Senior Developer",
                  company: "Tech Corp",
                  description: "Led development of enterprise applications"
                },
                {
                  year: "2021",
                  title: "Full Stack Developer",
                  company: "StartUp Inc",
                  description: "Built scalable web applications"
                },
                {
                  year: "2019",
                  title: "Frontend Developer",
                  company: "Design Agency",
                  description: "Created responsive web interfaces"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-1/2 pr-8 pl-8">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${
                      index % 2 === 0 ? "text-right" : ""
                    }`}>
                      <span className="text-sm text-purple-600 font-semibold">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.company}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Mail,
                title: "Email",
                content: "hello@example.com",
                href: "mailto:hello@example.com"
              },
              {
                icon: Calendar,
                title: "Availability",
                content: "Mon-Fri, 9AM-5PM"
              },
              {
                icon: User,
                title: "Social",
                content: "@johndeveloper"
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                variants={fadeIn}
                className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg text-center hover:shadow-lg transition cursor-pointer"
              >
                <item.icon className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.content}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}