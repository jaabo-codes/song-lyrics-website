"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../header";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface Song {
  rank?: number;
  id: number;
  title: string;
  artist: string;
  image: string;
}

export default function TrendingPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Song[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Fetch Trending Songs
  const fetchSongs = async (pageNumber: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/genius/trending?page=${pageNumber}`);
      const data: Song[] = await res.json();
      if (data.length === 0) setHasMore(false);
      setSongs((prev) => [...prev, ...data]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Search Results
  const fetchSearchResults = async (query: string) => {
    if (!query) return setSearchResults([]);
    setSearchLoading(true);
    try {
      const res = await fetch(`/api/genius/search?q=${encodeURIComponent(query)}`);
      const data: Song[] = await res.json();
      setSearchResults(data);
    } catch (err) {
      console.error(err);
    } finally {
      setSearchLoading(false);
    }
  };

  // Initial trending songs
  useEffect(() => {
    fetchSongs(page);
  }, [page]);

  // Infinite scroll for trending
  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore && !searchQuery) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [loading, hasMore, searchQuery]);

  // Debounce search
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchSearchResults(searchQuery);
    }, 400);

    return () => clearTimeout(delay);
  }, [searchQuery]);

  const displayedSongs = searchQuery ? searchResults : songs;

  return (
    <section>
      <Header />
      <div className="container mx-auto px-6">

        {/* Search bar */}
        <div className="relative max-w-2xl w-full bg-white dark:bg-black rounded-full mt-12 border-2 border-black/20 dark:border-white/20 mb-8">
          <input
            type="text"
            placeholder="Search for songs, artists, or lyrics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-6 pr-32 py-4 rounded-full dark:text-white text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30 dark:focus:ring-white dark:placeholder:text-gray-300"
          />
          <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Search
          </Button>
        </div>

        {/* Song Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-5 ">
          {displayedSongs.map((item, index) => (
            <Link key={item.id} href={`/lyrics/${item.id}`}>
              <Card className="group cursor-pointer overflow-hidden bg-white border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 transition-all hover:bg-zinc-100 hover:border-pink-500/40 dark:hover:bg-zinc-800 dark:hover:border-pink-500/50">
                <div className="px-4">
                  <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={item.image || "https://via.placeholder.com/300"}
                      alt={item.title}
                      width={300}
                      height={300}
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
                  </div>
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white leading-tight">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-gray-400">{item.artist}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load more trigger */}
        {!searchQuery && (
          <div ref={loadMoreRef} className="h-10 flex justify-center items-center mt-4">
            {loading && <p className="text-gray-500 dark:text-gray-400">Loading more songs...</p>}
            {!hasMore && <p className="text-gray-500 dark:text-gray-400">No more songs</p>}
          </div>
        )}

        {/* Loading for search */}
        {searchLoading && (
          <p className="text-gray-500 dark:text-gray-400 mt-4">Searching...</p>
        )}
      </div>
    </section>
  );
}
