import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { totalContacts, completedAt } = body;

    console.log("Campaign completed:", { totalContacts, completedAt });

    return NextResponse.json({ success: true, message: "Campagne terminée" });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
