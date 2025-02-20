"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const HomeCarouselComp = () => {
  const photosCarousel = [
    {
      id: 1,
      url: "/Homepage/carousel_01.jpg",
    },
    {
      id: 2,
      url: "/Homepage/carousel_02.jpg",
    },
    {
      id: 3,
      url: "/Homepage/carousel_03.jpg",
    },
    {
      id: 4,
      url: "/Homepage/carousel_04.jpg",
    },
    {
      id: 5,
      url: "/Homepage/carousel_05.jpg",
    },
  ];

  return (
    <>
      <Carousel
        plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
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

export default HomeCarouselComp;
