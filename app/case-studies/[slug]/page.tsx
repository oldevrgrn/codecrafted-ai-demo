import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";
import { categoryColor } from "@/components/CaseStudyCard";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  return {
    title: study ? `${study.title} | Code Crafted Case Studies` : "Case Study | Code Crafted",
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Case Studies
      </Link>

      <span
        className={`inline-block text-[10px] font-bold tracking-wide rounded-full px-2.5 py-1 border mb-3 ${
          categoryColor[study.category] ?? "bg-card border-border text-muted-foreground"
        }`}
      >
        {study.category}
      </span>
      <h1 className="font-display text-2xl font-extrabold text-foreground mb-2">{study.title}</h1>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{study.oneLiner}</p>

      <div className="space-y-4 mb-6">
        <div className="bg-card border border-border rounded-2xl p-5">
          <p className="font-display font-bold text-sm text-foreground mb-2">Problem</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{study.problem.text}</p>
          <p className="text-xs font-semibold text-amber-400 bg-amber-950/30 border border-amber-900/40 rounded-lg px-3 py-2 inline-block">
            {study.problem.stat}
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-5">
          <p className="font-display font-bold text-sm text-foreground mb-2">Solution</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{study.solution.text}</p>
          <p className="text-xs font-semibold text-blue-300 bg-blue-950/30 border border-blue-900/40 rounded-lg px-3 py-2 inline-block">
            {study.solution.stat}
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-5">
          <p className="font-display font-bold text-sm text-foreground mb-2">Results</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{study.results.text}</p>
          <p className="text-xs font-semibold text-emerald-300 bg-emerald-950/30 border border-emerald-900/40 rounded-lg px-3 py-2 inline-block">
            {study.results.stat}
          </p>
        </div>
      </div>

      <Link
        href="/case-studies"
        className="block w-full text-center bg-card border border-border hover:border-primary/50 text-foreground font-semibold rounded-xl py-3 text-sm transition-all active:scale-95"
      >
        View More Case Studies
      </Link>
    </div>
  );
}
