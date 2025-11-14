"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-start pt-0 items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/herobg.png)" }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <motion.h1
          className="text-6xl mt-40 md:mt-10 md:text-[13vw] font-extrabold yellow tracking-tighter uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Vous etes la ?
        </motion.h1>
        <motion.div
          className="w-full text-xl md:text-[4.4rem] justify-between flex font-extrabold yellow uppercase md:-mt-10 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h2> IA check </h2>
          <h2>tes contacts</h2>
        </motion.div>
      </motion.div>

      <motion.p
        className="mt-auto yellow font-extrabold text-xl md:text-3xl max-w-md text-center mb-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        Importe tes contacts et laisses Athena vérifier ton repertoire.
      </motion.p>
    </div>
  );
};

export default Hero;
