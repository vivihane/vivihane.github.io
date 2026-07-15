import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
//import gameBoyModel from "../assets/gameboy_challenge.glb?url";
import gameBoyModel from "../assets/gameboy_advance_sp.glb?url";

type GameBoyProps = ThreeElements["group"];

export default function GameBoy(props: GameBoyProps) {
  const { scene } = useGLTF(gameBoyModel);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(gameBoyModel);
