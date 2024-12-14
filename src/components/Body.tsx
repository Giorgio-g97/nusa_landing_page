"use client";
import Image from "next/image";
import React from "react";
import Carousel from "./CarouselComp";
import { color, motion, Variants } from "framer-motion";

const Body = () => {
  const bodyVariants: Variants = {
    offscreenTitle: { x: -30, opacity: 0 },
    onscreenTitle: { x: 0, opacity: 1, transition: { duration: 0.7 } },
    offscreenHr: { opacity: 0, x: 35 },
    onscreenHr: { opacity: 1, x: 0, transition: { duration: 0.9 } },
    offscreenBody: { opacity: 0, x: -15 },
    onscreenBody: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="mt-[400px] md:mt-32">
      {/* CREAZIONI ARTIGIANALI */}
      <div className="grid md:grid-cols-6">
        <div className="col-span-3 flex flex-col justify-center md:block">
          <motion.h2
            variants={bodyVariants}
            initial="offscreenTitle"
            whileInView="onscreenTitle"
            viewport={{ once: false, amount: 0.8 }}
            className="text-center md:text-left text-3xl"
          >
            L'eccellenza prende forma
          </motion.h2>
          <motion.hr
            variants={bodyVariants}
            initial="offscreenHr"
            whileInView="onscreenHr"
            viewport={{ once: false, amount: 0.8 }}
            className="border-primary mx-auto md:mx-0 border-2 w-32 mt-2"
          />
          <motion.p
            variants={bodyVariants}
            initial="offscreenBody"
            whileInView="onscreenBody"
            viewport={{ once: false, amount: 0.8 }}
            className="text-accent my-10 text-2xl text-center px-10 md:px-0 md:text-left"
          >
            Nel nostro laboratorio, legno pregiato, pelle italiana e metalli
            nobili si trasformano in creazioni uniche. Ogni pezzo nasce dalle
            mani esperte dei nostri artigiani, custodi di un'arte tramandata da
            generazioni. Materiali selezionati e lavorazioni raffinate si
            fondono per dare vita a oggetti che durano nel tempo.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mx-auto text-2xl md:mx-0 p-1 bg-primary text-white border-2 border-accent"
          >
            Le nostre creazioni
          </motion.button>
        </div>
        <motion.div
          className="col-span-3 mt-10 md:mt-0"
          whileTap={{ scale: 1.5 }}
        >
          <Image
            src="/hero_remove_bg.png"
            width={1280}
            height={768}
            alt="hero_image"
          />
        </motion.div>
      </div>
      {/* PERSONALIZZAZIONI */}
      <div className="mt-20">
        <motion.h2
          variants={bodyVariants}
          initial="offscreenTitle"
          whileInView="onscreenTitle"
          viewport={{ once: false }}
          className="text-3xl text-center"
        >
          Il tuo messaggio, impresso per sempre
        </motion.h2>
        <motion.hr
          variants={bodyVariants}
          initial="offscreenHr"
          whileInView="onscreenHr"
          viewport={{ once: false }}
          className="border-primary border-2 w-48 mx-auto mt-2"
        />
        <motion.p
          variants={bodyVariants}
          initial="offscreenBody"
          whileInView="onscreenBody"
          viewport={{ once: false, amount: 0.8 }}
          className="text-accent text-2xl my-10 mx-10 text-center"
        >
          Rendi unica la tua creazione con la nostra incisione a caldo
          personalizzata. Nomi, date, frasi significative: ogni dettaglio viene
          impresso con maestria sulla superficie, creando un ricordo indelebile
          del tuo momento speciale. Un tocco personale che trasforma ogni
          oggetto in un pezzo irripetibile.
        </motion.p>
      </div>
      <Carousel />

      {/* SPEDIZIONI */}
      <div className="mt-20 grid md:grid-cols-6">
        <div className="col-span-3 md:order-2">
          <motion.h2
            variants={bodyVariants}
            initial="offscreenTitle"
            whileInView="onscreenTitle"
            viewport={{ once: false, amount: 0.8 }}
            className="text-center md:text-right text-3xl"
          >
            Dal nostro laboratorio a casa tua
          </motion.h2>
          <motion.hr
            variants={bodyVariants}
            initial="offscreenHr"
            whileInView="onscreenHr"
            viewport={{ once: false }}
            className="border-primary md:mx-0 mx-auto border-2 w-32 mt-2 flex md:float-right"
          />
          <motion.p
            variants={bodyVariants}
            initial="offscreenBody"
            whileInView="onscreenBody"
            viewport={{ once: false, amount: 0.8 }}
            className="text-accent text-2xl my-10 text-center px-10 md:px-0 md:text-right"
          >
            Curiamo ogni aspetto della consegna come se fosse per noi stessi.
            Imballaggi protettivi premium, spedizione assicurata e tracciamento
            in tempo reale per ogni ordine. Consegniamo in tutta Italia,
            garantendo che le tue creazioni arrivino perfette come appena uscite
            dal nostro laboratorio.
          </motion.p>

          <div className="flex justify-center my-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:float-end text-2xl md:mx-0 p-1 bg-primary text-white border-2 border-accent"
            >
              Contattaci
            </motion.button>
          </div>
        </div>
        <div className="w-[350px] h-[350px] overflow-hidden mx-auto block col-span-3 border border-black  rounded-lg md:order-1">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2, backgroundColor: "#000000"  }}
            whileTap={{ scale: 1.1 }}
          >
            <Image
              src="/shipping_01.jpg"
              width={350}
              height={350}
              alt="spedizioni"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Body;
