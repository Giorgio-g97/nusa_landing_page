"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Creazioni = () => {
  const weddingPhotos = [
    {
      id: 1,
      url: "/Creazioni/wed_01.jpg",
    },
    {
      id: 2,
      url: "/Creazioni/wed_02.jpg",
    },
    {
      id: 3,
      url: "/Creazioni/wed_03.jpg",
    },
    {
      id: 4,
      url: "/Creazioni/wed_04.jpg",
    },
    {
      id: 5,
      url: "/Creazioni/wed_05.jpg",
    },
  ];

  const battesimiPhotos = [
    {
      id: 1,
      url: "/Battesimi/bat_01.jpg",
    },
    {
      id: 2,
      url: "/Battesimi/bat_02.jpg",
    },
    {
      id: 3,
      url: "/Battesimi/bat_03.jpg",
    },
    {
      id: 4,
      url: "/Battesimi/bat_04.jpg",
    },
    {
      id: 5,
      url: "/Battesimi/bat_05.jpg",
    },
  ];

  const altriEventiPhotos = [
    {
      id: 1,
      url: "/Altri_Eventi/altri_01.jpg",
    },
    {
      id: 2,
      url: "/Altri_Eventi/altri_02.jpg",
    },
    {
      id: 3,
      url: "/Altri_Eventi/altri_03.jpg",
    },
    {
      id: 4,
      url: "/Altri_Eventi/altri_04.jpg",
    },
    {
      id: 5,
      url: "/Altri_Eventi/altri_05.jpg",
    },
  ];

  const bodyVariants: Variants = {
    offscreenTitle: { x: -30, opacity: 0 },
    onscreenTitle: { x: 0, opacity: 1, transition: { duration: 0.7 } },
    offscreenHr: { opacity: 0, x: 35 },
    onscreenHr: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    offscreenBody: { opacity: 0, x: -20 },
    onscreenBody: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="mt-[150px] md:mx-48">
        <motion.h1
          variants={bodyVariants}
          initial="offscreenTitle"
          whileInView="onscreenTitle"
          viewport={{ once: false, amount: 0.8 }}
          className="text-center text-5xl "
        >
          Galleria Creazioni
        </motion.h1>
        <motion.hr
          variants={bodyVariants}
          initial="offscreenHr"
          whileInView="onscreenHr"
          viewport={{ once: false, amount: 0.8 }}
          className="border-primary mx-auto border-2 w-32 mt-2"
        />

        {/* MATRIMONIO */}
        <div className="my-16">
          <motion.h2
            variants={bodyVariants}
            initial="offscreenTitle"
            whileInView="onscreenTitle"
            viewport={{ once: false, amount: 0.8 }}
            className="text-center text-3xl"
          >
            Matrimoni
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Carousel
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full flex px-5 my-10"
            >
              <CarouselContent>
                {weddingPhotos.map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Image
                      className="border-black border rounded-lg h-[300px]"
                      src={`${_.url}`}
                      width={1000}
                      height={1000}
                      alt="carousel_image"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>

        {/* BATTESIMI */}
        <div className="my-16">
          <motion.h2
            variants={bodyVariants}
            initial="offscreenTitle"
            whileInView="onscreenTitle"
            viewport={{ once: false, amount: 0.8 }}
            className="text-center text-3xl"
          >
            Battesimi
          </motion.h2>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Carousel
              plugins={[Autoplay({ delay: 1750, stopOnInteraction: false })]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full flex px-5 my-10"
            >
              <CarouselContent>
                {battesimiPhotos.map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Image
                      className="border-black border rounded-lg h-[300px]"
                      src={`${_.url}`}
                      width={1000}
                      height={1000}
                      alt="carousel_image"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>

        {/* ALTRI EVENTI */}
        <div className="my-16">
          <motion.h2
            variants={bodyVariants}
            initial="offscreenTitle"
            whileInView="onscreenTitle"
            viewport={{ once: false, amount: 0.8 }}
            className="text-center text-3xl"
          >
            Altri Eventi
          </motion.h2>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Carousel
              plugins={[Autoplay({ delay: 1650, stopOnInteraction: false })]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full flex px-5 my-10"
            >
              <CarouselContent>
                {altriEventiPhotos.map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Image
                      className="border-black border rounded-lg h-[300px]"
                      src={`${_.url}`}
                      width={1000}
                      height={1000}
                      alt="carousel_image"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Creazioni;
