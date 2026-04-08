import { Button } from "@/components/ui/button"; 
import { Check } from "lucide-react"; 
import Image from "next/image"; 


const features = [ 
  "No credit card", 
  "14-day trial", 
  "Cancel anytime"
 ];
export default function Home() {
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

      
    </div>
  );
}