export type FaqEntry = {
  keywords: string[];
  answer: string;
};

export const quickReplies: string[] = [
  "Do you service my area?",
  "What are your rates?",
  "Is this an emergency line?",
  "What are your hours?",
];

export const faqEntries: FaqEntry[] = [
  {
    keywords: ["area", "service", "location", "zip", "city", "cover"],
    answer:
      "We serve St. George, Washington, Hurricane, Santa Clara, Ivins, and the surrounding Southern Utah area. If you let us know your city, we can confirm right away — or a team member will text you back within a few minutes to confirm.",
  },
  {
    keywords: ["rate", "price", "cost", "charge", "much", "fee", "estimate", "quote"],
    answer:
      "Pricing depends on the specific job, but most estimates are free. If you can share a quick description of what's going on, we'll get you a ballpark number right now and a technician can follow up to confirm on-site.",
  },
  {
    keywords: ["emergency", "urgent", "asap", "now", "tonight", "24/7", "24 hour"],
    answer:
      "Yes — we offer emergency service. If this can't wait, tap Call below and you'll reach our line directly. Otherwise, let us know what's happening and we'll prioritize getting back to you fast.",
  },
  {
    keywords: ["hour", "open", "close", "weekend", "saturday", "sunday"],
    answer:
      "Our standard hours are Monday–Friday, 8am–6pm, with emergency service available outside that window. Message us anytime and we'll respond as soon as we're back online.",
  },
  {
    keywords: ["warranty", "guarantee"],
    answer:
      "All of our work is backed by a labor warranty, and manufacturer warranties apply to parts and equipment. Happy to send over the specifics for your job.",
  },
  {
    keywords: ["payment", "financing", "card", "cash", "pay"],
    answer:
      "We accept all major cards, and financing options are available for larger jobs. We can walk you through options once we know the scope of the work.",
  },
];

const fallbackAnswer =
  "Thanks for reaching out! A team member will follow up shortly to help with that. In the meantime, feel free to call or text us directly using the buttons below.";

export function matchFaqAnswer(message: string): string {
  const lower = message.toLowerCase();
  const match = faqEntries.find((entry) => entry.keywords.some((k) => lower.includes(k)));
  return match ? match.answer : fallbackAnswer;
}
