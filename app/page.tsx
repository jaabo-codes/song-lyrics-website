import { Header } from "@/app/header"
import { HeroSection } from "@/components/hero-section"
import { TrendingSection } from "@/components/trending-section"
import { FeaturedSongs } from "@/components/featured-songs"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrendingSection />
        <FeaturedSongs />
      </main>
    </div>
  )
}
