import { HammerIcon, LetterTextIcon, TruckIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Parallelograms = () => {
  return (
    <div className="absolute top-[320px] md:top-[350px] w-full flex flex-col md:flex-row gap-5 md:gap-20 items-center justify-center text-3xl">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[150px] md:h-[250px] flex justify-center items-center"
      >
        <Image
          className="rotate-90 md:rotate-0"
          src="/parallelogramma.svg"
          width={150}
          height={150}
          alt="parallelogram"
        />

        <div className="absolute flex flex-col items-center justify-center gap-3">
          <HammerIcon className="bg-white p-1 w-[50px] h-[50px] rounded-full" />
          <h2 className="text-center text-white">Creazioni artigianali</h2>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[150px] md:h-[250px] flex justify-center items-center"
      >
        <Image
          className="rotate-90 md:rotate-0"
          src="/parallelogramma_2.svg"
          width={150}
          height={150}
          alt="parallelogram"
        />
        <div className="absolute flex flex-col items-center justify-center gap-5">
          <LetterTextIcon className="bg-white p-1 w-[50px] h-[50px] rounded-full" />
          <h2 className="text-center text-2xl">Personalizzazioni</h2>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[150px] md:h-[250px] flex justify-center items-center"
      >
        <Image
          className="rotate-90 md:rotate-0"
          src="/parallelogramma.svg"
          width={150}
          height={150}
          alt="parallelogram"
        />
        <div className="absolute flex flex-col items-center justify-center gap-3">
          <TruckIcon className="bg-white p-1 w-[50px] h-[50px] rounded-full" />
          <h2 className="text-center text-white">Spedizioni</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Parallelograms;
