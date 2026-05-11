import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Left Side */}
      <div className="flex flex-col gap-5">
        
        <div className="bg-muted rounded-2xl border p-5 sm:p-6">
          <div className="mb-3 font-semibold text-base sm:text-lg">
            📍 Location:
          </div>

          <div className="text-sm sm:text-base text-muted-foreground leading-6">
            123 Maple Lane, Springfield, IL 62704
          </div>
        </div>

        <div className="bg-muted rounded-2xl border p-5 sm:p-6">
          <div className="mb-3 font-semibold text-base sm:text-lg">
            📞 Call us:
          </div>

          <div className="text-sm sm:text-base text-muted-foreground">
            +1 (555) 987-6543
          </div>
        </div>

        <div className="bg-muted rounded-2xl border p-5 sm:p-6">
          <div className="mb-3 font-semibold text-base sm:text-lg">
            ✉️ Email us:
          </div>

          <div className="text-sm sm:text-base text-muted-foreground break-all">
            contact@ourcompany.com
          </div>
        </div>

        <div className="bg-muted rounded-2xl border p-5 sm:p-6">
          <div className="mb-3 font-semibold text-base sm:text-lg">
            🕒 Business Hours:
          </div>

          <div className="text-sm sm:text-base text-muted-foreground">
            Tuesday to Saturday, 9 AM - 5 PM
          </div>
        </div>
      </div>

      {/* Right Side */}
      <Card className="bg-muted rounded-2xl py-4 sm:py-6">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">
            Send Message
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="grid gap-5">
            
            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-md border px-4 py-3 bg-transparent text-sm sm:text-base outline-none"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-md border px-4 py-3 bg-transparent text-sm sm:text-base outline-none"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="contact@bundui.com"
              className="w-full rounded-md border px-4 py-3 bg-transparent text-sm sm:text-base outline-none"
            />

            {/* Select */}
            <select className="w-full rounded-md border px-4 py-3 bg-transparent text-sm sm:text-base outline-none">
              <option className="bg-black">Select a subject</option>
              <option className="bg-black">Web Development</option>
              <option className="bg-black">Mobile Development</option>
              <option className="bg-black">Figma Design</option>
              <option className="bg-black">REST API</option>
              <option className="bg-black">Full Stack Project</option>
            </select>

            {/* Message */}
            <textarea
              rows={5}
              placeholder="Your Message..."
              className="w-full rounded-md border px-4 py-3 bg-transparent resize-none text-sm sm:text-base outline-none"
            />

            {/* Button */}
            <Button className="bg-yellow-700 text-primary-foreground rounded-md py-6 mt-2 hover:bg-yellow-600 transition w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}