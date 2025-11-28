// app/solutions/page.tsx
'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SolutionsPage() {
  const { t, language } = useLanguage();

  // 解决方案数据
  const solutions = [
    {
      id: 'automotive',
      title: '汽车行业解决方案',
      description: '为汽车制造过程中的流体输送提供高精度、高可靠性的解决方案，包括涂料、胶粘剂、密封剂等应用。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
    },
    {
      id: 'electronics',
      title: '电子行业解决方案',
      description: '针对电子制造中的精密流体控制需求，提供稳定可靠的计量泵解决方案，适用于PCB涂覆、半导体封装等领域。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 'food-packaging',
      title: '食品包装解决方案',
      description: '符合食品级安全标准的流体输送解决方案，适用于食品包装中的酱料、油脂、添加剂等精确计量和输送。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: 'pharmaceutical',
      title: '制药行业解决方案',
      description: '满足GMP标准的高精度流体输送解决方案，适用于制药过程中的药液、疫苗、中间体等精确计量和输送。',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/90 via-slate-900 to-indigo-900/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 border border-blue-400/30 backdrop-blur-sm"
            >
              流体输送解决方案
            </motion.span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl sm:tracking-tight lg:text-6xl mt-6">
              {t("nav.solutions")}
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 mt-6 mx-auto">
              针对不同行业的流体输送需求，我们提供定制化的解决方案，帮助企业提升生产效率，降低运营成本。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-blue-200 transition-all group"
              >
                <div className="p-8">
                  <div className="mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {solution.description}
                  </p>
                  <Link 
                    href={`/solutions/${solution.id}?lang=${language}`}
                    className="inline-flex items-center text-blue-600 font-medium group/link"
                  >
                    <span>查看详情</span>
                    <motion.svg
                      whileHover={{ x: 5 }}
                      className="h-5 w-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </motion.svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  需要定制化解决方案？
                </h2>
                <p className="text-slate-600 mb-8">
                  我们的工程师团队可以根据您的具体需求，提供定制化的流体输送解决方案，欢迎咨询。
                </p>
                <Link href={`/contact?lang=${language}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-lg border-2 border-primary bg-primary px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-blue-600 transition-all"
                  >
                    {t("nav.contactNow")}
                  </motion.button>
                </Link>
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
    </main>
  );
}
