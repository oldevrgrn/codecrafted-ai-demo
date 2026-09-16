import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/caseStudies";

export const categoryColor: Record<string, string> = {
  "GEN AI": "bg-primary/10 text-primary border-primary/30",
  "STRUCTURED ML": "bg-cyan-950/40 text-cyan-300 border-cyan-900/40",
  OPTIMIZATION: "bg-emerald-950/40 text-emerald-300 border-emerald-900/40",
};

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-studies/${study.slug}`}>
      <div className="bg-card border border-border rounded-2xl p-5 h-full transition-all duration-200 active:scale-[0.98] hover:border-primary/50">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-bold text-base text-foreground">{study.title}</h3>
          <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{study.oneLiner}</p>
        <span
          className={`inline-block text-[10px] font-bold tracking-wide rounded-full px-2.5 py-1 border ${
            categoryColor[study.category] ?? "bg-card border-border text-muted-foreground"
          }`}
        >
          {study.category}
        </span>
      </div>
    </Link>
  );
}
