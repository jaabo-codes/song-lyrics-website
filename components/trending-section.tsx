"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TrendingSong {
  id: number
  title: string
  artist: string
  image: string
  rank?: number
}

export function TrendingSection() {
  const [trendingItems, setTrendingItems] = useState<TrendingSong[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/genius/trending?page=1")
        const data: TrendingSong[] = await res.json()

        // Take only top 5 & add rank
        const ranked = data.slice(0, 5).map((item, index) => ({
          ...item,
          rank: index + 1,
        }))

        setTrendingItems(ranked)
      } catch (err) {
        console.error("Failed to fetch trending songs", err)
      } finally {
        setLoading(false)
      }
    }

    fetchTrending()
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Trending Now
          </h2>
          <Button
            variant="link"
            className="text-pink-600 hover:text-pink-400 dark:text-pink-500"
          >
            View All
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {trendingItems.map((item) => (
            <Card
              key={item.id}
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

                {/* Image */}
                <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                  <img
                    src={item.image || "https://via.placeholder.com/300"}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />

                  {/* Hover Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/40">
                    <Button
                      size="icon"
                      className="scale-0 rounded-full bg-pink-500 transition-all group-hover:scale-100 hover:bg-pink-600"
                    >
                      <Play className="h-4 w-4" fill="currentColor" />
                    </Button>
                  </div>

                  {/* Rank */}
                  <span
                    className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full 
                    bg-white/90 text-zinc-900 
                    dark:bg-black/70 dark:text-white 
                    text-sm font-bold"
                  >
                    #{item.rank}
                  </span>
                </div>

                {/* Text */}
                <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-gray-400">
                  {item.artist}
                </p>

                {/* Static plays (API usually doesn't provide this) */}
                <p className="mt-1 text-xs text-zinc-500 dark:text-gray-500">
                  Trending
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
