import {
  HammerIcon,
  LetterText,
  LetterTextIcon,
  PlaneIcon,
  Text,
  TextIcon,
  TruckIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full bg-black/90 z-[-1] h-[550px]">
      <h1 className="py-48 text-center text-white text-2xl">
        Trasformiamo i momenti più preziosi in opere d'arte
      </h1>

      <Image
        className="absolute top-0 z-[-10] h-[550px] object-fill w-full opacity-70 shadow-2xl"
        src="/hero.jpg"
        width={1000}
        height={1000}
        alt="hero-section"
      />

      {/* 3 PARALLELOGRAMMI SERVIZI */}
      <div className="absolute z-[-9] top-[350px] w-full flex gap-20 justify-center">
        <div className="relative flex justify-center items-center">
          <Image
            src="/parallelogramma.svg"
            width={150}
            height={150}
            alt="parallelogram"
          />
          <div className="absolute flex flex-col items-center justify-center gap-3">
            <HammerIcon className="bg-white p-1 w-[50px] h-[50px] rounded-full" />
            <h2 className="text-center text-white">Creazioni artigianali</h2>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <Image
            src="/parallelogramma_2.svg"
            width={150}
            height={150}
            alt="parallelogram"
          />
          <div className="absolute flex flex-col items-center justify-center gap-5">
            <LetterTextIcon className="bg-white p-1 w-[50px] h-[50px] rounded-full" />
            <h2 className="text-center text-sm">Personalizzazioni</h2>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <Image
            src="/parallelogramma.svg"
            width={150}
            height={150}
            alt="parallelogram"
          />
          <div className="absolute flex flex-col items-center justify-center gap-3">
            <TruckIcon className="bg-white p-1 w-[50px] h-[50px] rounded-full" />
            <h2 className="text-center text-white">Spedizioni</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
