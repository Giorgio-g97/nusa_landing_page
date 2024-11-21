import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full bg-black/70 z-[-1] mx-auto  h-[550px]">
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
    </div>
  );
};

export default Hero;
