"use client";

import { useState, useEffect } from "react";
import { i18n, Language } from "@/lib/i18n";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "zh" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }

    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setLanguage(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener);
    };
  }, []);

  // Use `any` here because translations can be string/object/array and
  // casting all places in the app would be noisy; disable the explicit-any rule locally.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t = (key: string): any => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = i18n[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // 找不到翻译，返回原key
      }
    }

    return value;
  };

  return {
    language,
    setLanguage,
    t,
  };
}
