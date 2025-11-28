'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import type { SVGProps } from 'react';
import CallToAction from '../components/CallToAction';
import Image from 'next/image';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind class merging
function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// Icons
const Icons = {
  Check: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ArrowRight: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

export default function IndustryApplicationsPage() {
  const { t, setLanguage } = useLanguage();

  // Handle URL language param
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const lang = url.searchParams.get('lang');
      if (lang === 'zh' || lang === 'en') {
        setLanguage(lang);
      }
    }
  }, [setLanguage]);

  // Industry Data
  const industries = [
    {
      id: 'glue',
      name: t('industries.glueIndustry'),
      description: t('industries.glueDescription'),
      features: [
        t('industries.glueFeature1'),
        t('industries.glueFeature2'),
        t('industries.glueFeature3'),
      ],
      image: 'https://picsum.photos/id/118/1200/800',
      color: 'blue',
    },
    {
      id: 'chemical',
      name: t('industries.chemicalIndustry'),
      description: t('industries.chemicalDescription'),
      features: [
        t('industries.chemicalFeature1'),
        t('industries.chemicalFeature2'),
        t('industries.chemicalFeature3'),
      ],
      image: 'https://picsum.photos/id/119/1200/800',
      color: 'indigo',
    },
    {
      id: 'coating',
      name: t('industries.coatingIndustry'),
      description: t('industries.coatingDescription'),
      features: [
        t('industries.coatingFeature1'),
        t('industries.coatingFeature2'),
        t('industries.coatingFeature3'),
      ],
      image: 'https://picsum.photos/id/129/1200/800',
      color: 'sky',
    },
    {
      id: 'pharmaceutical',
      name: t('industries.pharmaceuticalIndustry'),
      description: t('industries.pharmaceuticalDescription'),
      features: [
        t('industries.pharmaceuticalFeature1'),
        t('industries.pharmaceuticalFeature2'),
        t('industries.pharmaceuticalFeature3'),
      ],
      image: 'https://picsum.photos/id/175/1200/800',
      color: 'teal',
    },
    {
      id: 'lithium',
      name: t('industries.lithiumIndustry'),
      description: t('industries.lithiumDescription'),
      features: [
        t('industries.lithiumFeature1'),
        t('industries.lithiumFeature2'),
        t('industries.lithiumFeature3'),
      ],
      image: 'https://picsum.photos/id/180/1200/800',
      color: 'emerald',
    },
    {
      id: 'evCharging',
      name: t('industries.evChargingIndustry'),
      description: t('industries.evChargingDescription'),
      features: [
        t('industries.evChargingFeature1'),
        t('industries.evChargingFeature2'),
        t('industries.evChargingFeature3'),
      ],
      image: 'https://picsum.photos/id/183/1200/800',
      color: 'cyan',
    },
    {
      id: 'inkjet',
      name: t('industries.inkjetIndustry'),
      description: t('industries.inkjetDescription'),
      features: [
        t('industries.inkjetFeature1'),
        t('industries.inkjetFeature2'),
        t('industries.inkjetFeature3'),
      ],
      image: 'https://picsum.photos/id/201/1200/800',
      color: 'violet',
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      {/* 1. Modern Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-indigo-900/90 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
            style={{
              backgroundImage: 'url(https://picsum.photos/id/111/1920/1080)',
            }}
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
              {t("industries.industryApplications")}
            </span> */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              {t('industries.applicationOverview')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              {t('industries.applicationSlogan')}
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

      {/* 2. Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t('industries.applicationOverview')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('industries.overviewDescription')}
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. Industry Applications List */}
      <section className="pb-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className={cn(
                  'flex flex-col gap-12 items-center',
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                )}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                      fill
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl z-0"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-1 bg-blue-500 rounded-full"></span>
                      <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
                        {t('industries.industryApplications')}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                      {industry.name}
                    </h2>

                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-8">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Icons.Check className="w-5 h-5 text-blue-500" />
                        {t('industries.keyBenefits')}
                      </h4>
                      <ul className="space-y-3">
                        {industry.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="group inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      {t('industries.contactForSolution')}
                      <Icons.ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <CallToAction />
    </div>
  );
}
