import { NextRequest, NextResponse } from "next/server";

// n8n webhook URL
const N8N_WEBHOOK_URL =
  "https://athenamarseille.app.n8n.cloud/webhook-test/voicecheck-start";

// Pull secret from environment variables
const WEBHOOK_SECRET = process.env.N8N_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contacts } = body;

    if (!contacts || !Array.isArray(contacts) || contacts.length === 0) {
      return NextResponse.json(
        { error: "Aucun contact fourni" },
        { status: 400 }
      );
    }

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-secret": WEBHOOK_SECRET || "",
      },
      body: JSON.stringify({ contacts }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook failed: ${response.status}`);
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: "Campagne lancée avec succès",
      data: result,
    });
  } catch (error: any) {
    console.error("Error starting campaign:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors du lancement de la campagne" },
      { status: 500 }
    );
  }
}
