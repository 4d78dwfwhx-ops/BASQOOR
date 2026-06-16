"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Truck,
  Star,
  Search,
  Award,
  MessageCircle,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "تجار موثوقون",
    description: "جميع التجار معتمدون وموثقون مع نظام تقييم شفاف",
    color: "gold",
    gradient: "from-gold/20 to-gold-light/20",
  },
  {
    icon: Zap,
    title: "توصيل سريع",
    description: "شحن خلال 24 ساعة مع تتبع مباشر للطلبات",
    color: "emerald",
    gradient: "from-emerald/20 to-emerald/30",
  },
  {
    icon: Truck,
    title: "SOS على الطريق",
    description: "مساعدة فورية على مدار الساعة في أي مكان",
    color: "crimson",
    gradient: "from-crimson/20 to-crimson/30",
  },
  {
    icon: Star,
    title: "تقييمات حقيقية",
    description: "مراجعات من عملاء حقيقيين مع صور",
    color: "azure",
    gradient: "from-azure/20 to-azure/30",
  },
  {
    icon: Search,
    title: "بحث ذكي",
    description: "ابحث بالـ VIN أو رقم القطعة أو الوصف",
    color: "purple",
    gradient: "from-purple-500/20 to-purple-500/30",
  },
  {
    icon: Award,
    title: "ضمان الجودة",
    description: "جميع القطع مفحوصة ومضمونة",
    color: "gold",
    gradient: "from-gold/20 to-gold-light/20",
  },
  {
    icon: MessageCircle,
    title: "دردشة مباشرة",
    description: "تواصل فوري مع التجار والورش",
    color: "azure",
    gradient: "from-azure/20 to-azure/30",
  },
  {
    icon: MapPin,
    title: "أقرب الورش",
    description: "اعثر على أفضل الورش بالقرب منك",
    color: "emerald",
    gradient: "from-emerald/20 to-emerald/30",
  },
];

const colorMap: Record<string, string> = {
  gold: "text-gold bg-gold/10",
  emerald: "text-emerald bg-emerald/10",
  crimson: "text-crimson bg-crimson/10",
  azure: "text-azure bg-azure/10",
  purple: "text-purple-400 bg-purple-500/10",
};

export function Features() {
  return (
    <section id="marketplace" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold/30 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold">
              مميزات حصرية
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">لماذا BASQOR؟</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            منصة متكاملة مصممة خصيصاً للسوق السعودي بأعلى معايير الجودة
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 card-hover group cursor-pointer"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${colorMap[feature.color]} group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sparkles(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
