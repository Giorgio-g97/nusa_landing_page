import Image from "next/image";
import React from "react";

const Body = () => {
  return (
    <div className="mt-[400px] md:mt-32">
      {/* CREAZIONI ARTIGIANALI */}
      <div id="creazioni" className="grid md:grid-cols-6">
        <div className="col-span-3 flex flex-col justify-center md:block">
          <h2 className="text-center md:text-left text-xl">
            L'eccellenza prende forma
          </h2>
          <hr className="border-primary mx-auto md:mx-0 border-2 w-32 mt-2" />
          <p className="text-accent my-10 text-center px-10 md:px-0 md:text-left">
            Nel nostro laboratorio, legno pregiato, pelle italiana e metalli
            nobili si trasformano in creazioni uniche. Ogni pezzo nasce dalle
            mani esperte dei nostri artigiani, custodi di un'arte tramandata da
            generazioni. Materiali selezionati e lavorazioni raffinate si
            fondono per dare vita a oggetti che durano nel tempo.
          </p>
          <button className="mx-auto md:mx-0 p-1 bg-primary text-white border-2 border-accent">
            Le nostre creazioni
          </button>
        </div>
        <Image
          className="col-span-3 mt-10 md:mt-0"
          src="/hero_remove_bg.png"
          width={3000}
          height={3000}
          alt="hero_image"
        />
      </div>
      {/* PERSONALIZZAZIONI */}
      <div className="mt-20">
        <h2 className="text-xl text-center">
          Il tuo messaggio, impresso per sempre
        </h2>
        <hr className="border-primary border-2 w-40 mx-auto mt-2" />
        <p className="text-accent my-10 mx-10 text-center">
          Rendi unica la tua creazione con la nostra incisione a caldo
          personalizzata. Nomi, date, frasi significative: ogni dettaglio viene
          impresso con maestria sulla superficie, creando un ricordo indelebile
          del tuo momento speciale. Un tocco personale che trasforma ogni
          oggetto in un pezzo irripetibile.
        </p>
      </div>
    </div>
  );
};

export default Body;
