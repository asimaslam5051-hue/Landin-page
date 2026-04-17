"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type Props = {
  billing: "monthly" | "annually";
};

export default function Pricingcard({ billing }: Props) {

  const plans = [
    {
      name: "Starter",
      monthly: 20,
      yearly: 70,
      desc: "Perfect for small websites and blogs.",
      features: [
        "Up to 5 pages",
        "Basic optimization",
        "Weekly reports",
        "Email support",
      ],
    },
    {
      name: "Professional",
      monthly: 79,
      yearly: 190,
      desc: "Ideal for growing businesses and e-commerce.",
      features: [
        "Up to 25 pages",
        "Advanced optimization",
        "Daily reports",
        "Priority email support",
        "SEO recommendations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      monthly: 199,
      yearly: 150,
      desc: "For large websites with complex needs.",
      features: [
        "Unlimited pages",
        "Custom optimization rules",
        "Real-time monitoring",
        "24/7 support",
        "Advanced API access",
        "Custom integrations",
      ],
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 px-28 mt-12">
      {plans.map((plan, i) => {
        const price =
          billing === "monthly" ? plan.monthly : plan.yearly;

        return (
          <div
            key={i}
            className={`flex flex-col rounded-xl border py-6 h-full ${
              plan.popular ? "border-2  relative" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute top-0 right-0 bg-yellow-700 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-xl">
                Most Popular
              </span>
            )}

            <div className="px-6">
              <h3 className="font-semibold">{plan.name}</h3>
            </div>

            <div className="px-6 flex flex-col h-full">
              <div className="flex items-baseline text-4xl font-bold">
                ${price}
                <span className="ml-1 text-sm text-muted-foreground lowercase">
                  /{billing === "monthly" ? "month" : "year"}
                </span>
              </div>

              <p className="text-muted-foreground  mt-2">
                {plan.desc}
              </p>

              <ul className="my-6 flex-grow space-y-3">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="mr-2 size-4 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "default" : "outline"}
                className={plan.popular ? "bg-yellow-700" : ""}
                >
                {plan.popular ? "Start Free Trial" : "Contact Sales"}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}