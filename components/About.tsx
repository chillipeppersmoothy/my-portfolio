import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = async () => {
    const link = document.createElement("a");
    link.href = "/assets/aditya-shenoy-k.pdf";
    link.setAttribute("download", "Aditya Shenoy K");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
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
                priority={true}
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
            {`I'm a passionate software engineer who thrives on building products that people love.
                My focus is on creating intuitive, visually stunning, 
                and high-impact solutions that address real-world problems.`}
          </motion.p>
          <motion.p
            className="text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I believe in shipping fast and getting products into users hands
            quickly and refining them based on feedback, rather than aiming for
            perfection from the start. This approach allows me to deliver value
            efficiently while continuously improving user experience.
          </motion.p>
          <motion.p
            className="text-muted-foreground mb-8 leading-relaxed text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {`I'm always seeking new challenges and opportunities to grow, learn, and innovate. Whether it's mastering a new technology, optimizing performance, or solving complex problems, I'm excited about the endless possibilities that lie ahead.`}
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              className="px-6 py-3 text-primary rounded-full font-semibold btn-grd"
              onClick={handleDownload}
            >
              Download Resume
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
  );
}
