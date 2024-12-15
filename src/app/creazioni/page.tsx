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
      url: "https://scontent.fbri4-1.fna.fbcdn.net/v/t39.30808-6/468334056_954089240086065_394260742049919673_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0MXGhqBFrF8Q7kNvgEcTGqf&_nc_zt=23&_nc_ht=scontent.fbri4-1.fna&_nc_gid=AIbxpAtYc5MzfCAQXFDzSVd&oh=00_AYBMKS4ZKlbHETd5qPy0PwtTR7HYI2epn6P7-6pVGz7t7Q&oe=6764BB0E",
    },
    {
      id: 2,
      url: "https://scontent.fbri4-1.fna.fbcdn.net/v/t39.30808-6/453097258_870601845101472_2713369831432905264_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oMiWaQ0HMFsQ7kNvgHd4OW6&_nc_zt=23&_nc_ht=scontent.fbri4-1.fna&_nc_gid=AvMDO7CyB4ONJsCsVVGFx0q&oh=00_AYAni9GOKutrMfexkKQh7jzg9GHydrnZpcq2i5AeIcPjzw&oe=6764BDE4",
    },
    {
      id: 3,
      url: "https://scontent.fbri4-1.fna.fbcdn.net/v/t39.30808-6/370594393_673156928179299_4109517326963689921_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VmYptwvhtSQQ7kNvgGbNaNa&_nc_zt=23&_nc_ht=scontent.fbri4-1.fna&_nc_gid=Ai2iOCO2kNKVmM8fvPfeE-y&oh=00_AYATLiGAt7l2wC94M2JQgGbDPHa8xPJZOszSUfxiHJELRQ&oe=6764A5FF",
    },
    {
      id: 4,
      url: "https://scontent.fbri4-2.fna.fbcdn.net/v/t39.30808-6/358099365_658831849611807_3919121087214893418_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X71dblhhR5EQ7kNvgHdMgFD&_nc_zt=23&_nc_ht=scontent.fbri4-2.fna&_nc_gid=ASfwK1r4UH1-63y-pvXC7St&oh=00_AYAUfzXtOufnU7h4PEv4vuBfUiYzr9B2voKIKU4YDb1IQw&oe=6764A51F",
    },
    {
      id: 5,
      url: "https://scontent.fbri4-1.fna.fbcdn.net/v/t39.30808-6/358106106_658831646278494_7329177679790930503_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YRJezAfiLHoQ7kNvgEsNTJx&_nc_zt=23&_nc_ht=scontent.fbri4-1.fna&_nc_gid=AOyv1uKtDCHUh2g8bFDKkti&oh=00_AYBs_uYsJhJlRbgyJadP547js5pl0bgaqvdQPK4HWLz_kQ&oe=6764D9E6",
    },
  ];

  const battesimiPhotos = [
    {
      id: 1,
      url: "https://scontent.fbri4-2.fna.fbcdn.net/v/t39.30808-6/280557642_516161673500018_8487257977747598374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fmWfWs4Skr4Q7kNvgF4fe0g&_nc_zt=23&_nc_ht=scontent.fbri4-2.fna&_nc_gid=AORcPWvb8xa0sOsMP92IbtA&oh=00_AYAeTcQ3GcuUByURosccr8EybIpIKd6SA1avm_exzjKARg&oe=6764AC02",
    },
    {
      id: 2,
      url: "https://scontent.fbri4-1.fna.fbcdn.net/v/t39.30808-6/470214295_1112809303835249_251146984448144941_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=G_uj9oLrXzEQ7kNvgGLj8c4&_nc_zt=23&_nc_ht=scontent.fbri4-1.fna&_nc_gid=ApFI38rKqcAfeR7qvywtZnE&oh=00_AYCeeZjr56-p-ejrJFEaZEgYrAHo7yInhlMFhjbRXvYOQQ&oe=6764B660",
    },
    {
      id: 3,
      url: "https://scontent.fbri4-1.fna.fbcdn.net/v/t39.30808-6/470213252_1112549593861220_3391110410634942015_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A3AtBMjsa6kQ7kNvgHBJVoo&_nc_zt=23&_nc_ht=scontent.fbri4-1.fna&_nc_gid=A38UgsWiy0xIurw7WUwcv1W&oh=00_AYAeWgeHN9zrSvVy4SzLIHpkGi1bZc6PQYekSLspscQYCw&oe=6764B0E0",
    },
    {
      id: 4,
      url: "https://scontent.fbri4-2.fna.fbcdn.net/v/t39.30808-6/470166287_1112545330528313_4666388813296783507_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9ArqOqNvb40Q7kNvgFCx2FP&_nc_zt=23&_nc_ht=scontent.fbri4-2.fna&_nc_gid=AxEJkNo6rLGFVUl64CIf7yp&oh=00_AYAApjxPP4Fxv3rv_cUUsUmLw8CoEXvxFFNVVrqjUCniHA&oe=6764D2A7",
    },
    {
      id: 5,
      url: "https://scontent.fbri4-1.fna.fbcdn.net/v/t39.30808-6/470238387_1112543543861825_5767013693574107628_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U99wQYJUOS0Q7kNvgH_oLf0&_nc_zt=23&_nc_ht=scontent.fbri4-1.fna&_nc_gid=ACrmb6C8XwqPOkc0s2TtlLn&oh=00_AYC4clcn8bCY8EKQAtnKG86YRH1a2FsK-sb9giB6M_c1og&oe=6764BB2E",
    },
  ];

  const altriEventiPhotos = [
    {
      id: 1,
      url: "https://scontent.fbri4-1.fna.fbcdn.net/v/t39.30808-6/417514058_785052236989767_4350254436715923758_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NMclJyezXosQ7kNvgFUbKOT&_nc_zt=23&_nc_ht=scontent.fbri4-1.fna&_nc_gid=AzSJLsBVFX_Sc3AK8cTdOpB&oh=00_AYA3NeBnD4W0bL0bNR4crsJp2gSUub-73PV-Ie-W04d6lg&oe=6764D5DB",
    },
    {
      id: 2,
      url: "https://scontent.fbri4-2.fna.fbcdn.net/v/t39.30808-6/358102251_658831606278498_1682877370041442377_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5Zsohc-NmWkQ7kNvgEZ3cs6&_nc_zt=23&_nc_ht=scontent.fbri4-2.fna&_nc_gid=AP4p-adc-pcGwXqn2scQpMT&oh=00_AYDVJwISKec1VBevoQVFNRBNr_gYBc96XlziQ6X6XM7zmg&oe=6764CAB5",
    },
    {
      id: 3,
      url: "https://scontent.fbri4-2.fna.fbcdn.net/v/t39.30808-6/286110311_545870237195828_7392654180066558945_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i-RYVlKSHMcQ7kNvgE94cfY&_nc_zt=23&_nc_ht=scontent.fbri4-2.fna&_nc_gid=AbEOQds6T05lF5f6-fMSOmn&oh=00_AYCpP_hcXt3OkVPKo0EVoVBlglV7Eck8-KCWi6h_xskTKg&oe=6764C5A8",
    },
    {
      id: 4,
      url: "https://scontent.fbri4-1.fna.fbcdn.net/v/t39.30808-6/279570080_514475250335327_7442129470048610127_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pgLgK-Vuf9wQ7kNvgEs2svU&_nc_zt=23&_nc_ht=scontent.fbri4-1.fna&_nc_gid=Arha3gtAeiE94d2MvlSke1B&oh=00_AYDR5Y7KUxjjIG2yp_DTapP1DO_HUw0Gfcn6Md9_nPTo3Q&oe=6764D2A9",
    },
    {
      id: 5,
      url: "https://scontent.fbri4-1.fna.fbcdn.net/v/t1.6435-9/203946289_308087407640780_8293227234110342061_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=u_gEiKFTMTEQ7kNvgGeT6yd&_nc_zt=23&_nc_ht=scontent.fbri4-1.fna&_nc_gid=AcpyL6PtGq3dMvMo7kyZsjn&oh=00_AYCpkFE3BZDPqAJrTbRYx_eVKanUg7JbLMyTm5WMSZxvrw&oe=67865F5B",
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
