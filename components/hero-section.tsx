import Laptop from "@/public/laptop.png";
export function HeroSection() {
  return (
    <section className="relative py-16 pb-32">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold">Discover Song Lyrics</h1>
        <div className="bg-black text-white p-20 rounded-3xl dark:bg-white dark:text-black mt-6 flex justify-between items-center">
          <div>
          <h2 className="text-3xl font-bold">The Worlds Largest Collection <br /> of Song Lyrics</h2>
          <p className="text-lg mt-4">Explore millions of song lyrics from your favorite artists</p>
          </div>
          <img src="./laptop.png" alt="" className="w-1/2" />
        </div>
      </div>
    </section>
  )
}