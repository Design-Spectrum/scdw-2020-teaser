import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "drei";
import { Color } from "three";

function LoadModel({ props, url, pos, value, color, wireframe }) {
  const { scene } = useLoader(GLTFLoader, url);
  useFrame(
    () =>
      (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += value)
  );
  const ref = useRef();
  const [state, setState] = React.useState(false);

  scene.children[0].material.wireframe = state;
  //   scene.children[0].material.vertexColors = true;
  scene.children[0].material.color = new Color(color);
  //   scene.children[0].material.emissive = new Color(color)
  //   scene.children[0].material.emissiveIntensity = .4
  //   scene.children[0].material.metalness = 2

  console.log(scene);

  return (
    <group {...props} dispose={null} onClick={() => setState(!state)}>
      <primitive object={scene} scale={[1, 1, 2]} position={pos} ref={ref} />
    </group>
  );
}

export function Glitch() {
  

  return (
    <Canvas camera={{ fov: 13, position: [400, 0, 100] }}>
      <ambientLight intensity={2} />
      <pointLight position={[0, 0, 300]} intensity={2} />
      
      <Suspense fallback={null}>
        <LoadModel
          url="./obj1.glb"
          pos={[-180, 0, 0]}
          value={0.001}
          color={0xfcff23}
        />
        <LoadModel
          url="./obj2.glb"
          pos={[-60, 0, 0]}
          value={-0.002}
          color={0x65fc7b}
        />
        <LoadModel
          url="./obj3.glb"
          pos={[60, 0, 0]}
          value={0.002}
          color={0x22bffc}
        />
        <LoadModel
          url="./obj4.glb"
          pos={[180, 0, 0]}
          value={-0.001}
          color={0x008cff}
        />
      </Suspense>
    </Canvas>
  );
}

export function GlitchPage() {
  return (
    <div className="container-glitch">
      <div className="container-bg-text">
        <div className="bg-text-test">
          SPECTRUM CON DESIGN WEEK 2020
          <br />A WHOLE NEW WORLD
        </div>
      </div>
      <div className="canvas">
        <Glitch />
      </div>
    </div>
  );
}
