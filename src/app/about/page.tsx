'use client';

import { useEffect } from 'react';
import type { SVGProps } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import CallToAction from '../components/CallToAction';
import Image from 'next/image';

// Icons
type Country = { flag: string; name: string };

const Icons = {
  Factory: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 22h20" />
      <path d="M8 6h4" />
      <path d="M8 10h4" />
      <path d="M8 14h4" />
      <path d="M16 6h4" />
      <path d="M16 10h4" />
      <path d="M16 14h4" />
      <path d="M4 2v20" />
      <path d="M20 2v20" />
      <path d="M12 2v20" />
    </svg>
  ),
  Users: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Target: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Award: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  Globe: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Lightbulb: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  ),
};

export default function AboutPage() {
  const { t, setLanguage } = useLanguage();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const lang = url.searchParams.get('lang');
      if (lang === 'zh' || lang === 'en') {
        setLanguage(lang);
      }
    }
  }, [setLanguage]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Get overseas countries from i18n
  const overseasCountries = (t('aboutUs.overseasCountries') ?? []) as Country[];

  // Equipment list and images
  const equipmentList = String(t('aboutUs.equipment')).split(',');
  const equipmentImages = [
    '/about/equipment-1.png',
    '/about/equipment-2.png',
    '/about/equipment-1.png', // Repeat for demo
    '/about/equipment-2.png',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      {/* 1. Modern Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-indigo-900/90 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
            style={{ backgroundImage: 'url(/contact/contact-header.png)' }}
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            {/* <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-6 border border-blue-400/20 backdrop-blur-sm">
              {t("aboutUs.about")}
            </span> */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              {String(t('aboutUs.companyName'))}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              {String(t('aboutUs.slogan'))}
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>
      {/* 2. Key Stats Bar */}
      <section className="py-12 bg-white border-b border-slate-100 relative z-30 -mt-10 mx-4 md:mx-12 rounded-2xl shadow-xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            {[
              { label: String(t('aboutUs.establishmentLabel')), value: '2025', suffix: '' },
              { label: String(t('aboutUs.factoryAreaLabel')), value: '2000', suffix: 'm²' },
              { label: String(t('aboutUs.rDTeamLabel')), value: '38', suffix: '+' },
              { label: 'Patents', value: '100', suffix: '+' },
            ].map((stat, idx) => (
              <div key={idx} className="p-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 font-mono">
                  {stat.value}
                  <span className="text-lg text-blue-400 ml-1">{stat.suffix}</span>
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 3. Management Philosophy - Optimized */}
      <section className="py-24 bg-linear-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <Icons.Target className="w-4 h-4" />
                {String(t('aboutUs.managementConceptLabel'))}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                {String(t('aboutUs.managementConcept'))}
              </h2>

              <div className="prose prose-lg text-slate-600 mb-12">
                <p className="leading-relaxed">{String(t('aboutUs.companyDescription'))}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-all"
                >
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                    <Icons.Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      {String(t('aboutUs.missionTitle'))}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {String(t('aboutUs.missionDescription'))}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-all"
                >
                  <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                    <Icons.Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      {String(t('aboutUs.innovationTitle'))}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {String(t('aboutUs.innovationDescription'))}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-slate-200" />
                <div
                  style={{ backgroundImage: 'url(/about/about-header.png)' }}
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white max-w-md">
                  <div className="w-12 h-1 bg-blue-500 mb-6"></div>
                  <p className="text-lg font-light italic opacity-90">
                    {`&ldquo;` + String(t('aboutUs.managementConcept')) + `&rdquo;`}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 4. R&D and Expertise with Flip Animation */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden perspective-1000">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {String(t('aboutUs.rDInnovation'))}
            </h2>
            <p className="text-slate-400 text-lg">{String(t('aboutUs.rndDescription'))}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Icons.Users,
                title: String(t('aboutUs.rDTeamLabel')),
                desc: String(t('aboutUs.rDTeam')),
                color: 'blue',
              },
              {
                icon: Icons.Award,
                title: String(t('aboutUs.coreProductsTitle')),
                desc: String(t('aboutUs.coreProducts')),
                color: 'indigo',
              },
              {
                icon: Icons.Globe,
                title: String(t('aboutUs.marketCoverageTitle')),
                desc: t('aboutUs.overseasMarket'),
                color: 'sky',
              },
            ].map((item, idx) => (
              <div key={idx} className="group h-80 perspective-[1000px]">
                <div className="relative h-full w-full transition-all duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 flex flex-col items-center justify-center text-center backface-hidden">
                    <div
                      className={`w-16 h-16 rounded-full bg-${item.color}-500/10 flex items-center justify-center mb-6`}
                    >
                      <item.icon className={`w-8 h-8 text-${item.color}-500`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="w-8 h-1 bg-blue-500 rounded-full mt-4"></div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-linear-to-br from-blue-600 to-indigo-700 p-8 flex flex-col items-center justify-center text-center text-white transform-[rotateY(180deg)] backface-hidden">
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-blue-100 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. Market Coverage with Flag Images */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t('aboutUs.marketCoverageTitle')}
            </h2>
            <p className="text-slate-600 text-lg">{String(t('aboutUs.globalReach'))}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {Array.isArray(overseasCountries) &&
              overseasCountries.map((country: Country, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 w-16 h-10 shadow-md rounded-md overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                    <Image
                      fill
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="relative z-10 text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors">
                    {country.name}
                  </span>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
      {/* 6. Equipment Seamless Carousel */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {String(t('aboutUs.companyEquipment'))}
            </h2>
            <p className="text-slate-600">{String(t('aboutUs.equipmentDescription'))}</p>
          </div>
        </div>

        {/* Seamless Slider */}
        <div className="relative w-full">
          <div className="flex gap-6 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
            {/* Duplicate list for seamless effect */}
            {[...equipmentList, ...equipmentList, ...equipmentList].map((item, idx) => (
              <div
                key={idx}
                className="inline-block w-[300px] md:w-[400px] shrink-0 bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 group"
              >
                <div className="h-48 md:h-64 relative overflow-hidden">
                  <Image
                    fill
                    src={equipmentImages[idx % equipmentImages.length]}
                    alt={item.trim()}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 truncate">{item.trim()}</h3>
                  <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 7. Call to Action Component */}
      <CallToAction />
      {/* Add custom keyframes for scrolling */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
