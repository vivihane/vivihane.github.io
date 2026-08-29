import { Suspense, lazy, useEffect, useState } from "react";
import LoadingContent from "./components/Gameboy/LoadingContent";

const GameBoyScene = lazy(() => import("./components/Gameboy/GameBoyScene"));

function App() {
  const [showConsole, setShowConsole] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowConsole(true);
    }, 600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="grid min-h-screen place-items-center overflow-hidden bg-[radial-gradient(circle_at_76%_32%,rgba(255,255,255,0.9),transparent_24rem),radial-gradient(circle_at_15%_85%,rgba(221,139,181,0.3),transparent_26rem),linear-gradient(145deg,#fce9f2_0%,#efbfd8_100%)] p-[clamp(1.25rem,4vw,4rem)]">
      <section className="grid min-h-[min(760px,calc(100svh-3rem))] w-full items-center gap-[clamp(2rem,5vw,5rem)] md:grid-cols-[minmax(260px,0.85fr)_minmax(400px,1.15fr)]">
        <div className="relative z-10 text-left">
          <p className="mb-4 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#a12d68]">
            Portfolio · 42 Paris student
          </p>
          <h1 className="m-0 max-w-[10ch] text-[clamp(3rem,6vw,6rem)] font-[750] leading-[0.94] tracking-[-0.065em] text-[#25121d]">
            Bienvenue
          </h1>
          <p className="mt-7 max-w-[35rem] text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.7] text-[#654454]">
            Je suis une développeuse passionnée par la création d'expériences interactives et immersives. Découvrez mes projets et mon parcours à travers ce portfolio.
          </p>
          <p className="mt-6 inline-flex rounded-full border border-[#57223d29] bg-white/40 px-[0.9rem] py-[0.65rem] font-mono text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-[#704056]">
            Fais glisser la console pour l'observer en 3D.
          </p>
        </div>

        <div
          className="relative h-[clamp(430px,70svh,690px)] min-h-0 w-full overflow-hidden rounded-[clamp(1.5rem,4vw,3.5rem)] border border-white/65 bg-white/20 shadow-[0_30px_80px_rgba(112,40,76,0.2)] active:cursor-grabbing"
          aria-label="Modèle 3D d'une Game Boy Advance SP"
        >
          {showConsole ? (
            <Suspense
              fallback={
                <LoadingContent progress={0} message="Préparation de la scène 3D" />
              }
            >
              <GameBoyScene />
            </Suspense>
          ) : (
            <LoadingContent progress={0} message="Préparation du modèle 3D" />
          )}
          <span className="pointer-events-none absolute bottom-5 right-5 rounded-lg bg-[#2b1721] px-3 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white">
            Prototype 01
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;
