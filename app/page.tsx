"use client";
import { useRef } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playMusic = () => { audioRef.current?.play(); };

  return (
    <main className="relative w-full bg-[#0f1a0f]">
      <audio ref={audioRef} src="/hardwork.mp3" />

      {/* --- SECTION 1: ANIMATED HERO --- */}
      <section className="relative h-screen w-full overflow-hidden border-b-8 border-black">

        {/* SCROLLING BACKGROUND — one div, CSS handles tiling + animation */}
        <div className="absolute inset-0 z-0 scrolling-bg" />

        {/* SLOGAN — left side, flat on the grass */}
        <div className="absolute bottom-[24%] left-[5%] z-10 pointer-events-none">
          <p
            className="text-lg md:text-3xl font-black uppercase italic tracking-[0.12em] leading-tight text-white/25"
            style={{
              transform: 'perspective(400px) rotateX(55deg) rotateZ(-2deg)',
              transformOrigin: 'bottom left',
              textShadow: '0 2px 6px rgba(0,0,0,0.4)',
              maxWidth: '320px',
            }}
          >
            fast and reliable<br />landscaping &amp;<br />handy services
          </p>
        </div>

        {/* BUSINESS NAME — right side, flat on the grass */}
        <div className="absolute bottom-[22%] right-[5%] z-10 pointer-events-none">
          <h1
            className="text-3xl md:text-6xl font-black uppercase italic tracking-[0.15em] leading-none whitespace-nowrap text-white/30"
            style={{
              transform: 'perspective(400px) rotateX(55deg) rotateZ(2deg)',
              transformOrigin: 'bottom right',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            ninothandyservices
          </h1>
        </div>

        {/* WALKER — sits on the grass, scales nicely on mobile vs desktop */}
        <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 z-20 pointer-events-none origin-bottom scale-[0.35] md:scale-[0.5]">
          <div className="nino-walker-sprite"></div>
        </div>

      </section>

      {/* SECTION 2: MEET LANA */}
      <section className="bg-white py-24 px-10 border-t-8 border-black">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] border-[12px] border-black bg-slate-200 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
            <img src="/lana.jpeg" alt="Lana" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-6xl font-black text-black uppercase italic mb-6 leading-tight">
              HI, I&apos;M <span className="text-emerald-700">LANA</span>
            </h2>
            <p className="text-2xl text-slate-800 font-medium mb-10 leading-relaxed">
              I specialize in extreme landscape overhauls. We don&apos;t just mow; we transform your land into a masterpiece.
            </p>
            <button
              onClick={playMusic}
              className="px-10 py-5 bg-black text-yellow-400 font-black text-xl uppercase tracking-widest hover:bg-emerald-700 hover:text-white transition-all transform hover:scale-105 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]"
            >
              What I Stand For
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black py-10 text-center text-yellow-400 font-bold uppercase tracking-widest border-t-8 border-black">
        ninothandyservices © 2026 — Built with Grit
      </footer>
    </main>
  );
}
