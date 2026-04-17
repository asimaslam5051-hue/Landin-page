"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
  return (
    <Accordion
      type="multiple"
      defaultValue={["notifications"]}
      className="w-full max-w-2xl mx-auto space-y-4 mt-12"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border rounded-lg px-4"
        >
          <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
            {item.trigger}
          </AccordionTrigger>

          <AccordionContent className="text-muted-foreground pt-2 pb-4">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}