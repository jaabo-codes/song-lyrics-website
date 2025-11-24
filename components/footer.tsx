import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                OnlineSongsLyrics
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for discovering and enjoying song lyrics from artists around the world.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/discover" className="hover:text-pink-500 transition-colors">Discover</Link></li>
              <li><Link href="/trending" className="hover:text-pink-500 transition-colors">Trending</Link></li>
              <li><Link href="/artists" className="hover:text-pink-500 transition-colors">Artists</Link></li>
              <li><Link href="/albums" className="hover:text-pink-500 transition-colors">Albums</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-pink-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-pink-500 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-pink-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-pink-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Follow Us</h3>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="
                    flex h-9 w-9 items-center justify-center rounded-lg 
                    bg-card text-muted-foreground border border-border
                    transition-colors 
                    hover:bg-pink-500 hover:text-white
                  "
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OnlineSongsLyrics.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
