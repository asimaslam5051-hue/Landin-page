"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="mt-16 px-4 sm:px-6 lg:px-8">
      
      <div className="relative overflow-hidden rounded-2xl border border-gray-200/50 bg-gradient-to-br from-muted to-muted/50 shadow-sm">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 p-6 sm:p-10 text-center lg:text-left">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Ready to Transform Your Website?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-7">
              Join thousands of satisfied customers who have optimized their
              websites and boosted conversions with Metro's AI-powered platform.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Button className="flex items-center justify-center gap-2 px-5 py-5 text-sm sm:text-base rounded-md bg-olive-600 hover:bg-neutral-700 hover:text-white">
                Schedule a demo
                <ChevronRight className="size-4" />
              </Button>

              <Button className="bg-yellow-700 hover:bg-yellow-600 text-white px-5 py-5 text-sm sm:text-base rounded-md">
                Start Free Trial
              </Button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[220px] sm:h-[300px] lg:h-full min-h-[240px]">

            <Image
              src="/images/hero.png"
              alt="cta image"
              fill
              className="object-cover lg:rounded-l-2xl"
            />

          </div>
        </div>
      </div>
    </section>
  );
}