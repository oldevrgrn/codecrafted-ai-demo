export type BusinessType =
  | "Roofing"
  | "HVAC"
  | "Plumbing"
  | "Landscaping"
  | "Pest Control"
  | "Electrical";

export const businessTypes: BusinessType[] = [
  "Roofing",
  "HVAC",
  "Plumbing",
  "Landscaping",
  "Pest Control",
  "Electrical",
];

type LineItem = { label: string; detail: string; price: number };

type CompanyProfile = {
  name: string;
  address: string;
  phone: string;
  email: string;
  lineItems: LineItem[];
  laborLabel: string;
  laborPrice: number;
};

const profiles: Record<BusinessType, CompanyProfile> = {
  HVAC: {
    name: "ABC Comfort Solutions",
    address: "1234 Main Street\nAnytown, USA 00000",
    phone: "(555) 123-4567",
    email: "service@abccomfortsolutions.com",
    lineItems: [
      { label: "Equipment / Primary Unit", detail: "High-efficiency HVAC equipment, factory standard", price: 2850 },
      { label: "Removal and Disposal of Existing Equipment", detail: "Safe disconnect, haul-away, and recycling fee", price: 275 },
      { label: "Refrigerant Recovery / System Handling", detail: "EPA-compliant refrigerant recovery and service procedures", price: 185 },
      { label: "Electrical Disconnect and Reconnect", detail: "Inspect and reconnect existing electrical components as needed", price: 160 },
      { label: "Refrigerant Line Set / Minor Materials", detail: "Brazing materials, fittings, sealants, and incidentals", price: 145 },
      { label: "Vacuum, Pressure Test, and Startup Commissioning", detail: "Nitrogen test, evacuation, system startup, and performance verification", price: 240 },
    ],
    laborLabel: "HVAC Installation Labor",
    laborPrice: 1150,
  },
  Roofing: {
    name: "Summit Roofing Co.",
    address: "842 Ridgeline Drive\nAnytown, USA 00000",
    phone: "(555) 234-5678",
    email: "office@summitroofingco.com",
    lineItems: [
      { label: "Roofing Materials", detail: "Architectural asphalt shingles, factory standard bundle", price: 4200 },
      { label: "Tear-Off and Disposal", detail: "Removal and haul-away of existing roofing material", price: 950 },
      { label: "Underlayment and Ice/Water Shield", detail: "Synthetic underlayment and code-required barrier", price: 480 },
      { label: "Flashing and Ventilation", detail: "New drip edge, step flashing, and ridge ventilation", price: 390 },
      { label: "Permit and Disposal Fee", detail: "Local permit filing and dump fees", price: 220 },
    ],
    laborLabel: "Roofing Installation Labor",
    laborPrice: 2600,
  },
  Plumbing: {
    name: "Rapid Flow Plumbing",
    address: "560 Riverbend Road\nAnytown, USA 00000",
    phone: "(555) 345-6789",
    email: "dispatch@rapidflowplumbing.com",
    lineItems: [
      { label: "Plumbing Fixture / Equipment", detail: "Standard-grade fixture or component, factory new", price: 1150 },
      { label: "Removal and Disposal of Existing Fixture", detail: "Safe disconnect and haul-away", price: 145 },
      { label: "Supply Line and Shutoff Valve", detail: "New braided supply lines and shutoff valve replacement", price: 95 },
      { label: "Fittings, Sealants, and Minor Materials", detail: "Solder, PEX fittings, tape, and incidentals", price: 85 },
      { label: "Pressure Test and Leak Check", detail: "Full system pressure test and leak verification", price: 110 },
    ],
    laborLabel: "Plumbing Labor",
    laborPrice: 480,
  },
  Landscaping: {
    name: "GreenScape Design Co.",
    address: "77 Desert Bloom Way\nAnytown, USA 00000",
    phone: "(555) 456-7890",
    email: "hello@greenscapedesignco.com",
    lineItems: [
      { label: "Plant Material / Sod / Rock", detail: "Selected plant material, sod, or decorative rock per plan", price: 1650 },
      { label: "Site Preparation and Grading", detail: "Debris removal, soil grading, and weed barrier install", price: 620 },
      { label: "Irrigation Materials", detail: "Drip line, sprinkler heads, and valve components", price: 340 },
      { label: "Mulch, Edging, and Finish Materials", detail: "Steel edging, mulch, and finish detailing", price: 210 },
      { label: "Disposal / Haul-Away Fee", detail: "Green waste removal and dump fees", price: 130 },
    ],
    laborLabel: "Landscape Installation Labor",
    laborPrice: 980,
  },
  "Pest Control": {
    name: "Guardian Pest Solutions",
    address: "310 Sagebrush Lane\nAnytown, USA 00000",
    phone: "(555) 567-8901",
    email: "service@guardianpestsolutions.com",
    lineItems: [
      { label: "Initial Treatment Application", detail: "EPA-registered product application, interior and exterior", price: 285 },
      { label: "Exterior Perimeter Barrier", detail: "Foundation and entry-point treatment", price: 145 },
      { label: "Interior Spot Treatment", detail: "Targeted treatment of identified problem areas", price: 95 },
      { label: "Monitoring Stations / Materials", detail: "Bait stations or traps as required", price: 65 },
    ],
    laborLabel: "Technician Service Labor",
    laborPrice: 210,
  },
  Electrical: {
    name: "BrightLine Electric",
    address: "990 Voltage Court\nAnytown, USA 00000",
    phone: "(555) 678-9012",
    email: "office@brightlineelectric.com",
    lineItems: [
      { label: "Electrical Components / Panel Materials", detail: "Breakers, panel, or fixture hardware, factory new", price: 1450 },
      { label: "Removal and Disposal of Existing Components", detail: "Safe disconnect and haul-away", price: 165 },
      { label: "Wiring and Conduit Materials", detail: "THHN wire, conduit, and connectors as required by code", price: 220 },
      { label: "Permit and Inspection Fee", detail: "Local permit filing and inspection coordination", price: 175 },
      { label: "Code Compliance and Grounding Check", detail: "Full circuit test and grounding verification", price: 130 },
    ],
    laborLabel: "Electrical Labor",
    laborPrice: 890,
  },
};

export function generateQuote(
  businessType: BusinessType,
  jobDescription: string,
  customerName: string
) {
  const profile = profiles[businessType];
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const quoteNumber = `Q-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
    now.getDate()
  ).padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`;

  const lineItems = [
    ...profile.lineItems,
    { label: profile.laborLabel, detail: "", price: profile.laborPrice },
  ];

  const subtotal = lineItems.reduce((sum, item) => sum + item.price, 0);
  const taxRate = 0.0835;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const description = jobDescription.trim()
    ? `Complete the following scope of work as requested: ${jobDescription.trim()}. All labor performed by licensed, insured technicians in accordance with manufacturer specifications and applicable local code requirements.`
    : `Scope of work to be confirmed upon site visit. All labor performed by licensed, insured technicians in accordance with manufacturer specifications and applicable local code requirements.`;

  return {
    profile,
    quoteNumber,
    dateStr,
    description,
    lineItems,
    subtotal,
    tax,
    total,
    customerName: customerName.trim() || "Valued Customer",
  };
}

export const currency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });
