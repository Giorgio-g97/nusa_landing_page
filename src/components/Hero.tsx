import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full bg-black/70 z-[-1] h-[550px]">
      <h1 className="py-48 text-center text-white text-2xl">
        Trasformiamo i momenti più preziosi in opere d'arte
      </h1>

      <Image
        className="absolute top-0 z-[-10] h-[550px] bg-cover w-full opacity-70"
        src="/hero.jpg"
        width={1080}
        height={550}
        alt="hero-section"
      />

      <div className="mx-auto absolute z-[-8] top-[450px] flex gap-3">
        <Image
          src="/parallelogramma.svg"
          width={500}
          height={500}
          alt="parallelogram"
        />
        <Image
          src="/parallelogramma_2.svg"
          width={500}
          height={500}
          alt="parallelogram"
        />
        <Image
          src="/parallelogramma.svg"
          width={500}
          height={500}
          alt="parallelogram"
        />
      </div>
    </div>
  );
};

export default Hero;
