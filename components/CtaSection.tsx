"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function CtaSection() {
  return (
    <div className="from-muted to-muted/50 relative mt-12 grid grid-cols-2 justify-between gap-4 overflow-hidden rounded-lg border border-gray-200/50 bg-gradient-to-br shadow-sm lg:flex-row lg:gap-10">
      
      {/* Left */}
      <div className="flex max-w-lg flex-col gap-6 py-4 ps-4 pe-4 md:py-10 md:ps-10 md:pe-0">
        
        <h2 className="text-2xl font-bold md:text-3xl">
          Ready to Transform Your Website?
        </h2>

        <p className="text-muted-foreground md:text-lg">
          Join thousands of satisfied customers who have optimized their
          websites and boosted conversions with Metro's AI-powered platform.
        </p>

        <div className="flex flex-col gap-4 md:flex-row">
          
          <Button className="inline-flex items-center justify-center gap-2  text-card-foreground rounded-md border bg-olive-600 px-4 py-4 text-sm font-medium shadow-xs hover:bg-neutral-700 hover:text-white">
            Schedule a demo
            <ChevronRight className="size-4" />
          </Button>

          <Button className="bg-yellow-700 text-primary-foreground hover:bg-yellow-600">
            Start Free Trial
          </Button>

        </div>
      </div>

      {/* Right */}
      <figure className="relative h-[300px] w-full lg:mt-10">
        <Image
          src="/images/hero.png"
          alt="shadcn landing page"
          fill
          className="object-cover lg:rounded-tl-lg"
        />
      </figure>
    </div>
  );
}
