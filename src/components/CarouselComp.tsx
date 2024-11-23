"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CarouselComp = () => {
  const photosCarousel = [
    {
      id: 1,
      url: "/carousel_01.jpg",
    },
    {
      id: 2,
      url: "/carousel_02.jpg",
    },
    {
      id: 3,
      url: "/carousel_03.jpg",
    },
    {
      id: 4,
      url: "/carousel_04.jpg",
    },
    {
      id: 5,
      url: "/carousel_05.jpg",
    },
  ];

  return (
    <>
      <Carousel
      plugins={[Autoplay({delay: 2000})]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full flex px-5 my-10"
      >
        <CarouselContent>
          {photosCarousel.map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              {/* <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    
                  </CardContent>
                </Card> */}
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
    </>
  );
};

export default CarouselComp;
