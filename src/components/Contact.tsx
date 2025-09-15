// src/components/Contact.tsx
"use client"

import React from 'react'
import { motion, type Variants } from 'framer-motion'

const fade = (
  dir: 'left' | 'right',
  delay = 0
): Variants => {
  const distance = 40;
  const from = dir === 'left' ? distance : -distance;
  return {
    hidden: { opacity: 0, x: from },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
};

// Komponen Contact: Menampilkan informasi kontak dan formulir kontak.
const Contact = () => {
  return (
    // Section utama dengan ID dan styling yang mendukung mode gelap.
    <section
      id="contact"
      className="px-6 md:px-10 lg:px-20 py-12 lg:py-24 bg-white dark:bg-slate-900 overflow-hidden"
    >
      {/* Kontainer grid untuk membagi layout menjadi dua kolom pada layar besar. */}
      <div className="mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Kolom Kiri: Informasi Kontak */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fade('right', 0)}
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Hubungi Saya</h1>
            <p className="text-slate-600 dark:text-slate-300">
              Saya selalu terbuka untuk mendiskusikan proyek baru, ide-ide
              kreatif, atau peluang untuk menjadi bagian dari visi Anda. Jangan
              ragu untuk menghubungi, dan saya akan membalas sesegera mungkin.
            </p>
          </div>
          {/* Daftar tautan kontak (Email, LinkedIn, GitHub). */}
          <div className="space-y-4 pt-4">
            <a
              className="flex items-center gap-4 group"
              href="mailto:ademaswahyubusiness@gmail.com"
            >
              <div className="flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 shrink-0 size-12 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined"> mail </span>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-gray-900 dark:text-gray-50">Email</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  ademaswahyubusiness@gmail.com
                </p>
              </div>
            </a>
            <a
              className="flex items-center gap-4 group"
              href="https://id.linkedin.com/in/ade-mas-wahyu-43315a286"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 shrink-0 size-12 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-gray-900 dark:text-gray-50">LinkedIn</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  linkedin.com/in/ade-mas-wahyu
                </p>
              </div>
            </a>
            <a
              className="flex items-center gap-4 group"
              href="https://github.com/ademas-wahyu"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 shrink-0 size-12 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-gray-900 dark:text-gray-50">GitHub</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  github.com/ademas-wahyu
                </p>
              </div>
            </a>
          </div>
        </motion.div>
        {/* Kolom Kanan: Formulir Kontak */}
        <motion.form
          className="space-y-6 bg-slate-50 dark:bg-slate-800/80 p-8 rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fade('left', 0.1)}
        >
          {/* Setiap field dalam form (Nama, Email, Subjek, Pesan). */}
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none text-gray-900 dark:text-gray-50"
              htmlFor="name"
            >
              Nama
            </label>
            <input
              className="form-input flex w-full rounded-md text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 h-11 px-4 text-sm placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              id="name"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none text-gray-900 dark:text-gray-50"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="form-input flex w-full rounded-md text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 h-11 px-4 text-sm placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              id="email"
              placeholder="Masukkan email Anda"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none text-gray-900 dark:text-gray-50"
              htmlFor="subject"
            >
              Subjek
            </label>
            <input
              className="form-input flex w-full rounded-md text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 h-11 px-4 text-sm placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              id="subject"
              placeholder="Masukkan subjek pesan"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none text-gray-900 dark:text-gray-50"
              htmlFor="message"
            >
              Pesan
            </label>
            <textarea
              className="form-textarea flex w-full rounded-md text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 min-h-36 p-4 text-sm placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              id="message"
              placeholder="Masukkan pesan Anda"
            ></textarea>
          </div>
          {/* Tombol kirim formulir. */}
          <button
            className="inline-flex w-full items-center justify-center rounded-md h-11 px-6 bg-blue-600 text-slate-50 text-sm font-bold hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            type="submit"
          >
            Kirim Pesan
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact