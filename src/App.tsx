import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import LoadingContent from "./components/LoadingContent";

const GameBoyScene = lazy(() => import("./components/GameBoyScene"));

function App() {
  const [showConsole, setShowConsole] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowConsole(true);
    }, 600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="app">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio · 42 Paris student</p>
          <h1>Bienvenue</h1>
          <p className="hero-intro">
            Je suis une développeuse passionnée par la création d'expériences interactives et immersives. Découvrez mes projets et mon parcours à travers ce portfolio.
          </p>
          <p className="interaction-hint">
            Fais glisser la console pour l'observer en 3D.
          </p>
        </div>

        <div className="console-card" aria-label="Modèle 3D d'une Game Boy Advance SP">
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
          <span className="console-badge">Prototype 01</span>
        </div>
      </section>
    </main>
  );
}

export default App;
