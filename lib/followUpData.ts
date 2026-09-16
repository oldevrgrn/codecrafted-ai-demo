import type { BusinessType } from "./quoteData";

const jobNoun: Record<BusinessType, string> = {
  Roofing: "roof",
  HVAC: "HVAC system",
  Plumbing: "plumbing job",
  Landscaping: "landscaping project",
  "Pest Control": "pest control service",
  Electrical: "electrical job",
};

export function generateFollowUpSequence(
  businessType: BusinessType,
  jobDescription: string,
  customerName: string
) {
  const name = customerName.trim() || "there";
  const firstName = name.split(" ")[0];
  const noun = jobNoun[businessType];
  const job = jobDescription.trim() || `your ${noun.toLowerCase()}`;

  return [
    {
      day: "Day 1",
      label: "Same-day check-in",
      message: `Hi ${firstName}, this is following up on the quote we sent for ${job}. Just wanted to make sure it made it through and see if you had any questions before we lock in a schedule slot.`,
    },
    {
      day: "Day 3",
      label: "Value + urgency nudge",
      message: `Hi ${firstName}, wanted to check back in on the ${noun} estimate. Our schedule fills up fast this time of year, and getting it handled sooner usually means avoiding a bigger repair (and bigger bill) down the road. Happy to answer any questions or adjust the scope if needed.`,
    },
    {
      day: "Day 7",
      label: "Final low-pressure close",
      message: `Hi ${firstName}, last check-in from us on the ${noun} quote — no pressure at all. If now isn't the right time, just let us know and we'll follow up down the road. If you'd like to move forward, reply here and we'll get you on the calendar this week.`,
    },
  ];
}
