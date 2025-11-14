import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "your-secret-key";
const resultsStore = new Map();

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get("x-webhook-secret");
    if (secret !== WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      contactId,
      prenom,
      nom,
      telephone,
      status,
      details,
      timestamp,
      recordingUrl,
    } = body;

    const result = {
      contactId,
      prenom,
      nom,
      telephone,
      status,
      details,
      timestamp,
      recordingUrl,
    };
    resultsStore.set(contactId, result);

    console.log("Result received:", result);

    return NextResponse.json({ success: true, message: "Résultat enregistré" });
  } catch (error: any) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const results = Array.from(resultsStore.values());
    return NextResponse.json({ results });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
