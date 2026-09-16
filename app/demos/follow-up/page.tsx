"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, RotateCcw } from "lucide-react";
import { businessTypes, type BusinessType } from "@/lib/quoteData";
import { generateFollowUpSequence } from "@/lib/followUpData";

export default function FollowUpDemo() {
  const [businessType, setBusinessType] = useState<BusinessType>("Roofing");
  const [jobDescription, setJobDescription] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [status, setStatus] = useState<"form" | "generating" | "done">("form");
  const [sequence, setSequence] = useState<ReturnType<typeof generateFollowUpSequence> | null>(null);

  function handleGenerate() {
    setStatus("generating");
    setTimeout(() => {
      setSequence(generateFollowUpSequence(businessType, jobDescription, customerName));
      setStatus("done");
    }, 1200);
  }

  function reset() {
    setJobDescription("");
    setCustomerName("");
    setSequence(null);
    setStatus("form");
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Demos
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">🔁</span>
        <h1 className="font-display text-2xl font-bold text-foreground">Quote Follow-Up Sequence</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6">
        A quote that goes cold is a lost job. Generate a 3-touch follow-up sequence in seconds.
      </p>

      {status === "form" && (
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Business Type</label>
            <div className="flex flex-wrap gap-2">
              {businessTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setBusinessType(type)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    businessType === type
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Job Description</label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="e.g. Full roof replacement quote sent, no response in 3 days"
              rows={3}
              className="w-full bg-card border border-border rounded-xl p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Customer Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="e.g. Mike Johnson"
              className="w-full bg-card border border-border rounded-xl p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            Generate Sequence
          </button>
        </div>
      )}

      {status === "generating" && (
        <div className="bg-card border border-border rounded-2xl p-5 text-center">
          <p className="text-muted-foreground text-sm animate-pulse">AI is drafting your follow-up sequence...</p>
        </div>
      )}

      {status === "done" && sequence && (
        <>
          <div className="space-y-3 mb-4">
            {sequence.map((step) => (
              <div key={step.day} className="bg-card border border-border rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-rose-400 bg-rose-950/40 border border-rose-900/40 rounded-full px-2.5 py-0.5">
                    {step.day}
                  </span>
                  <span className="text-xs text-muted-foreground">{step.label}</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">{step.message}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-blue-950/40 border border-blue-900/40 text-blue-300 text-sm rounded-xl px-4 py-3 mb-3">
            <Clock className="w-4 h-4 flex-shrink-0" />
            Time saved: ~2 hrs/week manually tracking and re-texting quotes
          </div>
          <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-900/40 text-emerald-300 text-sm rounded-xl px-4 py-3 mb-5">
            <DollarSign className="w-4 h-4 flex-shrink-0" />
            Est. value: 1 recovered job/month often covers this entire service
          </div>

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            Generate Another Sequence
          </button>
        </>
      )}
    </div>
  );
}
