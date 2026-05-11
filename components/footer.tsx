"use client"

import { Button } from "@/components/ui/button"
import { BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { LiaLinkedinIn } from "react-icons/lia"

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border/40">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Column 1 */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold">Cosmic</h3>

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Meet our AI-powered SaaS solution to lighten your workload,
            increase efficiency, and scale faster.
          </p>
        </div>

        {/* Column 2 */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Contact</h4>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition cursor-pointer">
              Github
            </li>

            <li className="hover:text-foreground transition cursor-pointer">
              Twitter
            </li>

            <li className="hover:text-foreground transition cursor-pointer">
              Instagram
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Platforms</h4>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition cursor-pointer">
              iOS
            </li>

            <li className="hover:text-foreground transition cursor-pointer">
              Web
            </li>

            <li className="hover:text-foreground transition cursor-pointer">
              Android
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4">Help</h4>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition cursor-pointer">
              Contact us
            </li>

            <li className="hover:text-foreground transition cursor-pointer">
              FAQ
            </li>

            <li className="hover:text-foreground transition cursor-pointer">
              Feedback
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          
          {/* Left */}
          <p className="text-center sm:text-left">
            © 2025 | <span className="text-yellow-600 font-medium">Bundui</span>.
            All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:scale-110 transition-transform"
            >
              <FaFacebookF className="size-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:scale-110 transition-transform"
            >
              <BsTwitter className="size-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:scale-110 transition-transform"
            >
              <LiaLinkedinIn className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}