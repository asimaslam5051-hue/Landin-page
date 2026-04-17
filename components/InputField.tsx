"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field"

export default function InputField() {
 

  return (
    <form
     
      className="mx-auto w-full max-w-md space-y-3 mt-12"
    >
      <Field>
        

        
        <div className="flex gap-2">
          <Input
            id="email"
            type="email"
            placeholder="contact@bundui.com"
            required
            className="bg-muted/50"
          />

          <Button type="submit" className="bg-yellow-600">
            Subscribe
          </Button>
        </div>

       
      </Field>
    </form>
  )
}