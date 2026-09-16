export type MissedCallScenario = {
  callerName: string;
  callerFirstName: string;
  inquiry: string;
  inquiryLower: string;
  business: string;
};

export const missedCallScenarios: MissedCallScenario[] = [
  {
    callerName: "John Smith",
    callerFirstName: "John",
    inquiry: "Roof Repair Inquiry",
    inquiryLower: "roof repair inquiry",
    business: "Canyon Roofing",
  },
  {
    callerName: "Sarah Miller",
    callerFirstName: "Sarah",
    inquiry: "AC Unit Not Cooling",
    inquiryLower: "AC unit not cooling",
    business: "Desert Air HVAC",
  },
  {
    callerName: "Mike Thompson",
    callerFirstName: "Mike",
    inquiry: "Water Heater Leaking",
    inquiryLower: "water heater leaking",
    business: "Red Rock Plumbing",
  },
  {
    callerName: "Amanda Lee",
    callerFirstName: "Amanda",
    inquiry: "Termite Inspection Request",
    inquiryLower: "termite inspection request",
    business: "Sundown Pest Control",
  },
  {
    callerName: "Chris Parker",
    callerFirstName: "Chris",
    inquiry: "Sprinkler System Repair",
    inquiryLower: "sprinkler system repair",
    business: "Oasis Landscaping",
  },
  {
    callerName: "Jennifer Ortiz",
    callerFirstName: "Jennifer",
    inquiry: "Circuit Breaker Tripping",
    inquiryLower: "circuit breaker tripping",
    business: "Zion Electric",
  },
];

export function buildAutoReply(scenario: MissedCallScenario): string {
  return `Hi ${scenario.callerFirstName}, this is ${scenario.business}. Sorry we missed your call about your ${scenario.inquiryLower}. How can we help? Reply here or call us back.`;
}
