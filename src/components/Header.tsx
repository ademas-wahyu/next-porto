// src/components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Daftar item navigasi untuk header.
const navItems = [
  { name: 'Tentang Saya', href: '#about' },
  { name: 'Layanan', href: '#services' },
  { name: 'Portofolio', href: '#portofolio' },
  { name: 'Kontak', href: '#contact' },
];

// Komponen Header utama.
const Header = () => {
  // State untuk mengontrol visibilitas menu mobile.
  const [isOpen, setIsOpen] = useState(false);
  // State untuk melacak apakah header harus memiliki latar belakang solid (setelah scroll).
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi scroll dan mengubah tampilan header.
  useEffect(() => {
    const handleScroll = () => {
      // Jika posisi scroll lebih dari 10px, ubah state isScrolled menjadi true.
      setIsScrolled(window.scrollY > 10);
    };

    // Tambahkan event listener saat komponen dimuat.
    window.addEventListener('scroll', handleScroll);
    // Hapus event listener saat komponen dibongkar untuk mencegah kebocoran memori.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Varian animasi untuk menu mobile.
  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    // Tag header dibuat sticky agar tetap di atas saat di-scroll.
    // Transisi ditambahkan untuk perubahan warna latar belakang yang mulus.
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Judul/Logo Situs */}
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-gray-50">
            Ade Mas Wahyu
          </Link>

          {/* Navigasi Desktop (terlihat di layar medium dan lebih besar) */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Tombol Hamburger Menu (terlihat di layar kecil) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-gray-50 focus:outline-none"
              aria-label="Buka menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (muncul saat tombol hamburger diklik) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg pb-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)} // Tutup menu setelah link diklik
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
