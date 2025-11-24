import { Card } from "@/components/ui/card"
import { Play, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredSongs = [
  // ...same data
]

export function FeaturedSongs() {
  return (
    <section className="bg-background py-16 transition-colors">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground">Popular Right Now</h2>
          <Button
            variant="link"
            className="text-pink-500 hover:text-pink-400 transition-colors"
          >
            See All
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {featuredSongs.map((song) => (
            <Card
              key={song.id}
              className="
                group cursor-pointer overflow-hidden 
                bg-card border-border 
                transition-all 
                hover:bg-accent hover:border-pink-500/50
                dark:hover:bg-zinc-800
              "
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={song.image || "/placeholder.svg"}
                  alt={`${song.title} album cover`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                  <Button
                    size="icon"
                    className="scale-0 rounded-full bg-pink-500 transition-all duration-300 group-hover:scale-100 hover:bg-pink-600"
                  >
                    <Play className="h-5 w-5" fill="currentColor" />
                  </Button>
                </div>

                {/* Heart button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="
                    absolute right-2 top-2 opacity-0 
                    transition-all duration-300 
                    group-hover:opacity-100 
                    hover:bg-white/30
                  "
                >
                  <Heart className="h-4 w-4 text-white" />
                </Button>
              </div>

              <div className="p-4">
                <h3 className="mb-1 font-semibold text-foreground leading-tight text-pretty">
                  {song.title}
                </h3>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
                <p className="text-xs text-muted-foreground">{song.album}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
