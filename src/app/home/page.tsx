// app/home/page.tsx
"use client";

import CallToAction from "../components/CallToAction";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useMemo, useState } from "react";



export default function HomePage() {
  const { t, setLanguage, language } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(1024); // Default width for SSR

  // Handle URL language param
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const lang = url.searchParams.get("lang");
      if (lang === "zh" || lang === "en") {
        setLanguage(lang);
      }
      // Set actual window width after hydration
      setWindowWidth(window.innerWidth);
    }
  }, [setLanguage]);

  const checkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Generate particles data once on client
  const particles = useMemo(() => {
    if (typeof window === "undefined") return [];
    return [...Array(20)].map(() => ({
      x: Math.random() * windowWidth,
      y: Math.random() * 600,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 5,
    }));
  }, [windowWidth]);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero 区 with Tech Effects */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-900 overflow-hidden">
        {/* Animated Tech Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/90 via-slate-900 to-indigo-900/90" />

          {/* Animated Grid Pattern */}
          <motion.div
            animate={{
              backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Floating Particles */}
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Glowing Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 border border-blue-400/30 backdrop-blur-sm"
            >
              高效流体输送解决方案
            </motion.span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              为自动化行业提供高精度智能输送解决方案
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 mt-6">
              专注于齿轮泵研发与制造，助力企业提升生产效率，降低运营成本，实现自动化升级。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href={`/solutions?lang=${language}`}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-[var(--radius)] border border-transparent bg-primary px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-primary/90 transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">探索解决方案</span>
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </motion.button>
              </Link>
              <Link href={`/contact?lang=${language}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-[var(--radius)] border-2 border-primary/50 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-white/20 transition-all"
                >
                  联系我们
                </motion.button>
              </Link>
            </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 via-transparent to-indigo-600/20 z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-slate-800 flex items-center justify-center"
              >
                <div className="text-6xl font-bold text-slate-700">PUMP</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-20"
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

      {/* 我们的优势 */}
      <section id="advantages" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4"
            >
              我们的优势
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600"
            >
              我们不只提供产品，更提供稳定与高效的承诺，助力企业提升生产效率
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: checkIcon, title: "技术领先", desc: "拥有专业的研发团队和先进的生产设备，不断突破技术瓶颈" },
              { icon: checkIcon, title: "经验丰富", desc: "10年行业深耕，服务500+客户，积累了丰富的行业经验" },
              { icon: checkIcon, title: "质量可靠", desc: "ISO9001认证，严格的质量控制体系，确保产品质量稳定" },
              { icon: checkIcon, title: "服务网络", desc: "7x24小时支持，完善的售后服务体系，快速响应客户需求" },
            ].map((advantage, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white p-8 rounded-[var(--radius)] shadow-sm border border-slate-100 hover:border-blue-200 transition-all relative overflow-hidden group"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="h-14 w-14 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg"
                  >
                    {advantage.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{advantage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 客户见证 */}
      <section id="clients" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4"
            >
              合作客户
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600"
            >
              我们的解决方案已成功服务于500+家企业，遍布全国各行业
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[
              { name: "客户1", logo: "🏭" },
              { name: "客户2", logo: "🏢" },
              { name: "客户3", logo: "🚗" },
              { name: "客户4", logo: "📱" },
              { name: "客户5", logo: "🍔" },
              { name: "客户6", logo: "💊" },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 rounded-[var(--radius)] p-8 flex items-center justify-center text-center border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-2">{client.logo}</div>
                <div className="text-sm font-semibold text-slate-600">{client.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品与解决方案预览 */}
      <section id="solutions-preview" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4"
            >
              产品与解决方案
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600"
            >
              精选核心产品和解决方案，助力企业提升生产效率
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* 解决方案卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-[var(--radius)] overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all group"
            >
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex items-center justify-center text-4xl font-bold text-slate-300"
                >
                  SOLUTIONS
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  行业解决方案
                </h3>
                <p className="text-slate-600 mb-4">
                  针对不同行业的流体输送需求，提供定制化的解决方案，帮助企业提升生产效率，降低运营成本。
                </p>
                <Link
                  href={`/solutions?lang=${language}`}
                  className="flex justify-between items-center text-blue-600 font-medium group/link"
                >
                  <span>查看解决方案</span>
                  <motion.svg
                    whileHover={{ x: 5 }}
                    className="h-5 w-5"
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

            {/* 产品卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-[var(--radius)] overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all group"
            >
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex items-center justify-center text-4xl font-bold text-slate-300"
                >
                  PRODUCTS
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  核心产品
                </h3>
                <p className="text-slate-600 mb-4">
                  提供全系列齿轮泵及泵组产品，从标准齿轮泵到磁力齿轮泵，从伺服泵组到变频泵组，满足不同行业客户的需求。
                </p>
                <Link
                  href={`/products?lang=${language}`}
                  className="flex justify-between items-center text-blue-600 font-medium group/link"
                >
                  <span>查看产品中心</span>
                  <motion.svg
                    whileHover={{ x: 5 }}
                    className="h-5 w-5"
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
          </div>
        </div>
      </section>



      {/* 公司实力 */}
      <section
        id="company-strength"
        className="py-24 bg-slate-900 text-white relative overflow-hidden"
      >
        {/* Tech Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold sm:text-4xl mb-4"
            >
              {t("home.stats.title")}
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-blue-500 mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {(
              [
                t("home.stats.factoryArea"),
                t("home.stats.annualCapacity"),
                t("home.stats.techTeam"),
                t("home.stats.clients"),
              ] as unknown[]
            ).map((s, index: number) => {
              const stat = s as { value: string; label: string; desc?: string };
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-[var(--radius)] border border-slate-700 hover:border-blue-500 transition-all text-center group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400 mb-3"
                  >
                    {stat.value}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                  <p className="text-slate-300 text-sm">{stat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
