"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LucideMenu } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navlinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Creazioni",
      path: "/creazioni",
    },
    {
      name: "Contatti",
      path: "/contatti",
    },
    {
      name: "Chi siamo",
      path: "/chi-siamo",
    },
  ];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-[2] top-0 left-0"
    >
      {/* MOBILE NAVBAR */}
      <div className="md:hidden bg-white/60 flex gap-3 justify-around items-center my-3 border w-80 h-20 mx-auto border-black rounded-3xl px-2 shadow-2xl backdrop-blur-lg">
        <Sheet>
          <div className="flex justify-between w-full mx-[20px]">
            <Link href="/">
              <Image
                className="rounded-full"
                src="/Homepage/logo.png"
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
            <SheetTrigger>
              <LucideMenu />
            </SheetTrigger>
          </div>
          <SheetContent className="w-[200px] text-2xl">
            <SheetHeader>
              <SheetTitle className="text-center text-3xl mb-5">
                Menu
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-5 justify-center items-center  border-black rounded-3xl px-2">
              {navlinks.map((l) => (
                <li key={l.path}>
                  <Link href={l.path}>
                    <SheetTrigger>{l.name}</SheetTrigger>
                  </Link>
                </li>
              ))}
              <li>
                <button className="bg-primary text-white px-1 border-2 border-accent">
                  Ordina
                </button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      {/* DESKTOP NAVBAR */}
      <ul className="md:visible text-xl bg-white/60 flex invisible gap-3 justify-around items-center my-3 border w-72 md:w-[750px] mx-auto border-black rounded-3xl p-2 backdrop-blur-lg">
        <li>
          <Link href="/">
            <Image
              className="rounded-full"
              src="/Homepage/logo.png"
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
        </li>
        {navlinks.map((l) => (
          <li key={l.path}>
            <Link className="text-2xl" href={l.path}>
              {l.name}
            </Link>
          </li>
        ))}
        <li>
          <button className="bg-primary text-white px-1 border-2 border-accent">
            Ordina
          </button>
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
