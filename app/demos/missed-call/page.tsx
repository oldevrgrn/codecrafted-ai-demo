"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Clock, DollarSign, RotateCcw, Play } from "lucide-react";
import { missedCallScenarios, buildAutoReply } from "@/lib/missedCallScenarios";

export default function MissedCallDemo() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [status, setStatus] = useState<"idle" | "generating" | "done">("idle");

  const scenario = missedCallScenarios[scenarioIndex];

  function runAutomation() {
    setStatus("generating");
    setTimeout(() => {
      setStatus("done");
    }, 1400);
  }

  function tryAnother() {
    setScenarioIndex((i) => (i + 1) % missedCallScenarios.length);
    setStatus("idle");
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Demos
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">📞</span>
        <h1 className="font-display text-2xl font-bold text-foreground">Missed Call Text-Back</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6">
        Watch what happens when a customer calls and nobody picks up.
      </p>

      {status === "idle" && (
        <div className="bg-card border border-border rounded-2xl p-5">
          <p className="font-display font-bold text-lg text-foreground">{scenario.callerName}</p>
          <p className="text-sm text-muted-foreground mb-1">{scenario.inquiry}</p>
          <p className="text-xs text-muted-foreground mb-5">Incoming call to {scenario.business}</p>
          <button
            onClick={runAutomation}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            <Play className="w-4 h-4" />
            Run Automation
          </button>
        </div>
      )}

      {status === "generating" && (
        <div className="bg-card border border-border rounded-2xl p-5 text-center">
          <p className="text-muted-foreground text-sm animate-pulse">AI is generating response...</p>
          <p className="text-xs text-muted-foreground mt-2">This happens instantly in production</p>
        </div>
      )}

      {status === "done" && (
        <>
          <div className="bg-card border border-border rounded-2xl p-5 mb-4">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-3">
              <MessageCircle className="w-4 h-4" />
              Auto-reply sent in 3 seconds
            </div>
            <div className="bg-emerald-950/40 border border-emerald-900/50 rounded-xl p-4 text-sm text-foreground leading-relaxed">
              {buildAutoReply(scenario)}
            </div>
          </div>

          <div className="flex items-center gap-2 bg-blue-950/40 border border-blue-900/40 text-blue-300 text-sm rounded-xl px-4 py-3 mb-3">
            <Clock className="w-4 h-4 flex-shrink-0" />
            Time saved: ~45 min/week of manual callbacks
          </div>
          <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-900/40 text-emerald-300 text-sm rounded-xl px-4 py-3 mb-5">
            <DollarSign className="w-4 h-4 flex-shrink-0" />
            Est. value: $375–$750/month in recovered leads
          </div>

          <button
            onClick={tryAnother}
            className="w-full flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            Try Another Scenario
          </button>
        </>
      )}
    </div>
  );
}
