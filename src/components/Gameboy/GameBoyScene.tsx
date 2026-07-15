import { Suspense } from "react";
import { Bounds, ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GameBoy from "./GameBoy";
import SceneLoader from "./SceneLoader";

export default function GameBoyScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [-1.6, 4, 9], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.25} />
      <directionalLight position={[5, 8, 6]} intensity={2.4} />
      <directionalLight position={[-4, 2, -3]} intensity={1.1} color="#f2b8d4" />

      <Suspense fallback={<SceneLoader />}>
        <Bounds fit clip observe margin={1.15}>
          <GameBoy rotation={[0.15, -0.15, 0]} />
        </Bounds>
        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.3}
          scale={8}
          blur={2.5}
          far={5}
        />
        <Environment preset="studio" environmentIntensity={0.55} />
      </Suspense>

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.10}
        enablePan={false}
        minDistance={0}
        maxDistance={12}
        minPolarAngle={0.45}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}
