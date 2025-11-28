import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "上海千骅机械 - Shanghai Qianhua Machinery",
  description: "致力于提供高品质产品和服务的企业，始终坚持以客户为中心，不断创新和进步。",
  keywords: "机械应用, 机械产品, 精密机械, 上海千骅机械, ShiJingTY",
  authors: [{ name: "上海千骅机械 Shanghai Qianhua Machinery" }],
  creator: "上海千骅机械 Shanghai Qianhua Machinery",
  publisher: "上海千骅机械 Shanghai Qianhua Machinery",
  openGraph: {
    title: "上海千骅机械 - Shanghai Qianhua Machinery",
    description: "致力于提供高品质产品和服务的机械企业。",
    url: "https://www.shanghaiqianhua.com",
    siteName: "上海千骅机械 Shanghai Qianhua Machinery",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "上海千骅机械 - Shanghai Qianhua Machinery",
    description: "致力于提供高品质产品和服务的机械企业。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#667EEA" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#8B9EFF" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="antialiased bg-background text-foreground transition-colors duration-200">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
