// src/components/Portofolio.tsx
"use client"

import React from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

const portfolioItems = [
  {
    title: 'Desain Ulang Situs Web E-commerce',
    description:
      'Desain ulang lengkap platform e-commerce, dengan fokus pada pengalaman pengguna dan daya tarik visual.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgXuH8paG9LNv3QRRdqnyUoEUzIUlGyEIxPXvoMNiu7LGpb3O-TzbuwPLDVseq6ubsIxOZTD5MSkE--_dKbpXJzC38zYq0-asdxx_cBNc3hNY8SbNdPEa8Fc-HPNr8S7aF_2sJpsGtev5LKrPUMQkH7OhrDPi61C8Zz2e6dY_MoOXkj16M09ZQPaEelCORR2eio3nXR96HxVe8civo4tUYYYOIQYjxL0-7EE0Uk5_q35-bDDeXnQ4pnBUbFxyf7AuFAoaxX3vpWA',
    category: 'Desain Web',
  },
  {
    title: 'Aplikasi Seluler untuk Pelacakan Kebugaran',
    description:
      'Aplikasi seluler yang dirancang untuk membantu pengguna melacak aktivitas dan kemajuan kebugaran mereka.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpMx_QwLUzH6Wl6W6l9XD1eXqFp_cf6v4LQfNMQ_yVXEQ-vBOm6N_Ksl3nH19umaVo1cXlOpw_6WLRbCwqUFPMgItJ7vuT5I5kcuZkPa245LIBFRHsQGtQvSRLifzwq_DTBNcRwpM66kBOuj70a6GZnXw8svrmGSBF5pA0rrUK4WHCoH4TJufvz_hqqPaJ47feYPSVpLrHz7QxK9bmEICw06-4I2cvSv647zi1hvZ4BQhXHYr4iJhT9_SiIbUh3SavVKWC8gYZyg',
    category: 'Aplikasi Seluler',
  },
  {
    title: 'Identitas Merek untuk Startup Teknologi',
    description:
      'Pengembangan identitas merek, termasuk logo, palet warna, dan tipografi, untuk perusahaan teknologi baru.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhcN-MJq2-Udus9xERpj5loiOhkSaX3AFoIJgiZEio9ffsujqpOTHyDWGG8ZVkUDKTh0U5ZddSmTD6_2rioSHcuIgIKo_W8P0KUVbvm3gM5y9yEh64NbK2HnucFAC58inS4FBnhuUKJw2HlB2QDDYnohKz13un1-RdtA_Da3toaaZmd0SIVg_DuqG8QqlHrQgJ9ftLyNOYpgjubbojmzMrzSwBsAEKvgERD2ceNW2pY35cH9Va0_-mm0JAjC7WeGyGpv46OlqmOQ',
    category: 'Branding',
  },
  {
    title: 'Desain Situs Web Portofolio',
    description:
      'Desain dan pengembangan situs web portofolio pribadi untuk menampilkan proyek dan keterampilan desain.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC55DyD3wIp99OlAHTjwtJPfB3E_3EqRbPPFW-BLulm4tcPCTAG8FMMRygrIp2fJN18XcotmBkSJTKfv6soXVdVbsxiWN5WzHsfOXgZkArG7ufywfGLrjgV0odxuxxFdtvWVnliAyi5CJIGCD8KzRX96amoXgy0tSMl5ktAV_9XGFeYuItYhJsj5TIMdoB4xSNX0zwZSRnwltDOi10Tlb1-EoEoIqj65kL8lzJWwDKlTVhRdxlJ5ik0RiNWuz-jb3wWJ8LsOiU_g',
    category: 'Desain Web',
  },
  {
    title: 'Platform Blog',
    description:
      'Platform blogging yang bersih dan minimalis yang berfokus pada keterbacaan dan pengalaman penulis.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpegxGvksWjwAt_ycspPAEC7MNP6mGl6sFMA46PDt--GOU258ifmI9XS2KkHCWe1oRTLPudNL62HMhBurd6ulR-Cw1YfsZfTRypN9GsgYYZT68EKuKItGtBzqNfml9blXHIL6BiB24i1Op1elV-KagBsS4CViJNVYafmgNZUoh6O8k6tOzoH8X7H7YeNFKzdxU8T_pObDPzwySOupbrfl3lUvseTedpgHefkzCj0qdS5B3HkdTRKqTFiv5U3zDZ74fqv0C3cx4dg',
    category: 'Desain Web',
  },
  {
    title: 'Dasbor Analisis Perusahaan',
    description:
      'Dasbor komprehensif untuk memvisualisasikan data dan wawasan utama bagi pemangku kepentingan bisnis.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNY0_yLjLz04w6XolOj208zXihliPO6EFFpSAg_9IwR1_86VxvZ9nERs4fkhdm_yPWAJqyG8RIVvu2G3EdV705fIpc2px9wPxwRHrFl8w037jvjpiN4HDZ0ydo5OtQpr_2mndzXWJd_35tfFOAlQrWkn1xKr1cSTfFpSaM3oJwD9sgw7EKqVo7MsBdE_XMiOSMh56TfAj4gwIOEU8jA6IYjHVEAqRgRwB0NU2rs5GzzYbNr3FhCW4rxIlJAaPvOXn8A23rbemvlw',
    category: 'Aplikasi Seluler',
  },
]

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

// Komponen Portfolio: Menampilkan galeri proyek dengan fungsionalitas filter.
const Portfolio = () => {
  // State untuk melacak filter kategori yang aktif.
  const [filter, setFilter] = React.useState('Semua')

  // Logika untuk memfilter item portofolio berdasarkan state filter.
  const filteredItems =
    filter === 'Semua'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter)

  // Daftar kategori filter untuk dirender secara dinamis.
  const filters = ['Semua', 'Desain Web', 'Aplikasi Seluler', 'Branding']

  return (
    // Section utama dengan ID dan styling yang mendukung mode gelap.
    <section id="portofolio" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Judul dan deskripsi section. */}
        <motion.div
          className="text-center mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50"
            variants={fadeUp(0)}
          >
            Portofolio
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-slate-300 max-w-3xl mx-auto"
            variants={fadeUp(0.05)}
          >
            Jelajahi pilihan proyek saya. Masing-masing menunjukkan dedikasi
            saya untuk menciptakan pengalaman pengguna yang intuitif, indah, dan
            efektif.
          </motion.p>
        </motion.div>

        {/* Tombol filter yang dirender secara dinamis. */}
        <motion.div
          className="flex justify-center flex-wrap gap-4 mb-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {filters.map((filterName, i) => (
            <motion.button
              key={filterName}
              onClick={() => setFilter(filterName)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors ${
                filter === filterName
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
              variants={fadeUp(i * 0.05)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterName}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid untuk menampilkan item-item portofolio. */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredItems.map((item, index) => (
            // Kartu individual untuk setiap item portofolio.
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800/80 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group ring-1 ring-black/5 dark:ring-white/10"
              variants={card}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  alt={item.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  src={item.imageUrl}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio