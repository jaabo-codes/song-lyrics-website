import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrendingSection } from "@/components/trending-section"
import { FeaturedSongs } from "@/components/featured-songs"
import { GenreSection } from "@/components/genre-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrendingSection />
        <FeaturedSongs />
        <GenreSection />
      </main>
      <Footer />
    </div>
  )
}
