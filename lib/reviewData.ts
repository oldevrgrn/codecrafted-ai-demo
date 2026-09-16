export type SampleReview = {
  name: string;
  text: string;
  sentiment: "positive" | "neutral" | "negative";
  response: string;
};

export const sampleReviews: SampleReview[] = [
  {
    name: "Jessica R.",
    text: "Amazing work! The team showed up on time, finished ahead of schedule, and left the place spotless. Will definitely use again!",
    sentiment: "positive",
    response:
      "Thank you so much for the kind words, Jessica! We're thrilled the team was on time, efficient, and left everything spotless — that's exactly the experience we aim to deliver every time. We really appreciate you taking the time to share this, and we look forward to working with you again!",
  },
  {
    name: "David K.",
    text: "Work was fine but took longer than expected and communication could have been better. Might use again.",
    sentiment: "neutral",
    response:
      "Thank you for the honest feedback, David. We're glad the work got done, but we're sorry the timeline and communication didn't meet your expectations — that's genuinely useful for us to hear. We're always working to tighten up our scheduling and updates, and we'd love the chance to show you a better experience next time.",
  },
  {
    name: "Robert M.",
    text: "Showed up 2 hours late, didn't finish the job, and still charged full price. Very disappointed.",
    sentiment: "negative",
    response:
      "Thank you for sharing your feedback, and we're truly sorry to hear about your experience. We understand how frustrating it is when timing and expectations aren't met, and we apologize for the inconvenience caused. This is not the standard we aim to deliver, and we'd appreciate the opportunity to look into what happened and make this right. Please reach out to our team directly so we can review the details of your appointment and work toward a fair solution. We value the chance to improve and are committed to providing a better experience moving forward.",
  },
];

const negativeWords = [
  "late",
  "disappointed",
  "worst",
  "refund",
  "never again",
  "rude",
  "overcharged",
  "damaged",
  "broken",
  "terrible",
  "awful",
  "unprofessional",
  "cancel",
];

const neutralWords = [
  "fine",
  "ok",
  "okay",
  "could have been better",
  "average",
  "decent",
  "took longer",
  "expected more",
];

export function classifySentiment(text: string): "positive" | "neutral" | "negative" {
  const lower = text.toLowerCase();
  if (negativeWords.some((w) => lower.includes(w))) return "negative";
  if (neutralWords.some((w) => lower.includes(w))) return "neutral";
  return "positive";
}

const genericResponses: Record<"positive" | "neutral" | "negative", string> = {
  positive:
    "Thank you so much for the great review! We're so glad you had a great experience with our team, and we really appreciate you taking the time to share it. We look forward to working with you again!",
  neutral:
    "Thank you for taking the time to leave this feedback. We're glad we could get the job done, and we take your comments seriously as we look for ways to improve the experience going forward. We'd welcome the chance to earn a five-star visit next time.",
  negative:
    "Thank you for sharing your feedback, and we're truly sorry to hear about your experience. This isn't the standard we aim to deliver, and we'd appreciate the opportunity to make this right. Please reach out to our team directly so we can look into what happened and find a fair resolution.",
};

export function generateReviewResponse(reviewText: string, matchedName?: string): string {
  const preset = sampleReviews.find((r) => r.text === reviewText);
  if (preset) return preset.response;

  const sentiment = classifySentiment(reviewText);
  const base = genericResponses[sentiment];
  return matchedName ? base.replace("Thank you", `Thank you, ${matchedName},`) : base;
}
