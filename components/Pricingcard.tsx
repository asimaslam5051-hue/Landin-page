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
    <section className="px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        {plans.map((plan, i) => {
          const price = billing === "monthly" ? plan.monthly : plan.yearly;

          return (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border bg-background p-5 sm:p-6 h-full shadow-sm transition hover:shadow-lg ${
                plan.popular ? "border-2 border-yellow-700" : ""
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <span className="absolute top-3 right-3 bg-yellow-700 text-white text-xs sm:text-sm px-3 py-1 rounded-xl">
                  Most Popular
                </span>
              )}

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-end mt-4">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  ${price}
                </span>

                <span className="ml-2 text-xs sm:text-sm text-muted-foreground mb-1">
                  /{billing === "monthly" ? "month" : "year"}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-3 leading-6">
                {plan.desc}
              </p>

              {/* Features */}
              <ul className="my-6 flex flex-col gap-3">
                {plan.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm md:text-base"
                  >
                    <Check className="mt-1 size-4 text-yellow-700 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full py-5 sm:py-6 text-sm sm:text-base transition ${
                  plan.popular
                    ? "bg-yellow-700 hover:bg-yellow-600"
                    : ""
                }`}
              >
                {plan.popular ? "Start Free Trial" : "Contact Sales"}
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}