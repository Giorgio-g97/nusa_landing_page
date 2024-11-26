import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between px-5 mt-10 bg-secondary border border-accent">
        <div className="flex flex-col items-center">
          <Image
            className="bg-white p-[0.5em] rounded-full m-3 shadow-2xl"
            src="/Logo.png"
            width={75}
            height={75}
            alt="logo_image"
          />
          {/* SOCIAL */}
          <div className="flex p-1">
            <Link href="https://www.facebook.com/nusacreazioni" target="_blank">
              <Facebook />
            </Link>
            <Link href="https://www.instagram.com/nusa_creazioni" target="_blank">
            <Instagram />
            </Link>
          </div>
        </div>
        <hr className="md:hidden border-primary md:mx-0 mx-auto my-3 border w-80 mt-2 flex md:float-right" />
        <div className="flex justify-center">
          <ul className="text-accent flex items-center gap-3 my-2">
            <li>
              <Link href="/creazioni">Creazioni</Link>
            </li>
            <li>
              <Link href="/contatti">Contatti</Link>
            </li>
            <li>
              <Link href="/chi-siamo">Chi siamo</Link>
            </li>
            <li>
              <button className="bg-primary text-white px-1 border-2 border-accent">
                Ordina
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center bg-primary w-full">
        <p className="flex items-center justify-center">
          © 2024 - NUSA Creazioni
        </p>
      </div>
    </div>
  );
};

export default Footer;
