"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, RotateCcw } from "lucide-react";
import { voicemailSamples, buildDispatchTicket, type DispatchTicket } from "@/lib/voicemailData";

const urgencyStyles: Record<DispatchTicket["urgency"], string> = {
  High: "bg-primary/15 border-primary/40 text-primary",
  Medium: "bg-amber-950/40 border-amber-900/40 text-amber-300",
  Low: "bg-emerald-950/40 border-emerald-900/40 text-emerald-300",
};

export default function DispatchTicketDemo() {
  const [selectedTranscript, setSelectedTranscript] = useState("");
  const [customText, setCustomText] = useState("");
  const [status, setStatus] = useState<"form" | "generating" | "done">("form");
  const [ticket, setTicket] = useState<DispatchTicket | null>(null);

  const activeTranscript = selectedTranscript || customText;

  function handleBuild() {
    if (!activeTranscript.trim()) return;
    setStatus("generating");
    setTimeout(() => {
      setTicket(buildDispatchTicket(activeTranscript.trim()));
      setStatus("done");
    }, 1100);
  }

  function reset() {
    setSelectedTranscript("");
    setCustomText("");
    setTicket(null);
    setStatus("form");
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Demos
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">🎙️</span>
        <h1 className="font-display text-2xl font-bold text-foreground">Voicemail → Dispatch Ticket</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6">
        A rambling voicemail becomes a clean, actionable dispatch ticket — instantly.
      </p>

      {status === "form" && (
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Select a voicemail</label>
            <div className="space-y-2">
              {voicemailSamples.map((sample) => (
                <button
                  key={sample.label}
                  onClick={() => {
                    setSelectedTranscript(sample.transcript);
                    setCustomText("");
                  }}
                  className={`w-full text-left bg-card border rounded-xl p-3 transition-all ${
                    selectedTranscript === sample.transcript
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <p className="font-medium text-sm text-foreground mb-1">{sample.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">"{sample.transcript}"</p>
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
                setSelectedTranscript("");
              }}
              placeholder="Paste or type a rambling voicemail transcript..."
              rows={3}
              className="w-full bg-card border border-border rounded-xl p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
          </div>

          <button
            onClick={handleBuild}
            disabled={!activeTranscript.trim()}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-40 text-primary-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            Build Dispatch Ticket
          </button>
        </div>
      )}

      {status === "generating" && (
        <div className="bg-card border border-border rounded-2xl p-5 text-center">
          <p className="text-muted-foreground text-sm animate-pulse">AI is listening and extracting the details...</p>
        </div>
      )}

      {status === "done" && ticket && (
        <>
          <div className="bg-card border border-border rounded-2xl p-5 mb-4">
            <p className="text-primary font-bold text-sm mb-4">DISPATCH TICKET</p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Caller Name</p>
                <p className="text-foreground font-medium">{ticket.callerName}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Callback Number</p>
                <p className="text-foreground font-medium">{ticket.callbackNumber}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Issue Summary</p>
                <p className="text-foreground leading-relaxed">{ticket.issueSummary}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Urgency</p>
                <span
                  className={`inline-block text-xs font-bold rounded-full px-3 py-1 border ${urgencyStyles[ticket.urgency]}`}
                >
                  {ticket.urgency}
                </span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Suggested Action</p>
                <p className="text-foreground leading-relaxed">{ticket.suggestedAction}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-blue-950/40 border border-blue-900/40 text-blue-300 text-sm rounded-xl px-4 py-3 mb-3">
            <Clock className="w-4 h-4 flex-shrink-0" />
            Time saved: ~3–4 hrs/week not re-listening to and re-typing voicemails
          </div>
          <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-900/40 text-emerald-300 text-sm rounded-xl px-4 py-3 mb-5">
            <DollarSign className="w-4 h-4 flex-shrink-0" />
            Est. value: $500–$900/month in faster dispatch and fewer missed details
          </div>

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            Try Another Voicemail
          </button>
        </>
      )}
    </div>
  );
}
