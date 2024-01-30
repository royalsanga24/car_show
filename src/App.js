import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import {
  CubeCamera,
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Ground } from "./Ground";
import { Car } from "./Car";
import { Rings } from "./Rings";
import { Boxes } from "./Boxes";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { FloatingGrid } from "./FloatingGrid";
import { Menu } from "react-float-menu";

function changeCar() {
  console.log("Change Car");
}

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />
      <Menu
        dimension={40}
        items={[
          { name: "File" },
          {
            children: [
              { children: [{ name: "Cut 1" }, { name: "Cut 2" }], name: "Cut" },
              { name: "Select All" },
            ],
            name: "Edit",
          },
          { name: "Add" },
          {
            children: [
              { name: "Copy from clipboard" },
              { name: "Copy selection" },
            ],
            name: "Copy",
          },
          { name: "Save" },
          { name: "Logout" },
        ]}
        shape="square"
        startPosition="top left"
        width={250}
        onSelect={(val) => console.log(val)}
      >
        {/* <PlusIcon /> */}
      </Menu>

      <CubeCamera
        resolution={256}
        frames={Infinity}
        onClick={() => changeCar()}
      >
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>

      <Rings />
      <Boxes />
      <FloatingGrid />

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={155.5}
        angle={0.6}
        penumbra={0.5}
        position={[7, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={156}
        angle={0.6}
        penumbra={0.5}
        position={[-7, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />

      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.6}
          width={300}
          height={300}
          kernelSize={5}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.025}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0012]}
        />
      </EffectComposer>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
