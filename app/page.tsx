"use client";
import { useEffect, useState } from "react";

const scenes = [
  { eyebrow: "THE MEETING, RECOMPOSED", title: "Make every meeting\nmatter.", body: "Pulse listens for the signal inside every conversation — then gives your team a clear next move." },
  { eyebrow: "A QUIETER KIND OF INTELLIGENCE", title: "From talk\nto traction.", body: "Every decision, owner, and open thread is captured while the room is still warm." },
  { eyebrow: "THE THREAD IS ALWAYS THERE", title: "Remember\nwhat matters.", body: "Search across your collective memory and bring the right context into the next conversation." },
  { eyebrow: "READY WHEN YOU ARE", title: "Leave room\nfor the work.", body: "Start with the meetings you already have. Pulse makes the rest feel lighter." },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [audio, setAudio] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(Math.min(3, Math.round(window.scrollY / window.innerHeight)));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-[400vh] overflow-x-hidden bg-[#050706] text-[#e7e9df]">
      <div
        className="fixed inset-0 z-0 bg-[url('/pulse-field.png')] bg-cover bg-center opacity-65 mix-blend-screen transition-transform duration-1000"
        style={{ transform: `scale(${1 + active * 0.025}) translateY(${active * -1.5}%)` }}
      />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_52%,transparent_10%,rgba(3,5,4,.18)_45%,#050706_92%)]" />
      <div className="fixed inset-0 z-0 bg-linear-to-b from-[#050706]/90 via-transparent to-[#050706]/80" />
      <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between px-7 py-6 text-[10px] font-medium uppercase tracking-[.18em] text-white/65 md:px-10">
        <span>SCROLL TO DIVE IN</span>
        <button onClick={() => setAudio(!audio)} className="transition hover:text-white">
          AUDIO {audio ? "ON" : "OFF"} <span className="ml-2 text-white/40">•••</span>
        </button>
      </header>
      <div className="fixed bottom-0 left-0 z-20 flex w-full items-end justify-between px-7 py-6 text-[10px] font-medium uppercase tracking-[.18em] text-white/65 md:px-10">
        <button className="transition hover:text-white">SHARE</button>
        <span>PULSE / 2026</span>
      </div>
      <div className="fixed left-1/2 top-6 z-20 -translate-x-1/2 text-sm font-semibold tracking-[-.06em] text-white/75">
        pulse<span className="text-lime-300">•</span>
      </div>
      <div className="relative z-10">
        {scenes.map((scene, i) => (
          <section key={scene.title} className="relative flex min-h-screen snap-start items-center px-7 py-28 md:px-10">
            <div className={`mx-auto w-full max-w-375 transition-all duration-1000 ${active === i ? "translate-y-0 opacity-100" : "translate-y-10 opacity-25"}`}>
              <p className="mb-8 text-[10px] font-medium uppercase tracking-[.28em] text-lime-200/75 md:mb-12">{scene.eyebrow}</p>
              <h1 className={`max-w-6xl whitespace-pre-line text-[clamp(4rem,10.5vw,11rem)] font-light leading-[.82] tracking-[-.095em] ${i % 2 ? "ml-auto text-right" : ""}`}>{scene.title}</h1>
              <div className={`mt-12 max-w-sm text-sm leading-6 text-white/65 md:mt-20 ${i % 2 ? "ml-auto text-right" : ""}`}>
                <p>{scene.body}</p>
                {i === 0 && <span className="mt-10 block animate-pulse text-[10px] uppercase tracking-[.24em] text-white/45">Scroll to enter</span>}
                {i === 3 && (
                  <a
                    href="#top"
                    className="mt-8 inline-flex rounded-full border border-white/30 px-6 py-3 text-[10px] uppercase tracking-[.22em] text-white transition hover:border-lime-200 hover:text-lime-200"
                  >
                    Begin with Pulse ↗
                  </a>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="fixed bottom-1/2 left-7 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {scenes.map((_, i) => (
          <span key={i} className={`h-px transition-all duration-500 ${active === i ? "w-8 bg-lime-200" : "w-3 bg-white/30"}`} />
        ))}
      </div>
    </main>
  );
}
