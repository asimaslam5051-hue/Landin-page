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
import PricingToggle from "@/components/PricingToggle"
import { useState } from "react";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/footer";
import InputField from "@/components/InputField";
const features = [ 
  "No credit card", 
  "14-day trial",
  "Cancel anytime"
 ];
export default function Home() {
  const [plan, setPlan] = useState<"monthly" | "annually">("annually");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-zinc-50 py-26  dark:bg-black font-sans">
      
      
        
        <div className="flex flex-col items-center gap-6 text-center">

          <Button className="bg-stone-700 hover:bg-stone-600 text-white rounded-lg px-4 py-2 border border-stone-600 shadow-md hover:shadow-lg transition-all flex items-center gap-2">
            <span className="bg-black px-2 py-1 rounded-md text-sm">New</span>
            AI Powered Optimization
          </Button>

          <h1 className="max-w-2xl text-5xl md:text-6xl font-bold text-black dark:text-zinc-50 leading-tight tracking-tight">
            Optimize Your Website with AI Support
          </h1>

          <p className="max-w-xl text-xl text-zinc-600 dark:text-zinc-400">
            Meet our AI-powered SaaS solution to lighten your workload, increase efficiency and make more accurate decisions.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-base font-medium sm:flex-row w-full justify-center">
          
          <Button className="bg-yellow-700 hover:bg-yellow-600 w-full md:w-[160px] h-12 rounded-xl transition-all duration-300 hover:scale-105">
            Start Free Trial
          </Button>

          <Button variant="outline" className="w-full md:w-[160px] h-12 rounded-xl transition-all duration-300 hover:scale-105">
            Book a Demo
          </Button>
        </div>

        <div className="text-muted-foreground mt-4 flex flex-col items-center justify-center gap-4 text-sm md:flex-row">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <Check className="size-4" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <Image
          src="/images/hero.png"
          alt="hero"
          width={500}
          height={500}
          priority
          className="w-full h-auto mt-10"
        />

      <CarouselSize/>
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mt-16 w-full max-w-6xl mx-auto px-4">
  
        {/* Left Column */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-sm text-yellow-700 font-semibold">BENEFITS</h2>
          <h1 className="text-3xl font-bold text-black dark:text-white mt-2">
            What Do We Bring to You?
          </h1>
          <p className="text-sx text-zinc-700 dark:text-zinc-300 mt-4">
           All the innovative solutions you need to grow your business are here! We add value to your business with our features that simplify your workflow, increase efficiency and strengthen your decisions.
          </p>
        </div>
        {/*right colum */}
        <div className=" grid grid-cols-1  gap-2"> 
          <AnalyticsCards number="01" title="AI-Powered Automation" description="Save time and increase your efficiency by automating your routine business processes." />
          <AnalyticsCards number="02" title="Real Time Data Analysis" description="We help you make more informed and strategic decisions by instantly analyzing your data." />
          <AnalyticsCards number="03" title="Personalized Experience" description="It offers flexible solutions with its adaptable structure according to the specific needs of your business." />
          <AnalyticsCards number="04" title="Scalable Structure" description="Move forward into the future with confidence, with an infrastructure that can expand as your business grows." />
        </div>
      </div>
       <div className="text-lg items-center text-yellow-800 mt-10 font-semibold">
         FEATURES
       </div>
       <div className="text-4xl text-center text-zinc-700 dark:text-zinc-100 mt-4 font-bold">
          <h1>Everything You Need to Succeed</h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400   mt-3">
            Our comprehensive platform provides all the tools you need to optimize your website, boost performance, and enhance user experience.
          </p>
       </div>
        <div className="grid grid-cols sm: grid-cols-1 lg:grid-cols-3  gap-4 px-6 mt-10"> 
          <Cards  title="AI-Powered Automation"  description="Our intelligent algorithms automatically enhance your website's performance, speed, and user experience." />
          <Cards  title="Real Time Data Analysis" description="Monitor your website's performance metrics and optimization improvements with comprehensive dashboards" />
          <Cards  title="SEO Enhancement" description="Boost your search engine rankings with AI-driven content and metadata optimization suggestions." />
          <Cards  title="Advanced Security"   description="Protect your website with intelligent threat detection and automated security enhancements." />
          <Cards  title="Smart Integrations"  description="Connect seamlessly with your existing tools and platforms through our extensive API ecosystem."/>
          <Cards  title="24/7 AI Monitoring"   description= "Our AI constantly monitors your website, making real-time adjustments to maintain peak performance." />
        </div>
        <div className="text-lg items-center text-yellow-800 mt-10 font-semibold">
         SERVICES
        </div>
        <div className="text-4xl text-center  text-zinc-700 dark:text-zinc-100 mt-4 font-bold">
          <h1>Grow Your Business</h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 font-semibold mt-3">
            From marketing and sales to operations and strategy, we have the expertise to help you achieve your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-4  mt-10 ">
          <AnalyticsCard
              title="Consultation Services"
              description="Expert guidance tailored to identify opportunities and strategize effectively."
          />
          <AnalyticsCard
            title="Custom Domain Integration" 
            description="Seamless integration of your unique domain for a professional online presence" 
          />
          <AnalyticsCard 
            title="Social Media Integrations" 
            description="Connect with popular platforms to enhance your online engagement and reach. " 
          />
          <AnalyticsCard
            title="Email Marketing Integrations" 
            description="Effortlessly connect email marketing tools to streamline your campaigns." 
            pro
          />

          <AnalyticsCard
            title="SEO Optimization" 
            description="Improve your search engine visibility with tailored optimization strategies." 
            pro
          />

          <AnalyticsCard
            title="Ongoing Support" 
            description="24/7 customer support to ensure smooth operations and address any issues." 
            pro
          />
        </div>
        <div className="text-lg items-center text-yellow-700 mt-10 font-semibold">
         Testimonials
        </div>
        <div className="text-3xl text-center  text-black dark:text-white mt-4 font-bold">
          <h1>Loved by Teams Worldwide</h1>
          <p className="max-w-2xl  text-lg text-zinc-700 dark:text-white font-semibold mt-3">
            Don't just take our word for it. See what our customers have to say about their experience.
          </p>
         
        </div>
        <TestimonialCarousel/>
        <div className="text-lg items-center text-yellow-600 mt-32 font-semibold">
         TEAM
        </div>
        <div className="text-4xl text-center  text-black dark:text-white mt-4 font-bold">
          <h1>The Company Dream Team</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mt-10">
           {teamData.map((member, index) => (
            <Profilecard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              social={member.social}
            />
          ))}
        </div>
        <div className="text-lg items-center text-yellow-600 mt-32 font-semibold">
          Pricing
        </div>
        <div className="text-4xl text-center  text-black dark:text-white mt-4 font-bold">
          <h1>Get Unlimitted Access</h1>
          <p className="max-w-2xl  text-lg text-zinc-600 dark:text-white font-semibold mt-3">
           Enjoy unlimited access to all features and resources, empowering your business to grow without limits.
          </p>
        </div>
        <div>
          <PricingToggle onChange={setPlan} />
          <Pricingcard billing={plan} />
        </div>
        <CtaSection/>
        <DiscordSection/>
        <div className="text-lg items-center text-yellow-600 mt-32 font-semibold">
          CONTACT
        </div>
        <div className="text-4xl text-center text-black dark:text-white mt-4 font-bold">
          <h1>Get Connect With Us access</h1>
          <p className="max-w-xl  text-lg text-zinc-600 dark:text-white mt-3">
           Stay in touch with us for updates, support, and valuable insights. We’re here to help you every step of the way!
          </p>
        </div>
        <ContactSection/>
        <div className="text-lg items-center text-yellow-600 mt-32 font-semibold">
          FAQ
        </div>
        <div className="text-4xl text-center text-black dark:text-white mt-4 font-bold">
          <h1>Common Questions</h1>
        </div>
        <FAQ/>
        <div className="text-4xl text-center text-black dark:text-white mt-32 font-bold">
          <h1>Join Our Daily
            <span className="bg-gradient-to-br from-secondary to-secondary-foreground bg-clip-text text-transparent pl-2">
                   Newsletter
            </span></h1>
          <p className="max-w-xl  text-lg text-zinc-600 dark:text-white mt-3">
            Subscribe to receive the latest updates, insights, and exclusive offers directly to your inbox.
          </p>
          <InputField/>
        </div>
        <Footer/>
    </div>
      
  );
}
