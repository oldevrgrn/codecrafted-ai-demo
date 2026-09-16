"use client";

import { useEffect, useMemo, useState } from "react";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

type ShootingStar = {
  id: number;
  top: number;
  left: number;
  duration: number;
};

export default function StarryBackground() {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 90 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.8 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 3 + 2.5,
      })),
    []
  );

  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    let nextId = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    function scheduleNext() {
      const delay = 4000 + Math.random() * 6000;
      timeoutId = setTimeout(() => {
        const id = nextId++;
        const star: ShootingStar = {
          id,
          top: Math.random() * 40,
          left: Math.random() * 55,
          duration: 1 + Math.random() * 0.6,
        };
        setShootingStars((prev) => [...prev, star]);
        setTimeout(() => {
          setShootingStars((prev) => prev.filter((s) => s.id !== id));
        }, star.duration * 1000 + 100);
        scheduleNext();
      }, delay);
    }

    scheduleNext();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-background via-background to-[#0d0705]">
      <div
        className="absolute rounded-full"
        style={{
          top: "9%",
          right: "12%",
          width: 56,
          height: 56,
          background: "radial-gradient(circle at 35% 35%, #fdf6e3, #d8c9a3 70%)",
          boxShadow: "0 0 50px 12px rgba(253,246,227,0.12)",
        }}
      />

      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {shootingStars.map((s) => (
        <span
          key={s.id}
          className="absolute h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            transform: "rotate(18deg)",
            animation: `shooting-star ${s.duration}s ease-out forwards`,
          }}
        />
      ))}
    </div>
  );
}
