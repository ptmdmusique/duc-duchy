import {
  OrbitControls,
  OrthographicCamera,
  Plane,
  Stars,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import "./PlanetaryViewPage.scss";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame(() => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const PlanetaryViewPage = () => {
  return (
    <div className="planetary-view-page">
      <Canvas shadows dpr={window.devicePixelRatio}>
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />
        <Stars />

        <ambientLight intensity={0.8} />
        <pointLight intensity={1} position={[0, 6, 0]} />

        <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={50} />

        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default PlanetaryViewPage;
