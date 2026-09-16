"use client";

import { useEffect, useRef, useState } from "react";

type Layer = {
  points: string;
  color: string;
  opacity: number;
  speedX: number;
  speedY: number;
};

const layers: Layer[] = [
  {
    points:
      "0,200 0,150 40,145 80,152 120,140 160,148 200,138 240,146 280,136 320,144 360,140 400,148 400,200",
    color: "hsl(14,45%,16%)",
    opacity: 0.6,
    speedX: 6,
    speedY: 0.02,
  },
  {
    points:
      "0,200 0,130 30,120 60,132 100,105 130,118 170,95 210,112 250,90 290,110 330,98 370,115 400,105 400,200",
    color: "hsl(14,60%,24%)",
    opacity: 0.5,
    speedX: 13,
    speedY: 0.05,
  },
  {
    points:
      "0,200 0,110 20,95 45,115 70,70 95,100 130,55 155,90 190,45 220,85 255,60 285,95 315,50 345,88 375,65 400,100 400,200",
    color: "hsl(15,72%,34%)",
    opacity: 0.4,
    speedX: 22,
    speedY: 0.09,
  },
];

export default function ParallaxCanyon() {
  const [scrollY, setScrollY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const targetX = useRef(0);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      targetX.current = (e.clientX / window.innerWidth - 0.5) * 2;
    }
    function onOrientation(e: DeviceOrientationEvent) {
      if (e.gamma == null) return;
      const clamped = Math.max(-30, Math.min(30, e.gamma));
      targetX.current = clamped / 30;
    }

    const canHover = window.matchMedia("(hover: hover)").matches;
    if (canHover) {
      window.addEventListener("mousemove", onMouseMove);
    } else {
      const enableTilt = () => {
        const DOE = window.DeviceOrientationEvent as unknown as {
          requestPermission?: () => Promise<string>;
        };
        if (typeof DOE?.requestPermission === "function") {
          DOE.requestPermission()
            .then((state: string) => {
              if (state === "granted") {
                window.addEventListener("deviceorientation", onOrientation);
              }
            })
            .catch(() => {});
        } else {
          window.addEventListener("deviceorientation", onOrientation);
        }
        window.removeEventListener("touchstart", enableTilt);
      };
      window.addEventListener("touchstart", enableTilt, { once: true });
    }

    let raf: number;
    function smooth() {
      setOffsetX((prev) => prev + (targetX.current - prev) * 0.08);
      raf = requestAnimationFrame(smooth);
    }
    raf = requestAnimationFrame(smooth);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#160a07]" />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 320,
          height: 320,
          top: "6%",
          left: `calc(50% + ${offsetX * 4}px)`,
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, hsla(20,90%,55%,0.22), transparent 70%)",
        }}
      />
      {layers.map((layer, i) => (
        <svg
          key={i}
          viewBox="0 0 400 200"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-1/2 w-[140%] h-[42vh]"
          style={{
            opacity: layer.opacity,
            transform: `translate3d(calc(-50% + ${offsetX * layer.speedX}px), ${
              scrollY * layer.speedY
            }px, 0)`,
          }}
        >
          <polygon fill={layer.color} points={layer.points} />
        </svg>
      ))}
    </div>
  );
}
