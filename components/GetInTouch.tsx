"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, User } from "lucide-react";
import { fadeIn, staggerContainer } from "../lib/utils";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    title: "Email",
    content: "adityashenoy11@gmail.com",
    href: "mailto:adityashenoy11@gmail.com",
  },
  {
    icon: Calendar,
    title: "Availability",
    content: "Mon-Sat, 9AM-6PM",
  },
  {
    icon: User,
    title: "Social",
    content: "@johndeveloper",
  },
];

export default function GetInTouch() {
  return (
    <section className="py-20 bg-white" id="getInTouch">
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
          {CONTACT_ITEMS.map((item, index) => (
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
  );
}
