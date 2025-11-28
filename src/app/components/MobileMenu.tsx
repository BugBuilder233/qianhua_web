"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  className?: string;
}

export default function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/home", label: t("nav.home") },
    { href: "/products", label: t("nav.products") },
    { href: "/industryApplications", label: t("nav.industryApplications") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  return (
    <div className={cn("md:hidden", className)}>
      <motion.button
        onClick={toggleMenu}
        className="p-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg border-none"
        aria-label="菜单"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        title="菜单"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dim overlay under the menu panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu-panel"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 bg-white rounded-lg shadow-xl z-50 md:hidden border border-blue-100"
              role="dialog"
              aria-modal="true"
            >
              <nav className="px-6 py-6 space-y-4 max-h-[calc(100vh-6rem)] overflow-auto">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={`${item.href}?lang=${language}`}
                    className="block text-base font-semibold text-slate-800 hover:text-white hover:bg-blue-600 transition-all duration-300 py-3 px-4 rounded-lg"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
