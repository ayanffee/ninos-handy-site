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

        {/* SLOGAN — left side, painted on the grass */}
        <div className="absolute bottom-[28%] left-[4%] md:left-[6%] z-10 pointer-events-none">
          <p
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(8px, 1.4vw, 16px)',
              lineHeight: '2.2',
              color: 'rgba(255,255,255,0.18)',
              textTransform: 'uppercase',
              transform: 'perspective(500px) rotateX(50deg)',
              transformOrigin: 'bottom left',
              textShadow: '2px 2px 0px rgba(0,80,0,0.4), 0 4px 12px rgba(0,0,0,0.3)',
              imageRendering: 'pixelated',
              letterSpacing: '0.05em',
            }}
          >
            Fast &amp; Reliable<br />Landscaping &amp;<br />Handy Services
          </p>
        </div>

        {/* BUSINESS NAME — right side, stamped on the grass */}
        <div className="absolute bottom-[26%] right-[4%] md:right-[6%] z-10 pointer-events-none">
          <h1
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(10px, 2vw, 24px)',
              lineHeight: '1',
              color: 'rgba(255,255,255,0.22)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              transform: 'perspective(500px) rotateX(50deg)',
              transformOrigin: 'bottom right',
              textShadow: '3px 3px 0px rgba(0,80,0,0.5), 0 6px 16px rgba(0,0,0,0.35)',
              imageRendering: 'pixelated',
              letterSpacing: '0.08em',
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
