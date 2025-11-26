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
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            OnlineSongsLyrics
          </span>
        </Link>

        <div className="flex items-center gap-12">
          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/trending"
              className="text-sm font-medium text-zinc-700 dark:text-gray-300 transition-colors hover:text-black dark:hover:text-white"
            >
              Lyrics
            </Link>
            <Link
              href="/trending"
              className="text-sm font-medium text-zinc-700 dark:text-gray-300 transition-colors hover:text-black dark:hover:text-white"
            >
              Trending
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-zinc-700 dark:text-gray-300 transition-colors hover:text-black dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
