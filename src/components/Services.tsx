// src/components/Services.tsx
'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

// Anda bisa mengganti ikon-ikon ini dari https://heroicons.com/
const servicesData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Pengembangan Website Kustom',
    description: 'Membuat website dari awal sesuai dengan kebutuhan unik bisnis Anda, memastikan fungsionalitas dan desain yang presisi.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Desain Web Responsif',
    description: 'Menjamin website Anda tampil sempurna dan mudah digunakan di semua perangkat, mulai dari desktop hingga smartphone.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    title: 'Pengembangan E-commerce',
    description: 'Membangun toko online yang aman, cepat, dan kaya fitur untuk membantu Anda menjual produk secara efektif.',
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const card: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Services = () => {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden">
      {/* dekorasi halus */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background:radial-gradient(60%_40%_at_15%_20%,rgba(168,85,247,.07),transparent_60%),radial-gradient(50%_35%_at_85%_75%,rgba(59,130,246,.08),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <motion.div
          className="text-center mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900"
            variants={fadeUp(0)}
          >
            Layanan yang Saya Tawarkan
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
            variants={fadeUp(0.05)}
          >
            Saya menyediakan solusi digital untuk membantu bisnis Anda tumbuh dan berhasil di dunia online.
          </motion.p>
        </motion.div>

        {/* Grid untuk Kartu Layanan */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {servicesData.map((service) => (
            <motion.article
              key={service.title}
              variants={card}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              className="group relative bg-white p-8 rounded-2xl shadow-lg ring-1 ring-black/5 hover:shadow-xl"
            >
              {/* gradient ring halus saat hover */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100 bg-[conic-gradient(at_0%_0%,theme(colors.purple.300/.35),theme(colors.blue.300/.35),transparent_30%)] blur"></div>

              <div className="relative">
                <motion.div
                  className="text-blue-600 mb-4"
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ rotate: 3 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
