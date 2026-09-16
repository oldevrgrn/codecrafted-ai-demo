"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, RotateCcw, Camera, Upload } from "lucide-react";

type Status = "idle" | "generating" | "done" | "error";

export default function NoteScannerDemo() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [memo, setMemo] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setImagePreview(dataUrl);
      scanNote(dataUrl, file.type || "image/jpeg");
    };
    reader.readAsDataURL(file);
  }

  async function scanNote(dataUrl: string, mediaType: string) {
    setStatus("generating");
    setError("");
    try {
      const base64 = dataUrl.split(",")[1];
      const res = await fetch("/api/scan-note", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ image: base64, mediaType }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong scanning the note.");
      }
      setMemo(data.memo);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  function reset() {
    setImagePreview(null);
    setMemo("");
    setError("");
    setStatus("idle");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Demos
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">📝</span>
        <h1 className="font-display text-2xl font-bold text-foreground">Sloppy Note → Clean Memo</h1>
      </div>
      <p className="text-muted-foreground text-sm mb-6">
        Snap a photo of a handwritten job note. AI turns it into a clean, filed-ready memo.
      </p>

      {status === "idle" && (
        <div className="bg-card border border-border rounded-2xl p-5 text-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
          <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
            <Camera className="w-7 h-7 text-purple-400" />
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            Take a photo of a handwritten note, or upload one from your camera roll.
          </p>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            <Upload className="w-4 h-4" />
            Take or Upload Photo
          </button>
        </div>
      )}

      {status === "generating" && (
        <div className="bg-card border border-border rounded-2xl p-5 text-center">
          {imagePreview && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imagePreview} alt="Uploaded note" className="rounded-xl mb-4 max-h-60 mx-auto object-contain" />
          )}
          <p className="text-muted-foreground text-sm animate-pulse">AI is reading the handwriting...</p>
        </div>
      )}

      {status === "error" && (
        <>
          <div className="bg-red-950/40 border border-red-900/50 rounded-2xl p-5 mb-4">
            <p className="text-sm text-red-300 leading-relaxed">{error}</p>
          </div>
          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
        </>
      )}

      {status === "done" && (
        <>
          {imagePreview && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imagePreview} alt="Uploaded note" className="rounded-xl mb-4 max-h-48 mx-auto object-contain" />
          )}
          <div className="bg-card border border-border rounded-2xl p-5 mb-4 font-mono text-xs leading-relaxed whitespace-pre-wrap text-foreground overflow-x-auto">
            <p className="text-primary font-bold text-sm mb-3 font-sans">CLEANED-UP MEMO</p>
            {memo}
          </div>

          <div className="flex items-center gap-2 bg-blue-950/40 border border-blue-900/40 text-blue-300 text-sm rounded-xl px-4 py-3 mb-3">
            <Clock className="w-4 h-4 flex-shrink-0" />
            Time saved: ~5 hrs/week on paperwork and re-typing notes
          </div>
          <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-900/40 text-emerald-300 text-sm rounded-xl px-4 py-3 mb-5">
            <DollarSign className="w-4 h-4 flex-shrink-0" />
            Est. value: $800–$1,500/month in reclaimed office time
          </div>

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            Scan Another Note
          </button>
        </>
      )}
    </div>
  );
}
