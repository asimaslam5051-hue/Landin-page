"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from "react"

const items = [
  {
    value: "notifications",
    trigger: "How does the free trial work?",
    content:
      "Our free trial gives you access to all features for a limited time. No credit card is required, and you can cancel anytime.",
  },
  {
    value: "privacy",
    trigger: "Can I change my plan later?",
    content:
      "Absolutely! You can upgrade, downgrade, or modify your plan at any time through your account settings.",
  },
  {
    value: "billing",
    trigger: "Is customer support available 24/7?",
    content:
      "Yes, our support team is available around the clock to assist you.",
  },
  {
    value: "security",
    trigger: "How secure is my data?",
    content:
      "We prioritize your data privacy with robust security protocols, including end-to-end encryption and GDPR compliance.",
  },
  {
    value: "plans",
    trigger: "Do you offer custom plans for businesses?",
    content:
      "Yes, we offer flexible, custom plans designed to meet the unique needs of businesses of all sizes. Contact us for more details.",
  },
  {
    value: "payments",
    trigger: "What payment methods do you accept?",
    content:
      "We accept major credit cards, PayPal, and bank transfers for easy and convenient payment options.",
  },
]

export default function FAQ() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <Accordion
        type="multiple"
        defaultValue={["notifications"]}
        className={`w-full max-w-3xl mx-auto space-y-4 mt-10 sm:mt-12 transition-all duration-500 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border rounded-2xl px-4 sm:px-6 py-1 bg-background/50"
          >
            <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold leading-6 sm:leading-7 hover:no-underline py-4">
              {item.trigger}
            </AccordionTrigger>

            <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-6 pb-4">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}