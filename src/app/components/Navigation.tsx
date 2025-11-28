'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageToggle from './LanguageToggle';
import MobileMenu from './MobileMenu';
// import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/home', label: 'nav.home' },
    { href: '/solutions', label: 'nav.solutions' },
    { href: '/products', label: 'nav.products' },
    { href: '/about', label: 'nav.about' },
    { href: '/contact', label: 'nav.contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (pathname === href || isNavigating) {
      return;
    }

    setIsNavigating(true);
    router.push(href);
    // 导航完成后立即重置状态，无需模拟延迟
    setIsNavigating(false);
  };

  const isActive = (href: string) => {
    return pathname === href || (pathname === '/' && href === '/home');
  };

  const goToHome = (Event: React.MouseEvent<HTMLAnchorElement>) => {
    Event?.preventDefault();
    router.push('/');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          isScrolled
            ? 'bg-linear-to-r from-blue-900/95 via-slate-900/95 to-indigo-900/95 backdrop-blur-xl shadow-2xl border-b border-blue-800/30'
            : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <a
            href="javascript:void(0)"
            className={`
              text-2xl font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent
              transition-all duration-300 hover:from-blue-300 hover:to-indigo-300
              ${isScrolled ? '' : 'drop-shadow-lg'}
            `}
            onClick={(e) => goToHome(e)}
          >
              上海千骅机械
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.a
                    href="javascript:void(0)"
                    onClick={(e) => handleNavClick(e, `${item.href}?lang=${language}`)}
                    className={`
                      relative px-6 py-3 text-base font-semibold rounded-[var(--radius)]
                      transition-all duration-300 group
                      ${active
                        ? 'text-white bg-primary shadow-md shadow-primary/30'
                        : isScrolled
                        ? 'text-slate-200 hover:text-white hover:bg-blue-800/30'
                        : 'text-white hover:text-blue-200 hover:bg-white/10 backdrop-blur-sm'}
                      ${isNavigating ? 'pointer-events-none opacity-50' : ''}
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{t(item.label)}</span>

                    {/* Animated background for active items */}
                    {active && (
                      <motion.span
                        initial={{ scale: 0.95, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-primary rounded-[var(--radius)] -z-10"
                      />
                    )}

                    {/* Animated underline for non-active items */}
                    {!active && (
                      <motion.span
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </motion.a>
                </motion.div>
              );
            })}
            
            {/* Contact Now Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              <motion.a
                href="javascript:void(0)"
                onClick={(e) => handleNavClick(e, `/contact?lang=${language}`)}
                className={`
                  relative px-8 py-3 text-base font-bold rounded-[var(--radius)]
                  transition-all duration-300 group bg-blue-500 hover:bg-blue-600 text-white
                  shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50
                  ${isNavigating ? 'pointer-events-none opacity-50' : ''}
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t('nav.contactNow')}</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <LanguageToggle isScrolled={isScrolled} />
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ThemeToggle isScrolled={isScrolled} />
            </motion.div> */}
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
