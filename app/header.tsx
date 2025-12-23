import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import Image from "next/image";
export function Header() {
  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/90 dark:bg-black/90
        backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/70
        border-b border-zinc-200  dark:border-zinc-800
        transition-colors
      "
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            OnlineSongsLyrics
          </span>
        </Link>

        <nav className="hidden items-center gap-3 lg:flex">
            <Link
              href="/trending"
              className="flex items-center gap-2 px-6 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full py-2"
            >
              <Image src="/images/lyrics.png" alt="Lyrics" width={18} height={18} className="dark:hidden"/>
              <Image src="/images/lyrics-white.png" alt="Lyrics" width={18} height={18} className="hidden dark:block"/>
              <span className="text-sm font-semibold text-black dark:text-gray-300 transition-colors dark:hover:text-white">Lyrics</span>
            </Link>
            <Link
              href="/trending"
              className="flex items-center gap-2 px-6 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full py-2"
            >
              <Image src="/images/trending.png" alt="Trending" width={18} height={18} className="dark:hidden"/>
              <Image src="/images/trending-white.png" alt="Trending" width={18} height={18} className="hidden dark:block"/>
              <span className="text-sm font-semibold text-black dark:text-gray-300 transition-colors dark:hover:text-white">Trending</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full py-2"
            >
              <Image src="/images/contact.png" alt="Contact" width={20} height={20} className="dark:hidden"/>
              <Image src="/images/contact-white.png" alt="Contact" width={20} height={20} className="hidden dark:block"/>
              <span className="text-sm font-semibold text-black dark:text-gray-300 transition-colors dark:hover:text-white">Contact Us</span>
            </Link>
          </nav>
          <ThemeToggle />
      </div>
    </header>
  );
}
