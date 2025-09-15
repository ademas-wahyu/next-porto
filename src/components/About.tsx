'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const techStack = [
  'HTML5 & CSS3',
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Figma',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const fade = (dir: 'up' | 'down' | 'left' | 'right' = 'up', delay = 0) => {
  const distance = 28;
  const axis = dir === 'left' || dir === 'right' ? 'x' : 'y';
  const from = dir === 'left' || dir === 'up' ? distance : -distance;
  return {
    hidden: { opacity: 0, [axis]: from },
    show: {
      opacity: 1,
      [axis]: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
      {/* decorative background */}
      <BackgroundBubbles />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Image */}
          <motion.div
            className="flex justify-center"
            variants={fade('right')}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          >
            <div className="relative h-80 w-80 md:h-[22rem] md:w-[22rem]">
              {/* gradient ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-400/60 via-fuchsia-400/50 to-blue-400/60 blur-lg" aria-hidden />

              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl shadow-purple-500/10">
                <Image
                  src="/ade-mas-wahyu-web-developer.png"
                  alt="Foto Ade Mas Wahyu — Web Developer"
                  fill
                  sizes="(min-width: 768px) 22rem, 20rem"
                  className="object-cover"
                  priority
                />
              </div>

              {/* floating highlight */}
              <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-purple-400/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-8 h-24 w-24 rounded-full bg-blue-400/30 blur-3xl" />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div variants={fade('left', 0.05)}>
            <motion.h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl" variants={fade('up', 0.05)}>
              Perpaduan Antara Kode dan Kreativitas
            </motion.h2>

            <motion.p className="mb-6 text-lg leading-relaxed text-slate-600" variants={fade('up', 0.1)}>
              Halo! Saya Ade Mas Wahyu, seorang web developer dengan gairah untuk menciptakan pengalaman digital yang bersih, fungsional, dan ramah pengguna. Bagi saya, coding bukan hanya tentang menulis baris perintah, tetapi tentang memecahkan masalah dan mengubah ide menjadi kenyataan digital yang berdampak.
            </motion.p>

            <motion.p className="mb-8 text-lg leading-relaxed text-slate-600" variants={fade('up', 0.15)}>
              Saya membantu bisnis dan individu untuk membangun kehadiran online yang kuat, mulai dari landing page yang menarik hingga aplikasi web yang kompleks.
            </motion.p>

            <motion.h3 className="mb-4 text-2xl font-semibold text-slate-800" variants={fade('up', 0.2)}>
              Teknologi yang Saya Gunakan:
            </motion.h3>

            <motion.ul
              className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-2"
              variants={container}
            >
              {techStack.map((tech, i) => (
                <motion.li
                  key={tech}
                  className="group flex items-center rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 shadow-sm ring-1 ring-black/0 transition hover:border-purple-300/60 hover:shadow-md hover:ring-black/5"
                  variants={fade('up', i * 0.03)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-purple-600 transition group-hover:scale-110"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">{tech}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>

      {/* local keyframes for subtle float */}
      <style>{`
        @keyframes floaty { 0% { transform: translateY(0) } 50% { transform: translateY(-8px) } 100% { transform: translateY(0) } }
        .floaty { animation: floaty 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .floaty { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

function BackgroundBubbles() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* soft color wash */}
      <div className="absolute inset-0 [background:radial-gradient(60%_40%_at_15%_20%,rgba(168,85,247,.10),transparent_60%),radial-gradient(50%_35%_at_85%_75%,rgba(59,130,246,.12),transparent_60%)]" />

      {/* subtle noise grid */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,.06) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      {/* bokeh bubbles */}
      <div className="floaty absolute -left-8 top-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-300/40 to-blue-300/40 blur-3xl" />
      <div className="floaty absolute right-14 top-24 h-52 w-52 rounded-full bg-gradient-to-br from-fuchsia-300/40 to-indigo-300/40 blur-3xl" style={{ animationDelay: '-.8s' }} />
      <div className="floaty absolute -bottom-10 left-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-300/30 to-purple-300/30 blur-3xl" style={{ animationDelay: '-.3s' }} />
    </div>
  );
}
