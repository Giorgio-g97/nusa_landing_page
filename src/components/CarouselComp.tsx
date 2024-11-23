import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselComp = () => {
  const photosCarousel = [
    {
      id: 1,
      url: "/carousel_01-jpg",
    },
    {
      id: 2,
      url: "/carousel_02-jpg",
    },
    {
      id: 3,
      url: "/carousel_03-jpg",
    },
    {
      id: 4,
      url: "/carousel_04-jpg",
    },
    {
      id: 5,
      url: "/carousel_05-jpg",
    },
  ];

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {photosCarousel.map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default CarouselComp;
