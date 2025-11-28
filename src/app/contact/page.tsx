"use client";

import { useEffect, useState } from "react";
import type { SVGProps } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

// Icons
const Icons = {
  User: (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Mail: (props: SVGProps<SVGSVGElement>) => (
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  MapPin: (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Phone: (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Info: (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
  CheckCircle: (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </svg>
  ),
  AlertCircle: (props: SVGProps<SVGSVGElement>) => (
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
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  ),
  Loader2: (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  Send: (props: SVGProps<SVGSVGElement>) => (
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  ),
};

export default function ContactPage() {
  const { t, setLanguage } = useLanguage();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const lang = url.searchParams.get("lang");

      if (lang === "zh" || lang === "en") {
        setLanguage(lang);
        try {
          localStorage.setItem("language", lang);
          window.dispatchEvent(new CustomEvent("languageChange", { detail: lang }));
        } catch {}
      }
    }
  }, [setLanguage]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setError(null);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, phone, message, consent }),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || res.statusText);
      }

      setOk(true);
      setName("");
      setCompany("");
      setPhone("");
      setMessage("");
    } catch (err: unknown) {
      setOk(false);
      setError(err instanceof Error ? err.message : t("common.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] overflow-hidden bg-indigo-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url(/contact/contact-header.png)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-950/50 to-slate-50" />

        <div className="relative container mx-auto h-full flex flex-col justify-center px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {t("contact.title")}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">
              {t("contact.headerDescription")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 -mt-24 relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl rounded-3xl overflow-hidden bg-white ring-1 ring-slate-900/5"
        >
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-white">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{t("contact.formTitle")}</h2>
              <p className="text-slate-500">{t("contact.description")}</p>
            </div>

            <AnimatePresence mode="wait">
              {ok === true ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center bg-green-50 rounded-2xl border border-green-100"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Icons.CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700 max-w-xs">{t("contact.successMessage")}</p>
                  <button
                    onClick={() => setOk(null)}
                    className="mt-6 text-sm font-medium text-green-700 hover:text-green-800 underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="space-y-6"
                >
                  {ok === false && error && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-start gap-3">
                      <Icons.AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                          placeholder="请输入您的姓名"
                        />
                        <Icons.User className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        公司名称 <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                          placeholder="请输入您的公司名称"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      联系电话 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                        placeholder="请输入您的联系电话"
                      />
                      <Icons.Phone className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      需求描述 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      minLength={5}
                      maxLength={5000}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="请详细描述您的需求或问题..."
                      className="w-full h-32 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none"
                    />
                    <div className="flex justify-end">
                      <span className="text-xs text-slate-400">{message.length}/5000</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        id="consent"
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all checked:border-blue-500 checked:bg-blue-500"
                      />
                      <Icons.CheckCircle className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <label
                      htmlFor="consent"
                      className="text-sm text-slate-500 cursor-pointer select-none"
                    >
                      {t("feedbackPage.consent")}
                    </label>
                  </div>

                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full group relative flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      <Icons.Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        {t("contact.submit")}
                        <Icons.Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Company Info */}
          <div className="lg:col-span-5 bg-white text-slate-900 p-8 md:p-12 relative overflow-hidden border-l border-slate-100">
            {/* Company Info Section */}
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t("contact.companyInfo")}</h3>

                <div className="space-y-8">
                  {/* Company Overview */}
                  <div>
                    <h4 className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wider">
                      {t("contact.aboutUs")}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {t("contact.companyDescription")}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h4 className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                      {t("contact.contactInfo")}
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-50 shrink-0">
                          <Icons.MapPin className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <span className="block text-xs text-slate-500 mb-0.5">
                            {t("contact.addressTitle")}
                          </span>
                          <span className="text-sm text-slate-900">{t("contact.address")}</span>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-50 shrink-0">
                          <Icons.User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <span className="block text-xs text-slate-500 mb-0.5">
                            {t("contact.contactPersonTitle")}
                          </span>
                          <span className="text-sm text-slate-900">{t("contact.contactPerson")}</span>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-50 shrink-0">
                          <Icons.Phone className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <span className="block text-xs text-slate-500 mb-0.5">
                            {t("contact.phoneTitle")}
                          </span>
                          <span className="text-sm text-slate-900">{t("contact.phone")}</span>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-50 shrink-0">
                          <Icons.Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <span className="block text-xs text-slate-500 mb-0.5">
                            {t("contact.emailTitle")}
                          </span>
                          <span className="text-sm text-slate-900">{t("contact.officialEmail")}</span>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-50 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-xs text-slate-500 mb-0.5">
                            {t("contact.hoursTitle")}
                          </span>
                          <span className="text-sm text-slate-900">{t("contact.workingHours")}</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Company Gallery */}
                  <div>
                    <h4 className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                      公司实景
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                        <Image 
                          src="/about/company-building.png" 
                          alt="公司大楼" 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                        <Image 
                          src="/about/factory-interior.png" 
                          alt="工厂内部" 
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                      资质证书
                    </h4>
                    <div className="flex gap-3 flex-wrap">
                      <div className="px-4 py-2 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                        ISO 9001
                      </div>
                      <div className="px-4 py-2 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                        CE 认证
                      </div>
                      <div className="px-4 py-2 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                        SGS 检测
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-10 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <div className="flex items-center gap-2 mb-2 text-blue-600">
                  <Icons.Info className="w-4 h-4" />
                  <span className="font-medium text-sm">{t("contact.importantNote")}</span>
                </div>
                <p className="text-xs text-slate-600">{t("contact.noteContent")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
