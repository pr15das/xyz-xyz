
"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

export function CarouselDemo() {
  const images = [1, 2, 3]; // Image numbers
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className={index === activeIndex ? 'block' : 'hidden'}>
            <div className="p-0">
              <Card className="h-[570px] w-[370px]">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={`/images/${image}.webp`} // Adjust the extension if needed
                    alt={`Image ${image}`}
                    className="object-cover w-[1500px] h-[520px] rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
