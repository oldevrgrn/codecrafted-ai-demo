export type Urgency = "High" | "Medium" | "Low";

export type DispatchTicket = {
  callerName: string;
  callbackNumber: string;
  issueSummary: string;
  urgency: Urgency;
  suggestedAction: string;
};

export type VoicemailSample = {
  label: string;
  transcript: string;
  ticket: DispatchTicket;
};

export const voicemailSamples: VoicemailSample[] = [
  {
    label: "AC out in summer heat",
    transcript:
      "Hey uh, this is Mark Sanders, my number's 435-555-0182, um my AC hasn't been working since like yesterday and it's like 95 degrees in here, I really need someone to come out today if possible, thanks.",
    ticket: {
      callerName: "Mark Sanders",
      callbackNumber: "435-555-0182",
      issueSummary: "AC has been out since yesterday; indoor temp reported around 95°F.",
      urgency: "High",
      suggestedAction: "Dispatch same-day if possible — call back within 15 minutes to confirm arrival window.",
    },
  },
  {
    label: "Kitchen sink leaking",
    transcript:
      "Hi this is Linda, I don't know if this is the right number but my kitchen sink is leaking pretty bad, water's getting on the floor, can someone call me back, my number is 435-555-0199.",
    ticket: {
      callerName: "Linda",
      callbackNumber: "435-555-0199",
      issueSummary: "Kitchen sink leaking; water pooling on floor.",
      urgency: "High",
      suggestedAction: "Dispatch same-day if possible — call back within 15 minutes to confirm arrival window.",
    },
  },
  {
    label: "Storm damage, possible roof leak",
    transcript:
      "Yeah hi, this message is for the roofing company, we had a big storm last night and I think some shingles came off, I'm worried about a leak, please call me back when you can, this is Tom Bradley 435-555-0143.",
    ticket: {
      callerName: "Tom Bradley",
      callbackNumber: "435-555-0143",
      issueSummary: "Storm last night likely knocked shingles loose; caller concerned about a possible leak.",
      urgency: "Medium",
      suggestedAction: "Schedule within 2–3 business days — call back today to lock in a time and assess leak risk.",
    },
  },
];

const fillerWords = /\b(um+|uh+|like|you know|so yeah|yeah so)\b,?\s*/gi;

const highUrgencyWords = [
  "asap",
  "today",
  "emergency",
  "urgent",
  "right away",
  "as soon as possible",
  "leak",
  "leaking",
  "flooding",
  "flooded",
  "no heat",
  "no cooling",
  "no ac",
  "no a/c",
  "storm",
  "smell gas",
  "gas smell",
  "sparking",
  "smoke",
];

const mediumUrgencyWords = ["this week", "when you can", "few days", "soon", "worried"];

function extractName(text: string): string {
  const patterns = [
    /this is ([A-Z][a-z]+(?: [A-Z][a-z]+)?)/,
    /my name is ([A-Z][a-z]+(?: [A-Z][a-z]+)?)/i,
    /name'?s ([A-Z][a-z]+(?: [A-Z][a-z]+)?)/i,
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[1];
  }
  return "Not captured — verify on callback";
}

function extractPhone(text: string): string {
  const match = text.match(/(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/);
  return match ? match[1] : "Not provided — verify on callback";
}

export function classifyUrgency(text: string): Urgency {
  const lower = text.toLowerCase();
  if (highUrgencyWords.some((w) => lower.includes(w))) return "High";
  if (mediumUrgencyWords.some((w) => lower.includes(w))) return "Medium";
  return "Low";
}

function suggestedActionFor(urgency: Urgency): string {
  if (urgency === "High")
    return "Dispatch same-day if possible — call back within 15 minutes to confirm arrival window.";
  if (urgency === "Medium") return "Schedule within 2–3 business days — call back today to lock in a time.";
  return "Add to standard scheduling queue — call back within 24 hours.";
}

function cleanSummary(text: string): string {
  const cleaned = text
    .replace(fillerWords, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+,/g, ",")
    .trim();
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

export function buildDispatchTicket(transcript: string): DispatchTicket {
  const preset = voicemailSamples.find((s) => s.transcript === transcript);
  if (preset) return preset.ticket;

  const urgency = classifyUrgency(transcript);
  return {
    callerName: extractName(transcript),
    callbackNumber: extractPhone(transcript),
    issueSummary: cleanSummary(transcript),
    urgency,
    suggestedAction: suggestedActionFor(urgency),
  };
}
