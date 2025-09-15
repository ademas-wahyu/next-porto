'use client';

import { motion, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const fade = (
  dir: 'up' | 'down' | 'left' | 'right' = 'up',
  delay = 0
): Variants => {
  const distance = 28;
  const isX = dir === 'left' || dir === 'right';
  const from = dir === 'up' || dir === 'left' ? distance : -distance;
  return {
    hidden: { opacity: 0, ...(isX ? { x: from } : { y: from }) },
    show: {
      opacity: 1,
      ...(isX ? { x: 0 } : { y: 0 }),
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
};

// Komponen Hero: Bagian utama yang menyambut pengunjung di bagian atas halaman.
export default function Hero() {
  return (
    // Section utama dengan latar belakang gradien dan styling untuk penataan konten.
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-bl from-purple-400 to-blue-900">
      {/* Komponen untuk menampilkan gelembung animasi di latar belakang. */}
      <BokehBubbles />

      {/* Konten utama: judul, sub-judul, dan tombol ajakan bertindak (CTA). */}
      <motion.div
        className="relative z-10 px-6 flex flex-col items-center justify-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        {/* Judul utama dengan animasi fade-up. */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-50 mb-4"
          variants={fade('up', 0.0)}
        >
          Mengubah Ide Menjadi Website Modern
        </motion.h1>

        {/* Sub-judul atau deskripsi singkat dengan animasi fade-up. */}
        <motion.p
          className="text-lg md:text-xl text-gray-50/95 max-w-2xl mb-8 text-center"
          variants={fade('up', 0.05)}
        >
          Saya Ade Mas Wahyu, seorang Web Developer yang siap membantu bisnis Anda
          untuk go digital.
        </motion.p>

        {/* Tombol CTA (Call to Action) yang mengarah ke portofolio. */}
        <motion.a
          href="#portofolio"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          variants={fade('up', 0.1)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 240, damping: 18 }}
        >
          {/* Teks di dalam tombol CTA dengan styling untuk efek hover. */}
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Lihat Portofolio
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}

/* ===== Layer bubble ===== */
function BokehBubbles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* wash warna lembut + vignette */}
      <motion.div
        className="absolute inset-0 [background:radial-gradient(65%_40%_at_70%_10%,rgba(59,130,246,.10),transparent_60%),radial-gradient(60%_40%_at_20%_80%,rgba(168,85,247,.12),transparent_60%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Tekstur halus (grid bokeh) */}
      <motion.div
        className="absolute inset-0 opacity-25 mix-blend-soft-light"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      />

      {/* Bubbles utama — fade/scale-in + CSS float/rotate */}
      <Bubble
        className="left-[6%] top-[12%] h-[22rem] w-[22rem] from-indigo-300/50 via-purple-300/45 to-fuchsia-300/45"
        spin
        delay={0.05}
      />
      <Bubble
        className="left-[58%] top-[6%] h-[28rem] w-[28rem] from-purple-400/45 via-fuchsia-300/40 to-blue-300/40"
        delay={0.08}
      />
      <Bubble
        className="left-[74%] top-[46%] h-[20rem] w-[20rem] from-sky-300/45 via-blue-300/40 to-indigo-300/40"
        spin
        delay={0.11}
      />
      <Bubble
        className="left-[18%] top-[58%] h-[26rem] w-[26rem] from-violet-400/45 via-purple-300/40 to-sky-300/40"
        delay={0.14}
      />
      <Bubble
        className="left-[40%] top-[36%] h-[18rem] w-[18rem] from-fuchsia-300/45 via-pink-300/40 to-rose-300/40"
        delay={0.17}
      />
      <Bubble
        className="left-[8%] top-[78%] h-[16rem] w-[16rem] from-amber-300/35 via-orange-300/35 to-pink-300/35"
        delay={0.2}
      />
      <Bubble
        className="left-[80%] top-[78%] h-[24rem] w-[24rem] from-blue-300/45 via-sky-300/45 to-cyan-300/45"
        delay={0.23}
      />
      <Bubble
        className="left-[35%] top-[82%] h-[14rem] w-[14rem] from-indigo-300/40 via-purple-300/40 to-sky-300/40"
        delay={0.26}
      />
    </div>
  );
}

function Bubble({
  className = '',
  spin = false,
  delay = 0,
}: {
  className?: string;
  spin?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'bubble absolute rounded-full blur-3xl saturate-150 mix-blend-screen',
        'bg-gradient-to-br',
        spin ? 'bubble--spin' : '',
        className,
      ].join(' ')}
      aria-hidden
    />
  );
}
