"use client"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"

const logos = [
  {name:  "Amazon", src:"/images/amazon.png"},
  {name:  "LinkedIn",src:"/images/linkedin.jpg"} ,
  {name:  "Google", src:"/images/google.png"},
  {name:  "Apple", src:"/images/apple.png"},
  {name:  "Android", src:"/images/android.png"},
  {name:  "Acmme",src:"/images/accme.png"},
  {name:  "Shadcn",src:"/images/shadcn.png"},
  {name:  "App", src:"/images/app.png"},
]


export function CarouselSize() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  )
  const loopLogo =[...logos, ...logos]
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true, align: "start" }}
      className="w-full max-w-4xl mx-auto mt-10"
    >
      <CarouselContent>
        {loopLogo.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/3 md:basis-1/5 px-4"
          >
            <div className="flex items-center justify-center gap-3 h-16">
              
              <Image
                src={item.src}
                alt={`${item.name} logos`}
                width={30}
                height={15}
                className="object-center grayscale Opacity-60 hover:grayscale-10 Opacity-100 transition"
               
              />
             <span className="text-lg text-zinc-500">{item.name}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}