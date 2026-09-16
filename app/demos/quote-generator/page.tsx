"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, RotateCcw } from "lucide-react";
import { businessTypes, generateQuote, currency, type BusinessType } from "@/lib/quoteData";

export default function QuoteGeneratorDemo() {
  const [businessType, setBusinessType] = useState<BusinessType>("Roofing");
  const [jobDescription, setJobDescription] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [status, setStatus] = useState<"form" | "generating" | "done">("form");
  const [quote, setQuote] = useState<ReturnType<typeof generateQuote> | null>(null);

  function handleGenerate() {
    setStatus("generating");
    setTimeout(() => {
      setQuote(generateQuote(businessType, jobDescription, customerName));
      setStatus("done");
    }, 1200);
  }

  function reset() {
    setJobDescription("");
    setCustomerName("");
    setQuote(null);
    setStatus("form");
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Demos
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">📋</span>
        <h1 className="font-display text-2xl font-bold text-foreground">AI Quote Generator</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6">
        Generate a professional service quote in seconds, not hours.
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
              placeholder="e.g. Replace 30 squares of asphalt shingles on a 2-story home, includes tear-off and disposal"
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
            Generate Quote
          </button>
        </div>
      )}

      {status === "generating" && (
        <div className="bg-card border border-border rounded-2xl p-5 text-center">
          <p className="text-muted-foreground text-sm animate-pulse">AI is drafting your quote...</p>
        </div>
      )}

      {status === "done" && quote && (
        <>
          <div className="bg-card border border-border rounded-2xl p-5 mb-4 font-mono text-xs leading-relaxed whitespace-pre-wrap text-foreground overflow-x-auto">
            <p className="text-primary font-bold text-sm mb-3 font-sans">GENERATED QUOTE</p>
            <p className="font-bold">{quote.profile.name}</p>
            <p>{quote.profile.address}</p>
            <p>Phone: {quote.profile.phone}</p>
            <p>Email: {quote.profile.email}</p>
            <br />
            <p className="font-bold">SERVICE QUOTATION</p>
            <br />
            <p>Quote Number: {quote.quoteNumber}</p>
            <p>Date: {quote.dateStr}</p>
            <p>Prepared For: {quote.customerName}</p>
            <p>Project Address: Service Location Available Upon Approval</p>
            <br />
            <p className="font-bold">Description of Work:</p>
            <p>{quote.description}</p>
            <br />
            <p className="font-bold">Line Item Estimate:</p>
            {quote.lineItems.map((item, i) => (
              <div key={i} className="mb-1">
                <p>
                  {i + 1}. {item.label}
                </p>
                {item.detail && <p className="pl-3 text-muted-foreground">{item.detail}</p>}
                <p className="pl-3">{currency(item.price)}</p>
              </div>
            ))}
            <br />
            <p>Subtotal: {currency(quote.subtotal)}</p>
            <p>Sales Tax (8.35%): {currency(quote.tax)}</p>
            <p className="font-bold">Total: {currency(quote.total)}</p>
            <br />
            <p className="font-bold">Terms and Conditions:</p>
            <p>- Quote valid for 30 days from date issued.</p>
            <p>- Price includes standard installation labor and disposal as noted above.</p>
            <p>- Any code-required upgrades, permit fees not listed, structural repairs, or additional work are excluded unless specifically stated.</p>
            <p>- Work will be scheduled upon acceptance and receipt of deposit if required.</p>
            <p>- Payment due upon completion unless other arrangements are approved in writing.</p>
            <p>- Warranty coverage provided per manufacturer specifications and company labor warranty terms.</p>
            <br />
            <p className="font-bold">Acceptance:</p>
            <p>By authorizing this quote, customer agrees to the above scope, pricing, and terms.</p>
            <br />
            <p>Customer Signature: __________________________ Date: ______________</p>
            <p>Company Representative: ______________________ Date: ______________</p>
            <br />
            <p>Thank you for choosing {quote.profile.name}.</p>
          </div>

          <div className="flex items-center gap-2 bg-blue-950/40 border border-blue-900/40 text-blue-300 text-sm rounded-xl px-4 py-3 mb-3">
            <Clock className="w-4 h-4 flex-shrink-0" />
            Time saved: ~2 hrs/week on quoting
          </div>
          <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-900/40 text-emerald-300 text-sm rounded-xl px-4 py-3 mb-5">
            <DollarSign className="w-4 h-4 flex-shrink-0" />
            Est. value: $1,200–$2,000/month in faster close rates
          </div>

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            Generate Another Quote
          </button>
        </>
      )}
    </div>
  );
}
