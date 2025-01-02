"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsappBtn = () => {
  return (
    <motion.div
    whileHover={{scale: 1.1}}
    whileTap={{scale: 0.9}}
    className="fixed w-[50px] bg-green-500 rounded-full p-2  bottom-3 right-[10px] md:right-[190px]">
      <Link target="_blank" href="https://wa.me/393516704649">
        <Image src="/Homepage/wa_icon.svg" width={50} height={50} alt="wa_icon" />
      </Link>
    </motion.div>
  );
};

export default WhatsappBtn;
