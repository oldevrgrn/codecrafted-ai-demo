import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are transcribing a photo of a handwritten job-site note from a home service technician (HVAC, plumbing, roofing, electrical, landscaping, or pest control). Read the handwriting carefully, then rewrite it as a clean, professional job memo.

Format the memo with these plain-text section headers (no markdown symbols like # or **):

CUSTOMER / JOB INFO
WORK PERFORMED OR ISSUE FOUND
MATERIALS USED
FOLLOW-UP NEEDED
NOTES

Rules:
- Only include information that is actually present in the note. Leave a section out or write "Not noted" if nothing applies.
- Do not invent names, addresses, prices, or details that aren't in the photo.
- If a word or phrase is illegible, write [illegible] instead of guessing.
- Keep the tone factual and professional, like something an office manager could file directly.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "ANTHROPIC_API_KEY is not configured on the server. Add it in Vercel → Project → Settings → Environment Variables.",
      },
      { status: 500 }
    );
  }

  let body: { image?: string; mediaType?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { image, mediaType } = body;
  if (!image) {
    return NextResponse.json({ error: "No image provided." }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image",
                source: {
                  type: "base64",
                  media_type: mediaType || "image/jpeg",
                  data: image,
                },
              },
              {
                type: "text",
                text: "Transcribe and clean up this handwritten job note into the memo format described.",
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return NextResponse.json(
        { error: `Anthropic API error (${response.status}): ${errText}` },
        { status: 502 }
      );
    }

    const data = await response.json();
    const memo: string = data?.content?.[0]?.text ?? "No response generated.";
    return NextResponse.json({ memo });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error calling the AI model." },
      { status: 500 }
    );
  }
}
