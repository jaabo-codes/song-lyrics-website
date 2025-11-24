"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load saved theme OR default to light
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
      return;
    }

    // DEFAULT TO LIGHT THEME ALWAYS
    setTheme("light");
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex items-center gap-3">
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />

      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.25 }}
          >
            🌙
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
          >
            ☀️
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
