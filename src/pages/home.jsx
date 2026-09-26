import { motion } from "framer-motion";
// 1. Make sure to import Link at the very top of your file
import { Link } from "react-router-dom";
import DownloadButton from "../components/downloadbutton"; // Assuming you still have this

export default function Home() {
  // Staggered animation variants for smooth text loading
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Modern Gradient Orbs (Replaces Background Images) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content Column */}
        <motion.div
          className="flex flex-col gap-6 text-white w-full md:w-2/3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <div className="h-[2px] w-12 bg-blue-500"></div>
            <span className="text-blue-400 font-mono tracking-widest text-sm uppercase">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Roshan Devassy
            </span>
          </motion.h1>

          <motion.h3
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mt-4"
          >
            A passionate{" "}
            <strong className="text-white font-medium">
              MERN Stack Developer
            </strong>{" "}
            crafting seamless, high-performance web applications from front to
            back.
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex gap-4 items-center"
          >
            <DownloadButton />
            <Link
              to="/projects"
              className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-300"
            >
              View My Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Optional Right Column for a minimalist geometric element or photo */}
        <motion.div
          className="hidden md:flex w-1/3 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          {/* Abstract rotating shape as a stylish filler if you have no image */}
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <span className="font-mono text-4xl text-white/50">{"</>"}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
