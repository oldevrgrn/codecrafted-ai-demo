"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, Send } from "lucide-react";
import { quickReplies, matchFaqAnswer } from "@/lib/chatWidgetData";

type Message = { role: "bot" | "user"; text: string };

const INITIAL_MESSAGE: Message = {
  role: "bot",
  text: "Hi! 👋 Thanks for stopping by. Ask us anything — hours, pricing, service area — and you'll get an answer right now, even after hours.",
};

export default function ChatWidgetDemo() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showStats, setShowStats] = useState(false);

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const answer = matchFaqAnswer(text);
      setMessages((prev) => [...prev, { role: "bot", text: answer }]);
      setTyping(false);
      setShowStats(true);
    }, 900);
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Demos
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">💬</span>
        <h1 className="font-display text-2xl font-bold text-foreground">Instant Website Chat</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6">
        Try asking your website a question — day or night, it answers instantly.
      </p>

      <div className="bg-card border border-border rounded-2xl p-4 mb-4">
        <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-cyan-950/40 border border-cyan-900/40 text-foreground"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-cyan-950/40 border border-cyan-900/40 rounded-xl px-3.5 py-2.5 text-sm text-muted-foreground animate-pulse">
                Typing...
              </div>
            </div>
          )}
        </div>

        {messages.length <= 1 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {quickReplies.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-xs bg-background border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Type a question..."
            className="flex-1 bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim()}
            className="bg-primary hover:bg-primary/90 disabled:opacity-40 text-primary-foreground rounded-xl px-4 flex items-center justify-center transition-all active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {showStats && (
        <>
          <div className="flex items-center gap-2 bg-blue-950/40 border border-blue-900/40 text-blue-300 text-sm rounded-xl px-4 py-3 mb-3">
            <Clock className="w-4 h-4 flex-shrink-0" />
            Time saved: ~4 hrs/week answering the same questions by phone
          </div>
          <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-900/40 text-emerald-300 text-sm rounded-xl px-4 py-3">
            <DollarSign className="w-4 h-4 flex-shrink-0" />
            Est. value: $600–$1,200/month in after-hours leads that don't bounce
          </div>
        </>
      )}
    </div>
  );
}
