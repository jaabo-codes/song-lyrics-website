import { Button } from "@/components/ui/button";
import { Header } from "../header";
import { Card } from "@/components/ui/card"
import { TrendingUp, Play } from "lucide-react"

const trendingItems = [
  { rank: 1, title: "Blinding Lights", artist: "The Weeknd", plays: "2.5M", image: "./images/weeknd.jpg" },
  { rank: 2, title: "Shape of You", artist: "Ed Sheeran", plays: "2.3M", image: "./images/edsharen.jpg" },
  { rank: 3, title: "Someone Like You", artist: "Adele", plays: "2.1M", image: "./images/adele.jpeg" },
  { rank: 4, title: "Bohemian Rhapsody", artist: "Queen", plays: "1.9M", image: "./images/bohemian.jpeg" },
  { rank: 5, title: "Levitating", artist: "Dua Lipa", plays: "1.8M", image: "./images/dualipa.jpeg" },
]

export default function TrendingPage() {
  return (
    <section>
      <Header/>
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
                
                {/* Image */}
                <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                  <img
                    src={item.image}
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

                  <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full 
                    bg-white/90 text-zinc-900 
                    dark:bg-black/70 dark:text-white 
                    text-sm font-bold">
                    #{item.rank}
                  </span>
                </div>

                {/* Text */}
                <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-gray-400">{item.artist}</p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-gray-500">{item.plays} plays</p>
              </div>

            </Card>
          ))}
        </div>

         {/* Cards */}
         <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-5 mt-4">
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
                
                {/* Image */}
                <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                  <img
                    src={item.image}
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

                  <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full 
                    bg-white/90 text-zinc-900 
                    dark:bg-black/70 dark:text-white 
                    text-sm font-bold">
                    #{item.rank}
                  </span>
                </div>

                {/* Text */}
                <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-gray-400">{item.artist}</p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-gray-500">{item.plays} plays</p>
              </div>

            </Card>
          ))}
        </div>

         {/* Cards */}
         <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-5 mt-4">
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
                
                {/* Image */}
                <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                  <img
                    src={item.image}
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

                  <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full 
                    bg-white/90 text-zinc-900 
                    dark:bg-black/70 dark:text-white 
                    text-sm font-bold">
                    #{item.rank}
                  </span>
                </div>

                {/* Text */}
                <h3 className="mb-1 font-semibold text-zinc-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-gray-400">{item.artist}</p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-gray-500">{item.plays} plays</p>
              </div>

            </Card>
          ))}
        </div>

         {/* Cards */}
         <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-5 mt-4">
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
                
                {/* Image */}
                <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                  <img
                    src={item.image}
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

                  <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full 
                    bg-white/90 text-zinc-900 
                    dark:bg-black/70 dark:text-white 
                    text-sm font-bold">
                    #{item.rank}
                  </span>
                </div>

                {/* Text */}
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
