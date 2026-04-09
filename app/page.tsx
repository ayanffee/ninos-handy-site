"use client";
import { useRef } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playMusic = () => { audioRef.current?.play(); };

  return (
    <main className="relative w-full bg-[#0f1a0f]">
      <audio ref={audioRef} src="/hardwork.mp3" />

      {/* --- SECTION 1: ANIMATED HERO --- */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden border-b-8 border-black">

        {/* SCROLLING BACKGROUND */}
        <div className="absolute inset-0 z-0 flex animate-infinite-scroll">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative w-full h-full flex-shrink-0">
              <img src="/image_20.png" alt="" className="w-full h-full object-cover pixelated" />
            </div>
          ))}
        </div>

        {/* LOGO */}
        <div className="absolute top-6 left-6 z-30">
          <div className="bg-black/90 p-4 border-2 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-xl md:text-3xl font-black text-white italic leading-none">
              NINO'S <span className="text-yellow-400">HANDY</span>
            </h1>
          </div>
        </div>

        {/* WALKER — pinned to the grass, scaled down so he fits the scene */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-20 pointer-events-none origin-bottom scale-[0.45] md:scale-[0.55]">
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
              HI, I'M <span className="text-emerald-700">LANA</span>
            </h2>
            <p className="text-2xl text-slate-800 font-medium mb-10 leading-relaxed">
              I specialize in extreme landscape overhauls. We don't just mow; we transform your land into a masterpiece.
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
        Nino's Handy Services © 2026 — Built with Grit
      </footer>
    </main>
  );
}
