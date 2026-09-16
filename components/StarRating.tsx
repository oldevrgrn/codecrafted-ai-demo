"use client";

import { Star } from "lucide-react";

export default function StarRating({
  rating,
  onChange,
  size = 18,
}: {
  rating: number;
  onChange?: (value: number) => void;
  size?: number;
}) {
  const interactive = Boolean(onChange);

  return (
    <div className="flex items-center gap-0.5" role={interactive ? "radiogroup" : undefined} aria-label="Star rating">
      {[1, 2, 3, 4, 5].map((value) => {
        const filled = value <= rating;
        const StarEl = (
          <Star
            key={value}
            width={size}
            height={size}
            className={filled ? "fill-amber-400 text-amber-400" : "fill-transparent text-muted-foreground"}
            strokeWidth={1.5}
          />
        );

        if (!interactive) {
          return <span key={value}>{StarEl}</span>;
        }

        return (
          <button
            key={value}
            type="button"
            aria-label={`${value} star${value > 1 ? "s" : ""}`}
            onClick={() => onChange && onChange(value)}
            className="p-0.5 -m-0.5"
          >
            {StarEl}
          </button>
        );
      })}
    </div>
  );
}
