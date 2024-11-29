import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LucideMenu } from "lucide-react";

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
    <div className="fixed w-full z-[1] top-0 left-0">
      {/* MOBILE NAVBAR */}
      <div className="md:hidden bg-white flex gap-3 justify-around items-center my-3 border w-80 h-20 mx-auto border-black rounded-3xl px-2">
        <Sheet>
          <div className="flex justify-between w-full mx-[20px]">
            <Link href="/">
              <Image src="/Logo.png" alt="logo" width={60} height={60} />
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
      <ul className="md:visible text-xl bg-white flex invisible gap-3 justify-around items-center my-3 border w-72 md:w-[750px] mx-auto border-black rounded-3xl px-2">
        <li>
          <Link href="/">
            <Image src="/Logo.png" alt="logo" width={60} height={60} />
          </Link>
        </li>
        {navlinks.map(l => (
          <li key={l.path}>
            <Link href={l.path}>
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
    </div>
  );
};

export default Navbar;
