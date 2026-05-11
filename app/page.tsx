"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import { CarouselSize } from "./carousel";
import CtaSection from "@/components/CtaSection"
import { teamData } from "@/app/teamData";
import { AnalyticsCard } from "./AnalyticsCard";
import { Cards } from "./Cards";
import { AnalyticsCards } from "./AnalyticsCards";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { Profilecard } from "./Profilecard";
import Pricingcard from "@/components/Pricingcard";
import DiscordSection from "@/components/DiscordSection";
import PricingToggle from "@/components/PricingToggle";
import { useState } from "react";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ"; import Footer from "@/components/footer";
import InputField from "@/components/InputField";
const features = ["No credit card", "14-day trial", "Cancel anytime"];
export default function Home() {
  const [plan, setPlan] = useState<"monthly" | "annually">("annually");

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-zinc-50 dark:bg-black font-sans">

      {/* HERO SECTION */}
      <div className="flex flex-col items-center gap-5 sm:gap-6 text-center px-4 sm:px-6 pt-20">

        <Button className="bg-stone-700 hover:bg-stone-600 text-white rounded-lg px-4 py-2 text-xs sm:text-sm flex items-center gap-2">
          <span className="bg-black px-2 py-1 rounded-md text-xs">
            New
          </span>
          AI Powered Optimization
        </Button>

        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-zinc-50 leading-tight">
          Optimize Your Website with AI Support
        </h1>

        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400">
          Meet our AI-powered SaaS solution to lighten your workload,
          increase efficiency and make more accurate decisions.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none justify-center px-4">

        <Button className="bg-yellow-700 hover:bg-yellow-600 w-full sm:w-[180px] h-12 rounded-xl">
          Start Free Trial
        </Button>

        <Button variant="outline" className="w-full sm:w-[180px] h-12 rounded-xl">
          Book a Demo
        </Button>
      </div>

      {/* FEATURES */}
      <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-muted-foreground px-4">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <Check className="size-4" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* HERO IMAGE */}
      <div className="mt-10 px-4 w-full max-w-6xl">
        <Image
          src="/images/hero.png"
          alt="hero"
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>

      {/* CAROUSEL */}
      <div className="w-full px-4">
        <CarouselSize />
      </div>

      {/* BENEFITS */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mt-16 w-full max-w-6xl px-4">

        <div className="md:w-1/2">
          <h2 className="text-sm text-yellow-700 font-semibold">BENEFITS</h2>
          <h1 className="text-2xl sm:text-3xl font-bold mt-2">
            What Do We Bring to You?
          </h1>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 mt-4">
            All innovative solutions you need to grow your business are here.
          </p>
        </div>

        <div className="grid gap-4 w-full md:w-1/2">
          <AnalyticsCards number="01" title="AI Automation" description="..." />
          <AnalyticsCards number="02" title="Data Analysis" description="..." />
          <AnalyticsCards number="03" title="Personalized Experience" description="..." />
          <AnalyticsCards number="04" title="Scalable System" description="..." />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="text-center mt-16 px-4">
        <h2 className="text-yellow-800 font-semibold text-sm sm:text-base">
          FEATURES
        </h2>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
          Everything You Need
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-600 mt-3">
          Tools to optimize your website and improve performance.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 mt-10 w-full max-w-6xl">
        <Cards title="AI Automation" description="..." />
        <Cards title="SEO" description="..." />
        <Cards title="Security" description="..." />
        <Cards title="Integration" description="..." />
        <Cards title="Analytics" description="..." />
        <Cards title="Monitoring" description="..." />
      </div>

      {/* PRICING */}
      <div className="text-center mt-20 px-4">
        <h2 className="text-yellow-700 text-sm sm:text-base">PRICING</h2>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
          Get Unlimited Access
        </h1>
      </div>

      <div className="w-full px-4">
        <PricingToggle onChange={setPlan} />
        <Pricingcard billing={plan} />
      </div>

      {/* CTA + SECTIONS */}
      <CtaSection />
      <DiscordSection />

      {/* CONTACT */}
      <div className="text-center px-4 mt-20">
        <span className="text-yellow-600 font-semibold text-sm">
          CONTACT
        </span>

        <h1 className="text-2xl sm:text-4xl font-bold mt-3">
          Get Connected With Us
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-600 mt-3">
          Stay in touch for updates and support.
        </p>
      </div>

      <ContactSection />

      {/* FAQ */}
      <div className="text-center mt-20 px-4">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Common Questions
        </h1>
      </div>

      <FAQ />

      {/* NEWSLETTER */}
      <div className="text-center px-4 mt-20 mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Join Our Daily{" "}
          <span className="text-yellow-700">Newsletter</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-base text-zinc-600">
          Subscribe for updates and insights.
        </p>

        <InputField />
      </div>

      <Footer />
    </div>
  );
}