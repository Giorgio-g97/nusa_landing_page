"use client";
import Image from "next/image";
import React from "react";
import Parallelograms from "./Parallelograms";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full bg-black/90 z-[-1] h-[550px]">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-40 text-center text-white text-3xl"
      >
        Trasformiamo i momenti più preziosi <br />
        in opere d'arte
      </motion.h1>

      <Image
        className="absolute top-0 z-[-1] h-[550px] object-fill w-full opacity-70 shadow-2xl"
        src="/hero.jpg"
        width={1000}
        height={1000}
        alt="hero-section"
      />

      {/* 3 PARALLELOGRAMMI SERVIZI */}
      <Parallelograms />
    </div>
  );
};

export default Hero;
