import Image from "next/image";
export function HeroSection() {
  return (
    <section className="relative pt-16 ">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold">Discover Song Lyrics</h1>
        <div
          className="relative  overflow-hidden
  bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700
  text-white px-5 lg:px-20 rounded-3xl
  mt-6 flex justify-between h-[300px]"
        >
          {/* ✨ Sparkles */}
          <div className="sparkles" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold lg:mt-20 mt-10">
              The Worlds Largest Collection <br /> of Song Lyrics
            </h2>
            <p className="text-lg mt-4">
              Explore millions of song lyrics from your favorite artists
            </p>
          </div>

          <Image
            src="/images/music.png"
            alt="music"
            width={20}
            height={20}
            className="relative z-10 w-120 h-75 hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
