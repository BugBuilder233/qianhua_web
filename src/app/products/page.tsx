'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion, AnimatePresence } from 'framer-motion';
import type { SVGProps } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind class merging
function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

type Product = {
  id: string;
  model?: string;
  type?: string;
  image?: string;
  description?: string;
  specifications?: Record<string, string>;
};

// Icons
const Icons = {
  Close: (props: SVGProps<SVGSVGElement>) => (
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
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
  Check: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

export default function ProductsPage() {
  const { t, setLanguage } = useLanguage();
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

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

  // Product Categories Data
  const productCategories = [
    {
      id: 'standardGearPumps',
      name: t('products.standardGearPumps'),
      products: [
        {
          id: 'qh0.15-4cc',
          model: 'QH0.15-4CC',
          type: t('products.gearPump'),
          image: '/about/product-excellence.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<350℃',
            viscosity: '0-1000000CP.s',
            flowRate: '0-800ML/MIN',
            inOut: t('products.oneInOneOut'),
            material: 'CR12Mov/440C/6542/HC',
            sealing: t('products.combinationSeal'),
            applications: t('products.chemicalGluePaint'),
          },
        },
        {
          id: 'qh6-30cc',
          model: 'QH6-30CC',
          type: t('products.gearPump'),
          image: '/about/product-excellence.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<350℃',
            viscosity: '0-1000000CP.s',
            flowRate: '0-6L/MIN',
            inOut: t('products.oneInOneOut'),
            material: 'CR12Mov/440C/6542/HC',
            sealing: t('products.combinationSeal'),
            applications: t('products.chemicalGluePaint'),
          },
        },
        {
          id: 'qh40-100cc',
          model: 'QH40-100CC',
          type: t('products.gearPump'),
          image: '/about/product-excellence.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<350℃',
            viscosity: '0-1000000CP.s',
            flowRate: '0-20L/MIN',
            inOut: t('products.oneInOneOut'),
            material: 'CR12Mov/440C/6542/HC',
            sealing: t('products.combinationSeal'),
            applications: t('products.chemicalGluePaint'),
          },
        },
        {
          id: 'qh150-250cc',
          model: 'QH150-250CC',
          type: t('products.gearPump'),
          image: '/about/product-excellence.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<350℃',
            viscosity: '0-1000000CP.s',
            flowRate: '0-50L/MIN',
            inOut: t('products.oneInOneOut'),
            material: 'CR12Mov/440C/6542/HC',
            sealing: t('products.combinationSeal'),
            applications: t('products.chemicalGluePaint'),
          },
        },
      ],
    },
    {
      id: 'servoPumpSets',
      name: t('products.pumpSets'),
      products: [
        {
          id: 'qh0.15-250cc-servo',
          model: 'QH0.15-250CC',
          type: t('products.servoPumpSet'),
          image: '/about/equipment-1.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<350℃',
            viscosity: '0-1000000CP.s',
            flowRate: '0-50L/MIN',
            inOut: t('products.oneInOneOut'),
            material: 'CR12Mov/440C/6542/HC',
            sealing: t('products.combinationSeal'),
            applications: t('products.chemicalGluePaint'),
          },
        },
        {
          id: 'qh0.15-250cc-variable',
          model: 'QH0.15-250CC',
          type: t('products.variableFreqPumpSet'),
          image: '/about/equipment-1.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<350℃',
            viscosity: '0-1000000CP.s',
            flowRate: '0-50L/MIN',
            inOut: t('products.oneInOneOut'),
            material: 'CR12Mov/440C/6542/HC',
            sealing: t('products.combinationSeal'),
            applications: t('products.chemicalGluePaint'),
          },
        },
        {
          id: 'qh0.15-250cc-stepper',
          model: 'QH0.15-250CC',
          type: t('products.stepperPumpSet'),
          image: '/about/equipment-1.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<350℃',
            viscosity: '0-1000000CP.s',
            flowRate: '0-50L/MIN',
            inOut: t('products.oneInOneOut'),
            material: 'CR12Mov/440C/6542/HC',
            sealing: t('products.combinationSeal'),
            applications: t('products.chemicalGluePaint'),
          },
        },
      ],
    },
    {
      id: 'magneticGearPumps',
      name: t('products.magneticGearPumps'),
      products: [
        {
          id: 'qh0150-090dt',
          model: 'QH0150-090DT',
          type: t('products.magneticGearPump'),
          image: '/about/equipment-2.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<200℃',
            viscosity: '0-10000CP.s',
            flowRate: '0-2.5L/MIN',
            inOut: t('products.oneInOneOut'),
            housingMaterial: '316L',
            gearMaterial: 'PEEK',
            sealing: t('products.magneticSeal'),
            applications: t('products.newEnergyPharmaceutical'),
          },
        },
        {
          id: 'qh150-300dt',
          model: 'QH150-300DT',
          type: t('products.magneticGearPump'),
          image: '/about/equipment-2.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<200℃',
            viscosity: '0-10000CP.s',
            flowRate: '0-8.5L/MIN',
            inOut: t('products.oneInOneOut'),
            housingMaterial: '316L',
            gearMaterial: 'PEEK',
            sealing: t('products.magneticSeal'),
            applications: t('products.newEnergyPharmaceutical'),
          },
        },
        {
          id: 'qh300-1800dt',
          model: 'QH300-1800DT',
          type: t('products.magneticGearPump'),
          image: '/about/equipment-2.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<200℃',
            viscosity: '0-10000CP.s',
            flowRate: '0-50L/MIN',
            inOut: t('products.oneInOneOut'),
            housingMaterial: '316L',
            gearMaterial: 'PEEK',
            sealing: t('products.magneticSeal'),
            applications: t('products.newEnergyPharmaceutical'),
          },
        },
        {
          id: 'qh2000-5000dt',
          model: 'QH2000-5000DT',
          type: t('products.magneticGearPump'),
          image: '/about/equipment-2.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<200℃',
            viscosity: '0-10000CP.s',
            flowRate: '0-140L/MIN',
            inOut: t('products.oneInOneOut'),
            housingMaterial: '316L',
            gearMaterial: 'PEEK',
            sealing: t('products.magneticSeal'),
            applications: t('products.newEnergyPharmaceutical'),
          },
        },
        {
          id: 'qh2000-5000dt-servo',
          model: 'QH2000-5000DT',
          type: t('products.servoPumpSet'),
          image: '/about/equipment-2.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<200℃',
            viscosity: '0-10000CP.s',
            flowRate: '0-140L/MIN',
            inOut: t('products.oneInOneOut'),
            housingMaterial: '316L',
            gearMaterial: 'PEEK',
            sealing: t('products.magneticSeal'),
            applications: t('products.newEnergyPharmaceutical'),
          },
        },
        {
          id: 'qh2000-5000dt-variable',
          model: 'QH2000-5000DT',
          type: t('products.variableFreqPumpSet'),
          image: '/about/equipment-2.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<200℃',
            viscosity: '0-10000CP.s',
            flowRate: '0-60L/MIN',
            inOut: t('products.oneInOneOut'),
            housingMaterial: '316L',
            gearMaterial: 'PEEK',
            sealing: t('products.magneticSeal'),
            applications: t('products.newEnergyPharmaceutical'),
          },
        },
        {
          id: 'qh0150-300dt-dc',
          model: 'QH0150-300DT',
          type: t('products.dcPumpSet'),
          image: '/about/equipment-2.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<200℃',
            viscosity: '0-10000CP.s',
            flowRate: '0-6L/MIN',
            inOut: t('products.oneInOneOut'),
            housingMaterial: '316L',
            gearMaterial: 'PEEK',
            sealing: t('products.magneticSeal'),
            applications: t('products.newEnergyPharmaceutical'),
          },
        },
        {
          id: 'qh0150-150dt-stepper',
          model: 'QH0150-150DT',
          type: t('products.stepperPumpSet'),
          image: '/about/equipment-2.png',
          specifications: {
            medium: t('products.fluids'),
            temperature: '<200℃',
            viscosity: '0-10000CP.s',
            flowRate: '0-0.8L/MIN',
            inOut: t('products.oneInOneOut'),
            housingMaterial: '316L',
            gearMaterial: 'PEEK',
            sealing: t('products.magneticSeal'),
            applications: t('products.newEnergyPharmaceutical'),
          },
        },
      ],
    },
    {
      id: 'pumpControlSystems',
      name: t('products.pumpControlSystems'),
      products: [
        {
          id: 'open-loop-system',
          model: t('products.openLoopSystem'),
          type: t('products.controlSystem'),
          image: '/about/precision-equipment.png',
          description: t('products.openLoopDescription'),
        },
        {
          id: 'closed-loop-system',
          model: t('products.closedLoopSystem'),
          type: t('products.controlSystem'),
          image: '/about/precision-equipment.png',
          description: t('products.closedLoopDescription'),
        },
      ],
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
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
              backgroundImage: 'url(/about/about-header.png)',
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
              {t("products.productsTitle")}
            </span> */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              {t('products.productsSlogan')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              {t('products.productOverview')}
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
              {t('products.productIntroduction')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('products.productOverview')}
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. Product Categories */}
      <div className="bg-slate-50 pb-24">
        {productCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className={cn('py-20', index !== 0 && 'pt-0')}
          >
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 flex items-center gap-4"
              >
                <div className="h-10 w-2 bg-blue-600 rounded-full"></div>
                <h2 className="text-3xl font-bold text-slate-900">{category.name}</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product: Product, pIndex: number) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                    className="group bg-white rounded-[var(--radius)] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-100 flex flex-col"
                    onClick={() => setActiveProduct(product)}
                  >
                    <div className="relative h-64 overflow-hidden bg-slate-100">
                      <Image
                        fill
                        src={product.image ?? '/about/product-excellence.png'}
                        alt={`${product.model ?? ''} ${product.type ?? ''}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {product.type}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.model}
                      </h3>

                      <div className="text-slate-500 text-sm mb-6 flex-1">
                        {product.specifications ? (
                          <div className="space-y-1">
                            <p className="flex justify-between">
                              <span>{t('products.flowRate')}:</span>
                              <span className="font-medium text-slate-700">
                                {String(product.specifications?.flowRate ?? '')}
                              </span>
                            </p>
                            <p className="flex justify-between">
                              <span>{t('products.temperature')}:</span>
                              <span className="font-medium text-slate-700">
                                {String(product.specifications?.temperature ?? '')}
                              </span>
                            </p>
                          </div>
                        ) : (
                          <p className="line-clamp-2">{product.description}</p>
                        )}
                      </div>

                      <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                        {t('products.viewDetails')}
                        <Icons.ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 4. Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {t("products.needProductInfo")}
                </h2>
                <p className="text-slate-600 mb-8">
                  {t("products.productInquiryDescription")}
                </p>
                <a href={`/contact?lang=${typeof window !== 'undefined' ? new URL(window.location.href).searchParams.get('lang') || 'zh' : 'zh'}`} className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-[var(--radius)] border-2 border-primary bg-primary px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-primary/90 transition-all"
                  >
                    {t("products.contactForProduct")}
                  </motion.button>
                </a>
              </div>
              <div className="bg-blue-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Detail Modal */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setActiveProduct(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-[var(--radius)] w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white text-slate-900 p-2 rounded-full transition-colors backdrop-blur-md"
                onClick={() => setActiveProduct(null)}
              >
                <Icons.Close />
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/2 bg-slate-100 relative min-h-[300px] lg:min-h-[600px]">
                  <Image
                    fill
                    src={activeProduct!.image ?? '/about/product-excellence.png'}
                    alt={String(activeProduct!.model ?? '')}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="mb-8">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full mb-4">
                      {String(activeProduct!.type ?? '')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      {String(activeProduct!.model ?? '')}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {String(activeProduct!.description ?? t('products.productOverview'))}
                    </p>
                  </div>

                  {activeProduct.specifications && (
                    <div className="bg-slate-50 rounded-[var(--radius)] p-6 mb-8 border border-slate-100">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Icons.Check className="text-blue-500" />
                        {t('products.specifications')}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {Object.entries(
                          activeProduct.specifications as Record<string, unknown>
                        ).map(([key, value]: [string, unknown]) => (
                          <div key={key} className="flex flex-col">
                            <span className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                              {t(
                                `products.${
                                  key === 'inOut'
                                    ? 'inletOutlet'
                                    : key === 'sealing'
                                    ? 'sealingMethod'
                                    : key
                                }`
                              ) || key}
                            </span>
                            <span className="font-semibold text-slate-900">
                              {String(value ?? '')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4">
                    <button className="flex-1 bg-primary text-white font-bold py-4 px-6 rounded-[var(--radius)] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                      {t('products.requestQuote')}
                    </button>
                    <button className="flex-1 border-2 border-slate-200 text-slate-700 font-bold py-4 px-6 rounded-[var(--radius)] hover:border-primary hover:text-primary transition-colors">
                      {t('products.downloadSpec')}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
