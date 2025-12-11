import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);

  const url = `https://api.genius.com/search?q=trending&page=${page}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
      },
      cache: "no-store",
    });

    const data = await res.json();

    if (!data.response?.hits) {
      return NextResponse.json([]);
    }

    const songs = data.response.hits.map((hit: any) => ({
      id: hit.result.id,
      title: hit.result.full_title,
      artist: hit.result.primary_artist.name,
      image: hit.result.song_art_image_url,
    }));

    return NextResponse.json(songs);
  } catch (error) {
    console.error(error);
    return NextResponse.json([]);
  }
}
