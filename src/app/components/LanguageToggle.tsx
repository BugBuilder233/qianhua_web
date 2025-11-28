"use client";

import { useState, useEffect } from "react";

interface LanguageToggleProps {
  isScrolled?: boolean;
}

export default function LanguageToggle({ isScrolled = false }: LanguageToggleProps) {
  const [language, setLanguage] = useState<"zh" | "en">("zh");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedLanguage = localStorage.getItem("language") as "zh" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "zh" ? "en" : "zh";
    setLanguage(newLanguage);
    if (typeof window === "undefined") return;
    localStorage.setItem("language", newLanguage);
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }));
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`
        px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
        ${
          isScrolled
            ? "bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 hover:text-white border border-slate-600/50"
            : "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
        }
      `}
      aria-label="切换语言"
      title={language === "zh" ? "Switch to English" : "切换到中文"}
    >
      {language === "zh" ? "English" : "中文"}
    </button>
  );
}
