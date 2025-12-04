import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);

  try {
    const res = await fetch(
      `https://api.genius.com/search?q=top&page=${page}`,
      {
        headers: { Authorization: `Bearer ${process.env.GENIUS_ACCESS_TOKEN}` },
        cache: "no-store",
      }
    );

    if (!res.ok) return NextResponse.json([]);

    const data = await res.json();

    const songs = data.response.hits.slice(0, 20).map((hit: any, index: number) => ({
      rank: (page - 1) * 20 + index + 1,
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