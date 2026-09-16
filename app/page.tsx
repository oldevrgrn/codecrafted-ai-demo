import Link from "next/link";
import { Zap, ArrowRight, Clock, DollarSign, TrendingUp } from "lucide-react";
import { site } from "@/lib/site";

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

const valueProps = [
  {
    icon: Clock,
    color: "text-blue-400 bg-blue-950/40 border-blue-900/40",
    title: "Time Reclaimed",
    body: "10–20+ hours back in your week — no more late nights writing quotes, chasing voicemails, or answering the same three questions on the phone.",
  },
  {
    icon: DollarSign,
    color: "text-emerald-400 bg-emerald-950/40 border-emerald-900/40",
    title: "Revenue Protected",
    body: "A single HVAC replacement, roof, or legal case can run $3,000–$25,000+. The first business to respond usually wins the job — these systems make sure that's you.",
  },
  {
    icon: TrendingUp,
    color: "text-amber-400 bg-amber-950/40 border-amber-900/40",
    title: "Revenue Captured",
    body: "Recovering just one lost lead or cold quote a month typically covers this entire service. Everything after that is pure upside — and it keeps compounding.",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-lg mx-auto px-4 pt-8 pb-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <Zap className="w-4 h-4" />
          Done-With-You AI Automation
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3 leading-tight">
          See AI Save Your Business <span className="text-primary">20+ Hours</span> a Week
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          {site.name} builds and manages custom AI systems for Southern Utah trades, law, and
          service businesses — so you stop losing leads to slow callbacks, buried quotes, and
          unanswered reviews. We set it up and run it with you, week after week, for a flat
          monthly rate. No agency retainer, no dev team, no guesswork.
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

      <div className="mt-6 mb-10 text-center">
        <p className="text-xs text-muted-foreground">
          Tap any demo above to see <span className="text-primary font-medium">the automation</span> in action
        </p>
      </div>

      <div className="border-t border-border pt-8">
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            What This Actually Adds Up To
          </h2>
          <p className="text-muted-foreground text-sm">
            This isn't about looking modern. It's about the math.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {valueProps.map((prop) => (
            <div key={prop.title} className="bg-card border border-border rounded-2xl p-4 flex gap-3">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center ${prop.color}`}
              >
                <prop.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-foreground mb-1">{prop.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{prop.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-5 text-center">
          <p className="text-sm text-foreground leading-relaxed mb-4">
            For a flat monthly rate, I build these systems for your business and keep improving
            them with you every week — not a one-time install and disappear. Most owners see it
            pay for itself with the very first recovered lead.
          </p>
          <div className="flex gap-3">
            <a
              href={`tel:${site.phone}`}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl py-3 text-sm transition-all active:scale-95"
            >
              Book Free Assessment
            </a>
            <a
              href={`sms:${site.phone}`}
              className="flex-1 bg-card border border-border hover:border-primary/50 text-foreground font-semibold rounded-xl py-3 text-sm transition-all active:scale-95"
            >
              Text Instead
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
