"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { quickReplies, matchFaqAnswer } from "@/lib/chatWidgetData";

type Message = { role: "bot" | "user"; text: string };

const INITIAL_MESSAGE: Message = {
  role: "bot",
  text: "Hi! 👋 Questions about hours, pricing, or service area? Ask away — you'll get an answer right now.",
};

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const answer = matchFaqAnswer(text);
      setMessages((prev) => [...prev, { role: "bot", text: answer }]);
      setTyping(false);
    }, 900);
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-44 right-4 z-[60] w-[320px] max-w-[calc(100vw-2rem)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-cyan-950/40">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-sm font-semibold text-foreground">Chat with us</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 max-h-80 overflow-y-auto px-3 py-3 space-y-2.5">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
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
                <div className="bg-cyan-950/40 border border-cyan-900/40 rounded-xl px-3 py-2 text-xs text-muted-foreground animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-1.5 px-3 pb-2.5">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-[11px] bg-background border border-border rounded-full px-2.5 py-1 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="flex gap-2 p-3 border-t border-border">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Type a message..."
              className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="bg-primary hover:bg-primary/90 disabled:opacity-40 text-primary-foreground rounded-lg px-3 flex items-center justify-center transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-24 right-4 z-[60] w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl flex items-center justify-center transition-all active:scale-95"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
