import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/caseStudies";

export const metadata = {
  title: "Case Studies | Code Crafted",
  description: "Real AI automation results from the platform behind Code Crafted's systems.",
};

export default function CaseStudiesPage() {
  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="text-center mb-8">
        <h1 className="font-display text-3xl font-extrabold text-foreground mb-2">Case Studies</h1>
        <p className="text-muted-foreground text-sm">Popular use-cases from our customers</p>
      </div>

      <div className="space-y-4">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </div>
  );
}
