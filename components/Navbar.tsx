"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ui/theme-button";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);
    setTimeout(() => setProgress(70), 100);
    setTimeout(() => setProgress(100), 400);
  }, [pathname]);

  return (
    <nav className="sticky top-4 z-50 mx-4">
      
      <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      {/* Navbar Container */}
      <div className="bg-background/70 backdrop-blur-lg border rounded-2xl px-6 py-3 flex items-center justify-between shadow-md">

        {/* Left Logo */}
        <Link href="/" className="text-lg font-bold">
          Cosmic
        </Link>

        {/* Center Menu */}
        <div className="hidden lg:flex gap-8 font-medium">
          <Link href="/products" className="hover:font-semibold transition">
            Products
          </Link>
          <Link href="/solutions" className="hover:font-semibold transition">
            Solutions
          </Link>
          <Link href="/pricing" className="hover:font-semibold transition">
            Pricing
          </Link>
          <Link href="/team" className="hover:font-semibold transition">
            Team
          </Link>
          <Link href="/contact" className="hover:font-semibold transition">
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">
          <ModeToggle />
         <Button className="mx-1 text-xs" variant="outline">Login</Button>
          <Button className="bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg px-8 py-5">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-3">
          <ModeToggle />
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">Cosmic</SheetTitle>

                <div className="flex flex-col gap-6">
                  <Link href="/products">Products</Link>
                  <Link href="/solutions">Solutions</Link>
                  <Link href="/pricing">Pricing</Link>
                  <Link href="/team">Team</Link>
                  <Link href="/contact">Contact</Link>
                  <Button className="mx-1 text-xs" variant="outline">Login</Button>
                  <Button className="bg-yellow-600 text-white">
                    Get Started
                  </Button>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;