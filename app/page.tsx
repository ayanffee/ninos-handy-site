"use client";
import { useRef } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playMusic = () => { audioRef.current?.play(); };

  return (
    <main className="relative w-full bg-[#0f1a0f]">
      <audio ref={audioRef} src="/hardwork.mp3" />

      {/* --- SECTION 1: ANIMATED HERO --- */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* SCROLLING BACKGROUND — one div, CSS handles tiling + animation */}
        <div className="absolute inset-0 z-0 scrolling-bg" />

        {/* SLOGAN — left side of grass */}
        <div className="absolute bottom-[27%] left-[4%] z-10 pointer-events-none">
          <p
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(10px, 1.6vw, 20px)',
              lineHeight: '2.2',
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
              transform: 'perspective(500px) rotateX(50deg)',
              transformOrigin: 'bottom left',
              textShadow: '3px 3px 0px rgba(0,50,0,0.6), 0 0 20px rgba(255,255,255,0.15)',
              letterSpacing: '0.05em',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.3)',
            }}
          >
            Fast &amp; Reliable<br />Landscaping &amp;<br />Handy Services
          </p>
        </div>

        {/* BUSINESS NAME — right side of grass */}
        <div className="absolute bottom-[27%] right-[4%] z-10 pointer-events-none">
          <h1
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(10px, 1.6vw, 20px)',
              lineHeight: '2.2',
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
              transform: 'perspective(500px) rotateX(50deg)',
              transformOrigin: 'bottom right',
              textShadow: '3px 3px 0px rgba(0,50,0,0.6), 0 0 20px rgba(255,255,255,0.15)',
              letterSpacing: '0.05em',
              WebkitTextStroke: '0.5px rgba(255,255,255,0.3)',
              textAlign: 'right',
            }}
          >
            Nino.T<br />Handy<br />Services
          </h1>
        </div>

        {/* WALKER — sits on the grass, scales nicely on mobile vs desktop */}
        <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 z-20 pointer-events-none origin-bottom scale-[0.35] md:scale-[0.5]">
          <div className="nino-walker-sprite"></div>
        </div>

      </section>

      {/* SECTION 2: MEET LANA — Underground earth layers */}
      <section className="relative overflow-hidden" style={{ imageRendering: 'pixelated' }}>
        {/* Earth layer bands — continuation from hero's dirt bottom */}
        <div className="w-full h-[16px]" style={{ background: '#5a3a1a' }} /> {/* topsoil dark */}
        <div className="w-full h-[12px]" style={{ background: '#4a2e12' }} /> {/* topsoil darker */}
        <div className="w-full h-[8px]"  style={{ background: '#3d260f' }} /> {/* transition */}

        {/* Main content area — deep soil */}
        <div className="relative py-20 px-8" style={{ background: 'linear-gradient(180deg, #3a2410 0%, #2e1c0b 15%, #261608 30%, #1e1206 50%, #1a0f05 70%, #151515 100%)' }}>

          {/* Scattered pixel rocks/pebbles decoration */}
          <div className="absolute top-[10%] left-[8%] w-3 h-2 rounded-sm opacity-20" style={{ background: '#6b5a4a' }} />
          <div className="absolute top-[25%] right-[12%] w-4 h-2 rounded-sm opacity-15" style={{ background: '#7a6952' }} />
          <div className="absolute top-[50%] left-[15%] w-2 h-2 rounded-sm opacity-20" style={{ background: '#5c4d3d' }} />
          <div className="absolute top-[65%] right-[20%] w-3 h-1 rounded-sm opacity-15" style={{ background: '#6b5a4a' }} />
          <div className="absolute top-[80%] left-[25%] w-2 h-2 rounded-sm opacity-10" style={{ background: '#8a7a6a' }} />
          <div className="absolute top-[40%] left-[70%] w-3 h-2 rounded-sm opacity-15" style={{ background: '#5c4d3d' }} />
          <div className="absolute top-[15%] left-[45%] w-2 h-1 rounded-sm opacity-20" style={{ background: '#7a6952' }} />

          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            {/* Photo — pixel-art framed */}
            <div className="relative">
              <div className="w-64 h-64 md:w-[340px] md:h-[340px] border-[8px] border-[#6b5a4a] bg-[#2a1d0e]"
                style={{
                  boxShadow: '8px 8px 0px #1a0f05, -2px -2px 0px #8a7a6a',
                  imageRendering: 'pixelated',
                }}>
                <img src="/lana.jpeg" alt="Lana" className="w-full h-full object-cover" style={{ imageRendering: 'auto' }} />
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 text-left">
              <h2
                className="mb-4 leading-tight"
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 'clamp(18px, 3vw, 32px)',
                  color: '#d4a853',
                  textShadow: '3px 3px 0px rgba(0,0,0,0.6)',
                }}
              >
                HI, I&apos;M <span style={{ color: '#5dba5d' }}>LANA</span>
              </h2>
              <p
                className="mb-8 leading-relaxed"
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 'clamp(9px, 1.1vw, 13px)',
                  lineHeight: '2.4',
                  color: '#c4a882',
                  textShadow: '1px 1px 0px rgba(0,0,0,0.4)',
                }}
              >
                I specialize in extreme landscape<br />
                overhauls. We don&apos;t just mow;<br />
                we transform your land into<br />
                a masterpiece.
              </p>
              <button
                onClick={playMusic}
                className="transition-all transform hover:scale-105"
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 'clamp(9px, 1vw, 13px)',
                  padding: '16px 28px',
                  background: '#d4a853',
                  color: '#1a0f05',
                  border: '4px solid #8a6a2a',
                  boxShadow: '4px 4px 0px #0a0705',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                }}
              >
                What I Stand For
              </button>
            </div>
          </div>
        </div>

        {/* Deeper earth layers below content */}
        <div className="w-full h-[12px]" style={{ background: '#151515' }} />
        <div className="w-full h-[10px]" style={{ background: '#1a1a2a' }} /> {/* hint of deep blue rock */}
        <div className="w-full h-[8px]"  style={{ background: '#12121e' }} />
        <div className="w-full h-[6px]"  style={{ background: '#0e0e18' }} />
      </section>

      <footer className="bg-black py-10 text-center text-yellow-400 font-bold uppercase tracking-widest border-t-8 border-black">
        ninothandyservices © 2026 — Built with Grit
      </footer>
    </main>
  );
}
