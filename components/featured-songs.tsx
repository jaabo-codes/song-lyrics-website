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

const featuredSongs: FeaturedSong[] = [
  {
    id: 1,
    rank: 1,
    title: "Vampire",
    artist: "Olivia Rodrigo",
    album: "GUTS",
    duration: "3:39",
    trend: "up",
    image: "./images/Vampire.jpeg"
  },
  {
    id: 2,
    rank: 2,
    title: "Paint The Town Red",
    artist: "Doja Cat",
    album: "Scarlet",
    duration: "3:50",
    trend: "up",
    image: "./images/paint.jpg"
  },
  {
    id: 3,
    rank: 3,
    title: "Cruel Summer",
    artist: "Taylor Swift",
    album: "Lover",
    duration: "2:58",
    trend: "steady",
    image: "./images/cruel.jpg"
  },
  {
    id: 4,
    rank: 4,
    title: "Snooze",
    artist: "SZA",
    album: "SOS",
    duration: "3:22",
    trend: "down",
    image: "./images/snooze.jpg"
  },
  {
    id: 5,
    rank: 5,
    title: "greedy",
    artist: "Tate McRae",
    album: "THINK LATER",
    duration: "2:11",
    trend: "up",
    image: "./images/greedy.jpg"
  }
]

const trendStyles: Record<SongTrend, { label: string; icon: typeof ArrowUp; className: string }> = {
  up: { label: "Trending up", icon: ArrowUp, className: "text-emerald-500" },
  down: { label: "Trending down", icon: ArrowDown, className: "text-rose-500" },
  steady: { label: "Holding", icon: Minus, className: "text-muted-foreground" }
}

export function FeaturedSongs() {
  return (
    <section className="bg-background py-16 transition-colors">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-foreground">Popular Right Now</h2>
          <Button
            variant="link"
            className="self-start text-pink-500 transition-colors hover:text-pink-400"
          >
            See All
          </Button>
        </div>

        <div className="space-y-4">
          {featuredSongs.map((song) => {
            const TrendIcon = trendStyles[song.trend].icon

            return (
              <Card
                key={song.id}
                className="flex flex-col gap-4 border border-border/60 bg-card/80 p-4 transition-all hover:border-pink-400/60 hover:bg-card"
              >
                <div className="flex items-center gap-4">
                  <div className="flex w-12 flex-col items-center text-muted-foreground">
                    <span className="text-lg font-semibold text-foreground">{song.rank}</span>
                    <TrendIcon
                      aria-hidden
                      className={`h-4 w-4 ${trendStyles[song.trend].className}`}
                    />
                  </div>

                  <img
                    src={song.image}
                    alt={`${song.title} album artwork`}
                    className="h-16 w-16 rounded-lg object-cover"
                  />

                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                    <div>
                      <p className="font-semibold leading-tight text-foreground">{song.title}</p>
                      <p className="text-sm text-muted-foreground">{song.artist}</p>
                    </div>

                    <p className="text-sm text-muted-foreground sm:ml-auto">{song.album}</p>
                  </div>

                  <div className="hidden text-sm text-muted-foreground md:block">{song.duration}</div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-muted-foreground hover:text-pink-500"
                      aria-label={`Favorite ${song.title}`}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      className="rounded-full bg-pink-500 text-white hover:bg-pink-600"
                      aria-label={`Play ${song.title}`}
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
