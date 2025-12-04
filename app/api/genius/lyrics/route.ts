import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) return NextResponse.json({ error: "Missing URL" }, { status: 400 });

  try {
    const page = await fetch(url);
    const html = await page.text();

    const $ = cheerio.load(html);

    let lyrics = "";
    $('[data-lyrics-container="true"]').each((_, elem) => {
      lyrics += $(elem).text() + "\n";
    });

    if (!lyrics) lyrics = "Lyrics not found.";

    return NextResponse.json({ lyrics });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch lyrics" }, { status: 500 });
  }
}
