import { Card } from "@/components/ui/card"

const genres = [
  { name: "Pop", color: "from-pink-500 to-rose-500", icon: "🎤" },
  { name: "Rock", color: "from-red-500 to-orange-600", icon: "🎸" },
  { name: "Hip Hop", color: "from-purple-500 to-indigo-600", icon: "🎧" },
  { name: "Electronic", color: "from-cyan-500 to-blue-600", icon: "🎹" },
  { name: "R&B", color: "from-violet-500 to-purple-600", icon: "🎵" },
  { name: "Country", color: "from-amber-500 to-yellow-600", icon: "🪕" },
  { name: "Jazz", color: "from-blue-500 to-indigo-500", icon: "🎺" },
  { name: "Classical", color: "from-slate-600 to-gray-700", icon: "🎻" },
]

export function GenreSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold dark:text-white">Browse by Genre</h2>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {genres.map((genre) => (
            <Card
              key={genre.name}
              className="group relative h-40 cursor-pointer overflow-hidden border-zinc-800 bg-zinc-900 transition-all hover:scale-105 hover:border-pink-500/50"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-20 transition-opacity group-hover:opacity-30`}
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-3">
                <span className="text-4xl">{genre.icon}</span>
                <h3 className="text-2xl font-bold text-white">{genre.name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
