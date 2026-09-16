import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

const demos = [
  {
    href: "/demos/missed-call",
    emoji: "📞",
    title: "Missed Call Auto Text-Back",
    description: "Never lose a lead again. AI texts back instantly when you miss a call.",
    gradient: "from-blue-600/20 to-blue-800/20",
  },
  {
    href: "/demos/quote-generator",
    emoji: "📋",
    title: "AI Quote Generator",
    description: "Generate professional quotes in seconds, not hours.",
    gradient: "from-emerald-600/20 to-emerald-800/20",
  },
  {
    href: "/demos/review-bot",
    emoji: "⭐",
    title: "Review Response Bot",
    description: "AI drafts perfect Google review replies instantly.",
    gradient: "from-amber-600/20 to-amber-800/20",
  },
  {
    href: "/demos/dispatch-ticket",
    emoji: "🎙️",
    title: "Voicemail → Dispatch Ticket",
    description: "A rambling voicemail becomes a clean, actionable dispatch ticket instantly.",
    gradient: "from-purple-600/20 to-purple-800/20",
  },
  {
    href: "/demos/chat-widget",
    emoji: "💬",
    title: "Instant Website Chat",
    description: "Ask your website a question. It answers instantly, day or night.",
    gradient: "from-cyan-600/20 to-cyan-800/20",
  },
  {
    href: "/demos/follow-up",
    emoji: "🔁",
    title: "Quote Follow-Up Sequence",
    description: "Generate a 3-touch text sequence so cold quotes don't stay cold.",
    gradient: "from-rose-600/20 to-rose-800/20",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-lg mx-auto px-4 pt-8 pb-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Zap className="w-4 h-4" />
          Live AI Demos
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3 leading-tight">
          See AI Save Your Business <span className="text-primary">20+ Hours</span> a Week
        </h1>
        <p className="text-muted-foreground text-base">
          Live demos tailored for local Southern Utah businesses
        </p>
      </div>

      <div className="space-y-4">
        {demos.map((demo) => (
          <Link key={demo.href} href={demo.href}>
            <div
              className={`relative overflow-hidden bg-gradient-to-br ${demo.gradient} border border-border rounded-2xl p-5 transition-all duration-200 active:scale-[0.98] hover:border-primary/50`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-card flex items-center justify-center text-2xl">
                  {demo.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-display font-bold text-lg text-foreground mb-1">
                    {demo.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {demo.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-muted-foreground">
          Tap any demo above to see <span className="text-primary font-medium">the automation</span> in action
        </p>
      </div>
    </div>
  );
}
