"use client";
import { useState } from "react";

export default function PricingToggle({
  onChange,
}: {
  onChange: (value: "monthly" | "annually") => void;
}) {
  const [active, setActive] = useState<"monthly" | "annually">("annually");

  return (
    <div className="flex justify-center border border-gray-200  p-1 rounded-lg mt-12 max-w-6xl mx-72"> 
      
      <button
        onClick={() => {
          setActive("monthly");
          onChange("monthly");
        }}
        className={`px-4 py-2 rounded-md ${
          active === "monthly" ? "bg-background" : ""
        }`}
      >
        Monthly
      </button>

      <button
        onClick={() => {
          setActive("annually");
          onChange("annually");
        }}
        className={`px-4 py-2 rounded-md ${
          active === "annually" ? "bg-background" : ""
        }`}
      >
        Annually <span className="text-green-600 text-sm">20%</span>
      </button>

    </div>
  );
}