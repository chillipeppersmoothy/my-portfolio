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
    <section className="py-20 bg-gradient-to-br from-background to-muted" id="getInTouch">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-clip-text bg-gradient-to-r from-primary to-purple-500 dark:from-purple-400 dark:to-pink-400"
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
              className="p-6 bg-gradient-to-br from-background to-muted rounded-lg text-center hover:shadow-lg transition cursor-pointer border border-purple-500/20 dark:border-purple-400/20"
            >
              <item.icon className="w-8 h-8 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.content}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}