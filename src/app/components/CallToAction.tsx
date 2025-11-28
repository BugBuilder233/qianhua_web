import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export default function CallToAction({
  title,
  description,
  buttonText,
  buttonHref = "/contact",
  className = "",
}: CTAProps) {
  const { t } = useLanguage();

  const defaultTitle = t("callToAction.title");
  const defaultDescription = t("callToAction.description");
  const defaultButtonText = t("callToAction.button");

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-linear-to-br from-blue-600 via-indigo-600 to-indigo-700 rounded-[var(--radius)] p-8 md:p-16 text-center text-white overflow-hidden shadow-xl"
          >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/30 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"
            />

            {/* Decorative Grid Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {title || defaultTitle}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              {description || defaultDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                href={buttonHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-[var(--radius)] hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl group"
              >
                {buttonText || defaultButtonText}
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
