import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StickyCTABar from "@/components/StickyCTABar";
import ChatBubble from "@/components/ChatBubble";
import StarryBackground from "@/components/StarryBackground";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Automation Demo | Southern Utah",
  description:
    "See AI save your business 20+ hours a week. Nate with Code Crafted builds these systems for Southern Utah businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${dmSans.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <StarryBackground />
        <div className="relative z-10 min-h-screen pb-20">{children}</div>
        <ChatBubble />
        <StickyCTABar />
      </body>
    </html>
  );
}
