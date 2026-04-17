"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "Product Manager",
    avatar: "/images/7.png",
    rating: 5,
    content: "This platform transformed our workflow! The automation features saved us countless hours.and the support team is fantastic!  ",
  },
  {
    name: "Sophia Collins",
    role: "Cybersecurity Analyst",
    avatar: "/images/6.png",
    rating: 5,
    content: "I can’t imagine running my business without this tool. The insights from the analytics have helped us make smarter decisions.",
  },
  {
    name: "Adam Johnson",
    role: "CTO",
    avatar: "/images/5.png",
    rating: 5,
    content:"The training sessions were invaluable. Our team is now fully equipped to utilize all the features effectively!",
  },
  { name: "Isabella Reed",
    role: "DevOps Engineeer",
    avatar:"/images/6.png",
    rating: 5,
    content:"I love the customization capabilities. It feels like this platform was built just for our business needs!"
  },
  { name: "Ava Mitchell", 
    role: "IT project Manager", 
    avatar:"/images/4.png", 
    rating: 5,
    content:"The customer support is top-notch. They’ve been there for us every step of the way, ensuring everything runs smoothly." 
  },
]

export function TestimonialCarousel() {
  return (
    <div className="relative max-w-[90%] ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        
        className="w-full"
      >
        <CarouselContent className="flex gap-4">
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                     <Star
                      key={i}
                      className={
                        i < item.rating
                        ? "size-4 fill-yellow-600 text-yellow-600"
                        : "size-4 text-gray-300"
                      }
                     />
                     ))}
                    </div>
                  {/* Content */}
                  <p className="text-md font-semibold text-black dark:text-muted-foreground">
                    {item.content}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-4 mt-auto">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={60}
                      height={40}
                      className="rounded-full mt-4"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.role}
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-6" />
        <CarouselNext className="-right-6" />
      </Carousel>
    </div>
  )
}