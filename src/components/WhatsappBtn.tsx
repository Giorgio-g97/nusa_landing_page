import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsappBtn = () => {
  return (
    <div className="fixed bg-green-500 rounded-full p-2  bottom-3 right-[190px]">
      <Link target="_blank" href="https://wa.me/393516704649">
        <Image src="/wa_icon.svg" width={50} height={50} alt="wa_icon" />
      </Link>
    </div>
  );
};

export default WhatsappBtn;
