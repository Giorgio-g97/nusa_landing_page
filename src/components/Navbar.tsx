import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 left-0">
      <ul className="bg-white flex gap-3 justify-around items-center my-3 border w-72 md:w-96 mx-auto border-black rounded-3xl px-2">
        <li>
          <Link href="/">
            <Image src="/Logo.png" alt="logo" width={60} height={60} />
          </Link>
        </li>
        <li>Creazioni</li>
        <li>Contatti</li>
        <li>Chi siamo</li>
        <li>
          <button className="bg-primary text-white px-1 ">Ordina</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
