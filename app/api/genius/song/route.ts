import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) return NextResponse.json({ error: "Missing song ID" }, { status: 400 });

  try {
    const res = await fetch(`https://api.genius.com/songs/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
      },
      cache: "no-store",
    });

    if (!res.ok) return NextResponse.json({ error: "Failed to fetch song" }, { status: 500 });

    const data = await res.json();
    const song = data.response.song;

    return NextResponse.json({
      id: song.id,
      title: song.full_title,
      artist: song.primary_artist.name,
      image: song.song_art_image_url,
      url: song.url,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
