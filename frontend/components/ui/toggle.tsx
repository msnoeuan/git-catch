"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type ToggleProps = {
  defaultChecked?: boolean;
};

export function Toggle({ defaultChecked = true }: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <button
      aria-pressed={checked}
      className={cn(
        "relative h-5 w-9 rounded-full transition-colors",
        checked ? "bg-gray-900" : "bg-gray-300",
      )}
      onClick={() => setChecked((value) => !value)}
      type="button"
    >
      <span
        className={cn(
          "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all",
          checked ? "left-[18px]" : "left-0.5",
        )}
      />
    </button>
  );
}
