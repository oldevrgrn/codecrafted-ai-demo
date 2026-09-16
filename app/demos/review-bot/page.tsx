"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, RotateCcw, Copy, Check } from "lucide-react";
import { sampleReviews, generateReviewResponse } from "@/lib/reviewData";

export default function ReviewBotDemo() {
  const [selectedText, setSelectedText] = useState<string>("");
  const [customText, setCustomText] = useState("");
  const [status, setStatus] = useState<"form" | "generating" | "done">("form");
  const [response, setResponse] = useState("");
  const [copied, setCopied] = useState(false);

  const activeText = selectedText || customText;

  function handleDraft() {
    if (!activeText.trim()) return;
    setStatus("generating");
    setTimeout(() => {
      setResponse(generateReviewResponse(activeText.trim()));
      setStatus("done");
    }, 1100);
  }

  function reset() {
    setSelectedText("");
    setCustomText("");
    setResponse("");
    setCopied(false);
    setStatus("form");
  }

  function copyResponse() {
    navigator.clipboard.writeText(response).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Demos
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">⭐</span>
        <h1 className="font-display text-2xl font-bold text-foreground">Review Response Bot</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6">
        AI drafts professional Google review replies in seconds.
      </p>

      {status === "form" && (
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Select a review</label>
            <div className="space-y-2">
              {sampleReviews.map((review) => (
                <button
                  key={review.name}
                  onClick={() => {
                    setSelectedText(review.text);
                    setCustomText("");
                  }}
                  className={`w-full text-left bg-card border rounded-xl p-3 transition-all ${
                    selectedText === review.text ? "border-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  <p className="font-medium text-sm text-foreground mb-1">{review.name}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{review.text}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">or paste your own</label>
            <textarea
              value={customText}
              onChange={(e) => {
                setCustomText(e.target.value);
                setSelectedText("");
              }}
              placeholder="Paste a Google review here..."
              rows={3}
              className="w-full bg-card border border-border rounded-xl p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
          </div>

          <button
            onClick={handleDraft}
            disabled={!activeText.trim()}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-40 text-primary-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            Draft Response
          </button>
        </div>
      )}

      {status === "generating" && (
        <div className="bg-card border border-border rounded-2xl p-5 text-center">
          <p className="text-muted-foreground text-sm animate-pulse">AI is drafting your response...</p>
        </div>
      )}

      {status === "done" && (
        <>
          <div className="bg-card border border-border rounded-2xl p-5 mb-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-primary font-bold text-sm">AI-DRAFTED RESPONSE</p>
              <button
                onClick={copyResponse}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <p className="text-sm text-foreground leading-relaxed">{response}</p>
          </div>

          <div className="flex items-center gap-2 bg-blue-950/40 border border-blue-900/40 text-blue-300 text-sm rounded-xl px-4 py-3 mb-3">
            <Clock className="w-4 h-4 flex-shrink-0" />
            Time saved: ~1.5 hrs/week on review management
          </div>
          <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-900/40 text-emerald-300 text-sm rounded-xl px-4 py-3 mb-5">
            <DollarSign className="w-4 h-4 flex-shrink-0" />
            Est. value: $500–$1,000/month in reputation ROI
          </div>

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            Try Another Review
          </button>
        </>
      )}
    </div>
  );
}
