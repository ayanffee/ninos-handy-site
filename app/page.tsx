"use client";
import { useRef, useState } from 'react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playMusic = () => { audioRef.current?.play(); };
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSent, setFormSent] = useState(false);

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

      {/* SECTION 2: MEET NINO — Underground earth layers */}
      <section className="relative overflow-hidden scrolling-earth">
        <div className="relative py-20 px-8 z-10">

          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            {/* Photo — pixel-art framed */}
            <div className="relative">
              <div className="w-64 h-64 md:w-[340px] md:h-[340px] border-[8px] border-[#6b5a4a] bg-[#2a1d0e]"
                style={{
                  boxShadow: '8px 8px 0px #1a0f05, -2px -2px 0px #8a7a6a',
                  imageRendering: 'pixelated',
                }}>
                <img src="/lana.jpeg" alt="Nino" className="w-full h-full object-cover" style={{ imageRendering: 'auto' }} />
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
                HI, I&apos;M <span style={{ color: '#5dba5d' }}>NINO</span>
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

      </section>

      {/* SECTION 3: OUR SERVICES */}
      <section className="relative py-20 px-8" style={{ background: '#0d0d0d' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center mb-16"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(16px, 2.5vw, 28px)',
              color: '#5dba5d',
              textShadow: '3px 3px 0px rgba(0,0,0,0.8)',
            }}
          >
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: 'Lawn Care',
                desc: 'Mowing, edging, fertilizing, and seasonal cleanups to keep your yard pristine.',
              },
              {
                icon: '🌳',
                title: 'Landscaping',
                desc: 'Full yard transformations — garden beds, sod installation, mulching, and design.',
              },
              {
                icon: '🔧',
                title: 'Handy Services',
                desc: 'Fence repair, pressure washing, gutter cleaning, and general outdoor maintenance.',
              },
              {
                icon: '✂️',
                title: 'Hedge Trimming',
                desc: 'Precision trimming and shaping for hedges, shrubs, and ornamental plants.',
              },
              {
                icon: '🍂',
                title: 'Seasonal Cleanup',
                desc: 'Fall leaf removal, spring prep, storm debris cleanup, and yard restoration.',
              },
              {
                icon: '💧',
                title: 'Irrigation',
                desc: 'Sprinkler installation, repair, and smart watering solutions for your lawn.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 transition-all hover:scale-105"
                style={{
                  background: '#1a1a1a',
                  border: '4px solid #2a2a2a',
                  boxShadow: '6px 6px 0px #000',
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: 'clamp(10px, 1.2vw, 14px)',
                    color: '#d4a853',
                    textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: 'clamp(7px, 0.8vw, 10px)',
                    lineHeight: '2.2',
                    color: '#8a8a8a',
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: BEFORE & AFTER */}
      <section className="relative py-20 px-8" style={{ background: '#111' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(16px, 2.5vw, 28px)',
              color: '#d4a853',
              textShadow: '3px 3px 0px rgba(0,0,0,0.8)',
            }}
          >
            Before &amp; After
          </h2>
          <p
            className="text-center mb-14"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(8px, 0.9vw, 11px)',
              lineHeight: '2',
              color: '#6a6a6a',
            }}
          >
            We don&apos;t just mow. We transform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2].map((n) => (
              <div key={n} className="flex gap-2">
                {/* Before */}
                <div className="flex-1 relative" style={{ border: '4px solid #3a1a1a', background: '#1a0a0a' }}>
                  <div className="w-full aspect-video flex items-center justify-center">
                    <p style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '10px',
                      color: '#5a3a3a',
                    }}>
                      Before Photo {n}
                    </p>
                  </div>
                  <div className="py-2 text-center" style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '9px',
                    color: '#ff6b6b',
                    background: '#1a0505',
                    borderTop: '2px solid #3a1a1a',
                  }}>
                    BEFORE
                  </div>
                </div>
                {/* After */}
                <div className="flex-1 relative" style={{ border: '4px solid #1a3a1a', background: '#0a1a0a' }}>
                  <div className="w-full aspect-video flex items-center justify-center">
                    <p style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '10px',
                      color: '#3a5a3a',
                    }}>
                      After Photo {n}
                    </p>
                  </div>
                  <div className="py-2 text-center" style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '9px',
                    color: '#5dba5d',
                    background: '#051a05',
                    borderTop: '2px solid #1a3a1a',
                  }}>
                    AFTER
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT FORM */}
      <section className="relative py-20 px-8 scrolling-earth">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(16px, 2.5vw, 28px)',
              color: '#5dba5d',
              textShadow: '3px 3px 0px rgba(0,0,0,0.8)',
            }}
          >
            Get A Quote
          </h2>
          <p
            className="text-center mb-12"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(7px, 0.9vw, 10px)',
              lineHeight: '2',
              color: '#c4a882',
              textShadow: '1px 1px 0px rgba(0,0,0,0.4)',
            }}
          >
            Tell us what you need. We&apos;ll handle the rest.
          </p>

          {formSent ? (
            <div className="text-center py-16" style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '14px',
              color: '#5dba5d',
              textShadow: '2px 2px 0px rgba(0,0,0,0.6)',
            }}>
              Message Sent!<br />
              <span style={{ fontSize: '10px', color: '#c4a882' }}>
                We&apos;ll get back to you soon.
              </span>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormSent(true);
              }}
              className="flex flex-col gap-5"
            >
              {[
                { name: 'name', placeholder: 'Your Name', type: 'text' },
                { name: 'email', placeholder: 'Your Email', type: 'email' },
                { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.name !== 'phone'}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full outline-none transition-all focus:scale-[1.02]"
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: 'clamp(9px, 1vw, 12px)',
                    padding: '16px 20px',
                    background: 'rgba(0,0,0,0.6)',
                    color: '#c4a882',
                    border: '4px solid #4a3a2a',
                    boxShadow: '4px 4px 0px rgba(0,0,0,0.4)',
                  }}
                />
              ))}
              <textarea
                placeholder="Tell us about your project..."
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full outline-none resize-none transition-all focus:scale-[1.02]"
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 'clamp(9px, 1vw, 12px)',
                  padding: '16px 20px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#c4a882',
                  border: '4px solid #4a3a2a',
                  boxShadow: '4px 4px 0px rgba(0,0,0,0.4)',
                }}
              />
              <button
                type="submit"
                className="w-full transition-all transform hover:scale-105 active:scale-95"
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 'clamp(10px, 1.2vw, 14px)',
                  padding: '18px 28px',
                  background: '#5dba5d',
                  color: '#0a1a0a',
                  border: '4px solid #3a8a3a',
                  boxShadow: '6px 6px 0px #0a0705',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-8" style={{ background: '#080808' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div>
              <p style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 'clamp(12px, 1.5vw, 18px)',
                color: '#d4a853',
                textShadow: '2px 2px 0px rgba(0,0,0,0.6)',
              }}>
                ninothandyservices
              </p>
            </div>
            <div className="flex flex-col gap-2 text-right">
              <a href="tel:+1234567890" style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 'clamp(7px, 0.8vw, 10px)',
                color: '#5dba5d',
                textDecoration: 'none',
              }}>
                📞 (123) 456-7890
              </a>
              <a href="mailto:hello@ninothandyservices.com" style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 'clamp(7px, 0.8vw, 10px)',
                color: '#5dba5d',
                textDecoration: 'none',
              }}>
                ✉️ hello@ninothandy.com
              </a>
            </div>
          </div>
          <div className="text-center" style={{
            borderTop: '2px solid #1a1a1a',
            paddingTop: '20px',
          }}>
            <p style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(6px, 0.7vw, 9px)',
              color: '#3a3a3a',
            }}>
              © 2026 ninothandyservices — Built with Grit
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
