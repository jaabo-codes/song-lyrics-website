import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) return NextResponse.json([]);

  try {
    const res = await fetch(
      `https://api.genius.com/search?q=${encodeURIComponent(query)}`,
      {
        headers: { Authorization: `Bearer ${process.env.GENIUS_ACCESS_TOKEN}` },
        cache: "no-store",
      }
    );

    if (!res.ok) return NextResponse.json([]);

    const data = await res.json();

    const songs = data.response.hits.slice(0, 10).map((hit: any, index: number) => ({
      id: hit.result.id,
      title: hit.result.full_title,
      artist: hit.result.primary_artist.name,
      image: hit.result.song_art_image_url,
    }));

    return NextResponse.json(songs);
  } catch (err) {
    console.error(err);
    return NextResponse.json([]);
  }
}
