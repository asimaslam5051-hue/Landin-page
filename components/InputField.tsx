"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"

export default function InputField() {
  return (
    <form className="mx-auto w-full max-w-md px-4 sm:px-0 mt-10 sm:mt-12">
      <Field className="space-y-3">
        
        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            id="email"
            type="email"
            placeholder="contact@bundui.com"
            required
            className="h-11 sm:h-12 bg-muted/50 text-sm sm:text-base"
          />

          <Button
            type="submit"
            className="h-11 sm:h-12 px-6 bg-yellow-600 w-full sm:w-auto"
          >
            Subscribe
          </Button>
        </div>
      </Field>
    </form>
  )
}