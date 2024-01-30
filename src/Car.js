import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export function Car() {
  const cars = {
    car1: [
      "models/car/car1/scene.gltf",
      [0.005, 0.005, 0.005],
      [0, -0.035, 0],
      [0, 0, 0],
    ],
    car2: [
      "models/car/car2/scene.gltf",
      [0.8, 0.8, 0.8],
      [0, -0.035, 0],
      [0, 89.5, 0],
    ],
    car3: [
      "models/car/car3/scene.gltf",
      [0.3, 0.3, 0.3],
      [0, -0.3, 0],
      [0, 0, 0],
    ],
    car4: ["models/car/car4/scene.gltf", [2, 2, 2], [0, 0.7, 0], [0, 355, 0]],
  };
  const selectedModel = cars.car3;
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + selectedModel[0]);

  useEffect(() => {
    gltf.scene.scale.set(
      selectedModel[1][0],
      selectedModel[1][1],
      selectedModel[1][2]
    );
    gltf.scene.position.set(
      selectedModel[2][0],
      selectedModel[2][1],
      selectedModel[2][2]
    );
    gltf.scene.rotateX(selectedModel[3][0]);
    gltf.scene.rotateY(selectedModel[3][1]);
    gltf.scene.rotateZ(selectedModel[3][2]);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  // console.log(gltf.scene.children[0].children[0]);
  // useFrame((state, delta) => {
  //   let t = state.clock.getElapsedTime();
  //   let group = gltf.scene.children[0].children[0];
  //   // group.rotation.x = t * 2;
  //   group.children[4].rotation.y = t * 2;
  //   group.children[4].rotation.z = 0;
  //   // group.children[1].rotation.y = -t * 2;
  //   // group.children[2].rotation.x = t * 2;
  //   // group.children[4].rotation.x = t * 2;
  //   // group.children[6].rotation.x = t * 2;
  // });

  return <primitive object={gltf.scene} />;
}

// "isObject3D" "isObject3D" "isObject3D"
