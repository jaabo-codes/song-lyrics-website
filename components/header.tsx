import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export function Header() {
  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/90 dark:bg-black/90
        backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/70
        border-b border-zinc-200 dark:border-zinc-800
        transition-colors
      "
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              OnlineSongsLyrics
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/lyrics"
              className="text-sm font-medium text-zinc-700 dark:text-gray-300 transition-colors hover:text-black dark:hover:text-white"
            >
              Lyrics
            </Link>
            <Link
              href="/artists"
              className="text-sm font-medium text-zinc-700 dark:text-gray-300 transition-colors hover:text-black dark:hover:text-white"
            >
              Artists
            </Link>
            <Link
              href="/albums"
              className="text-sm font-medium text-zinc-700 dark:text-gray-300 transition-colors hover:text-black dark:hover:text-white"
            >
              Albums
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium text-zinc-700 dark:text-gray-300 transition-colors hover:text-black dark:hover:text-white"
            >
              Community
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search songs, artists, albums..."
              className="
                  w-64 md:w-80 lg:w-96 pl-10 pr-4 py-2 rounded-full
                  border border-border bg-card text-foreground
                  placeholder:text-muted-foreground
                  focus:outline-none focus:ring-2 focus:ring-pink-500
                  text-xs transition-colors
                   "
            />
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
