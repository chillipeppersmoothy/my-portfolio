"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, Phone, Copy, Check } from "lucide-react";
import { fadeIn, staggerContainer } from "../lib/utils";
import { useState } from "react";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    title: "Email",
    content: "adityashenoy11@gmail.com",
  },
  {
    icon: Phone,
    title: "Mobile",
    content: "+91 8073262953",
  },
  {
    icon: Calendar,
    title: "Availability",
    content: "Mon-Sat, 9AM-10PM",
  },
];

function ContactCard({
  item,
  index,
}: {
  item: (typeof CONTACT_ITEMS)[number];
  index: number;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000); // Reset after 1 seconds
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      key={index}
      className="relative z-10 rounded-lg p-px mb-0 card"
    >
      <div className="p-6 pb-5 bg-gradient-to-br from-background to-muted rounded-lg text-center hover:shadow-lg cursor-default transition">
        <item.icon className="w-8 h-8 bg-clip-text bg-gradient-to-r from-primary to-purple-500 dark:from-purple-400 dark:to-pink-400 mx-auto mb-4" />
        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
        <div
          onClick={() => handleCopy(item.content)}
          className="flex justify-center items-center"
        >
          <p className="text-base text-muted-foreground px-3 hover:text-black hover:dark:text-white mb-[5px]">
            {item.content}
          </p>
          {isCopied ? (
            <Check
              aria-label="copied content"
              className={
                `cursor-pointer text-purple-500 dark:text-pink-400 w-6 h-6 border-[0.5px] p- rounded-sm` +
                (item.title === "Availability" ? " hidden" : "")
              }
            />
          ) : (
            <button aria-label="copy content">
              <Copy
                className={
                  `cursor-pointer text-purple-500 dark:text-pink-400 w-6 h-6 border-[0.5px] p-1 dark:border-gray-700 border-gray-200 rounded-sm hover:bg-gray-300 hover:dark:bg-gray-700` +
                  (item.title === "Availability" ? " hidden" : "")
                }
              />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function GetInTouch() {
  return (
    <section className="py-20 bg-none" id="getInTouch">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 dark:from-purple-400 dark:to-pink-400"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {CONTACT_ITEMS.map((item, index) => ContactCard({ item, index }))}
        </motion.div>
      </div>
    </section>
  );
}
