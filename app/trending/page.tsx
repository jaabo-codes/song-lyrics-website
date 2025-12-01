async function getTrendingSongs() {
  const API_KEY = process.env.NEXT_PUBLIC_LASTFM_KEY;

  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) {
      console.error('API Error:', res.status);
      return [];
    }

    const data = await res.json();

    // Debug logs
    console.log('API Response:', data);
    if (data.tracks?.track?.[0]) {
      console.log('First track:', data.tracks.track[0]);
      console.log('First track images:', data.tracks.track[0].image);
    }

    if (!data.tracks || !data.tracks.track) {
      console.error('No tracks in response');
      return [];
    }

    return data.tracks.track.map((track, index) => {
      // Get the largest available image
      const imageUrl = track.image?.find(img => img.size === 'extralarge')?.[`#text`] ||
                       track.image?.find(img => img.size === 'large')?.[`#text`] ||
                       track.image?.find(img => img.size === 'medium')?.[`#text`] ||
                       track.image?.[3]?.[`#text`] ||
                       track.image?.[2]?.[`#text`] ||
                       'https://via.placeholder.com/300x300?text=No+Image';

      console.log(`Track ${index + 1} image:`, imageUrl);

      return {
        rank: index + 1,
        title: track.name || 'Unknown',
        artist: track.artist?.name || 'Unknown Artist',
        plays: track.playcount || '0',
        image: imageUrl,
      };
    });
  } catch (error) {
    console.error('Error fetching songs:', error);
    return [];
  }
}

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Header } from "../header";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export default async function TrendingPage() {
  const trendingItems = await getTrendingSongs();

  if (!trendingItems || trendingItems.length === 0) {
    return (
      <section>
        <Header />
        <div className="container mx-auto px-6 mt-20">
          <p className="text-center text-zinc-600 dark:text-zinc-400">
            No trending songs available. Check console for errors.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <Header />
      <div className="container mx-auto px-6">

        {/* Search bar */}
        <div className="relative max-w-2xl w-full bg-white dark:bg-black rounded-full mt-12 border-2 border-black/20 dark:border-white/20">
          <input
            type="text"
            placeholder="Search for songs, artists, or lyrics..."
            className="
              w-full pl-6 pr-32 py-4 rounded-full dark:text-white text-gray-900
              focus:outline-none focus:ring-4 focus:ring-white/30 dark:focus:ring-white dark:placeholder:text-gray-300
            "
          />
          <Button
            className="
              absolute right-2 top-1/2 -translate-y-1/2
              bg-pink-600 hover:bg-pink-700 text-white
              px-6 py-2 rounded-full font-medium transition-colors
            "
          >
            Search
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-5 mt-20">
          {trendingItems.map((item) => (
            <Card
              key={item.rank}
              className="
                group cursor-pointer overflow-hidden 
                bg-white border-zinc-200 
                dark:bg-zinc-900 dark:border-zinc-800 
                transition-all 
                hover:bg-zinc-100 hover:border-pink-500/40
                dark:hover:bg-zinc-800 dark:hover:border-pink-500/50
              "
            >
              <div className="px-4">

                <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    loading={item.rank <= 5 ? "eager" : "lazy"}
                    priority={item.rank <= 5}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/40">
                    <Button
                      size="icon"
                      className="scale-0 rounded-full bg-pink-500 transition-all group-hover:scale-100 hover:bg-pink-600"
                    >
                      <Play className="h-4 w-4" fill="currentColor" />
                    </Button>
                  </div>

                  <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full 
                    bg-white/90 text-zinc-900 
                    dark:bg-black/70 dark:text-white 
                    text-sm font-bold"
                  >
                    #{item.rank}
                  </span>
                </div>

                <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-gray-400">{item.artist}</p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-gray-500">{item.plays} plays</p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}