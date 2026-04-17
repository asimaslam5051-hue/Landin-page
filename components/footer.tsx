"use client"

import { Button } from "@/components/ui/button"
import { BsTwitter } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { LiaLinkedin } from "react-icons/lia"

export default function Footer() {
  return (
    <footer className="mt-24">
  
      <div className="max-w-6xl mx-auto px-4 py-12 border-4 rounded-lg grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold">Cosmic</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Meet our AI-powered SaaS solution to lighten your workload,
            increase efficiency, and scale faster.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="hover:text-foreground cursor-pointer">Github</li>
            <li className="hover:text-foreground cursor-pointer">Twitter</li>
            <li className="hover:text-foreground cursor-pointer">Instagram</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold mb-4">Platforms</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="hover:text-foreground cursor-pointer">iOS</li>
            <li className="hover:text-foreground cursor-pointer">Web</li>
            <li className="hover:text-foreground cursor-pointer">Android</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-bold mb-4">Help</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="hover:text-foreground cursor-pointer">Contact us</li>
            <li className="hover:text-foreground cursor-pointer">FAQ</li>
            <li className="hover:text-foreground cursor-pointer">Feedback</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-4">
        <div className="max-w-6xl mx-auto px-1 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          
          {/* Left */}
          <p>© 2025 | <span className="text-yellow-600">Bundui</span>.</p>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition">
              <FaFacebook className="size-4" />
            </Button>

            <Button variant="ghost" size="icon" className="hover:scale-110 transition">
              <BsTwitter className="size-4" />
            </Button>

            <Button variant="ghost" size="icon" className="hover:scale-110 transition">
              <LiaLinkedin className="size-4" />
            </Button>
          </div>

        </div>
      </div>

    </footer>
  )
}
