import Image from "next/image";

async function getSong(id: string) {
  const res = await fetch(`http://localhost:3000/api/genius/song?id=${id}`);
  if (!res.ok) throw new Error("Failed to fetch song");
  return res.json();
}

async function getLyrics(url: string) {
  const res = await fetch(`http://localhost:3000/api/genius/lyrics?url=${url}`);
  if (!res.ok) throw new Error("Failed to fetch lyrics");
  return res.json();
}

interface LyricsPageProps {
  params: { id: string };
}

export default async function LyricsPage({ params }: LyricsPageProps) {
  const song = await getSong(params.id);
  const lyrics = await getLyrics(song.url);

  return (
    <div className="container mx-auto px-6 mt-12">
      <h1 className="text-3xl font-bold mb-3 dark:text-white">{song.title}</h1>
      <p className="text-gray-500 mb-6 dark:text-gray-400">{song.artist}</p>

      <Image
        src={song.image || "https://via.placeholder.com/500"}
        width={500}
        height={500}
        alt={song.title}
        className="rounded-lg mb-8"
      />

      <pre className="whitespace-pre-wrap text-lg leading-relaxed dark:text-gray-200">
        {lyrics.lyrics || "Lyrics not found"}
      </pre>
    </div>
  );
}
