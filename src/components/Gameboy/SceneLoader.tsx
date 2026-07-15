import { Html, useProgress } from "@react-three/drei";
import LoadingContent from "./LoadingContent";

export default function SceneLoader() {
  const { progress } = useProgress();

  return (
    <Html fullscreen>
      <LoadingContent progress={progress} />
    </Html>
  );
}
