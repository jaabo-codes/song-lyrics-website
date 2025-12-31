"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Play, ArrowUp, ArrowDown, Minus } from "lucide-react"


type SongTrend = "up" | "down" | "steady"

type FeaturedSong = {
  id: number
  rank: number
  title: string
  artist: string
  album: string
  duration: string
  image: string
  trend: SongTrend
}

const trendStyles = {
  up: { icon: ArrowUp, className: "text-emerald-500" },
  down: { icon: ArrowDown, className: "text-rose-500" },
  steady: { icon: Minus, className: "text-muted-foreground" }
}

export function FeaturedSongs() {
  const [songs, setSongs] = useState<FeaturedSong[]>([])

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch("/api/genius/trending?page=1")
        const data = await res.json()

        const previousRanks: Record<number, number> =
          JSON.parse(localStorage.getItem("songRanks") || "{}")

        const mapped: FeaturedSong[] = data.slice(5, 10).map((song: any, index: number) => {
          const rank = index + 1
          const prevRank = previousRanks[song.id]

          let trend: SongTrend = "steady"
          if (prevRank) {
            if (rank < prevRank) trend = "up"
            else if (rank > prevRank) trend = "down"
          }

          return {
            id: song.id,
            rank,
            title: song.title,
            artist: song.artist,
            album: "Unknown Album",
            duration: "--:--",
            image: song.image || "https://via.placeholder.com/150",
            trend
          }
        })

        // store current ranks
        const rankMap: Record<number, number> = {}
        mapped.forEach((s) => (rankMap[s.id] = s.rank))
        localStorage.setItem("songRanks", JSON.stringify(rankMap))

        setSongs(mapped)
      } catch (err) {
        console.error("Failed to fetch featured songs", err)
      }
    }

    fetchFeatured()
  }, [])

  return (
    <section className="bg-background py-16 transition-colors">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-foreground">Popular Right Now</h2>
          <Button variant="link" className="self-start text-pink-500 hover:text-pink-400">
            See All
          </Button>
        </div>

        <div className="space-y-4">
          {songs.map((song) => {
            const TrendIcon = trendStyles[song.trend].icon

            return (
              <Card
                key={song.id}
                className="flex flex-col gap-4 border border-border/60 bg-card/80 p-4 transition-all hover:border-pink-400/60 hover:bg-card"
              >
                <div className="flex items-center gap-4">
                  <div className="flex w-12 flex-col items-center text-muted-foreground">
                    <span className="text-lg font-semibold text-foreground">
                      {song.rank}
                    </span>
                    <TrendIcon className={`h-4 w-4 ${trendStyles[song.trend].className}`} />
                  </div>

                  <img
                    src={song.image}
                    alt={song.title}
                    className="h-16 w-16 rounded-lg object-cover"
                  />

                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                    <div>
                      <p className="font-semibold leading-tight">{song.title}</p>
                      <p className="text-sm text-muted-foreground">{song.artist}</p>
                    </div>

                    <p className="text-sm text-muted-foreground sm:ml-auto">
                      {song.album}
                    </p>
                  </div>

                  <div className="hidden text-sm text-muted-foreground md:block">
                    {song.duration}
                  </div>

                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      className="rounded-full bg-pink-500 text-white hover:bg-pink-600"
                    >
                      <Play className="h-4 w-4" fill="currentColor" />
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
