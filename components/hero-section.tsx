import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-pink-500 via-purple-900 to-indigo-600 py-16 pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Discover Song Lyrics
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Explore millions of song lyrics from your favorite artists
          </p>

          {/* Search bar */}
          <div className="relative max-w-2xl w-full bg-white rounded-full">
            <input
              type="text"
              placeholder="Search for songs, artists, or lyrics..."
              className="
                w-full pl-6 pr-32 py-4 rounded-full text-gray-900
                focus:outline-none focus:ring-4 focus:ring-white/30
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
        </div>
      </div>
      
      {/* Gradient fade to white */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white dark:to-black"></div>
    </section>
  )
}