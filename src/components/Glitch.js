import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "drei";

function LoadModel({ props, url, pos, value, r, g, b, wireframe }) {
  const { scene } = useLoader(GLTFLoader, url);
  useFrame(
    () =>
      (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += value)
  );
  const ref = useRef();
  const [state, setState] = React.useState(false);

  scene.children[0].material.wireframe = state;
  scene.children[0].material.color.r = r;
  scene.children[0].material.color.g = g;
  scene.children[0].material.color.b = b;

  return (
    <group {...props} dispose={null} onClick={() => setState(!state)}>
      <primitive object={scene} scale={[1, 1, 1]} position={pos} ref={ref} />
    </group>
  );
}

export function Glitch() {
  return (
    <Canvas camera={{ position: [0, 0, 300] }}>
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 1000]} />
<OrbitControls />
      <Suspense fallback={null}>
        <LoadModel
          url="./obj1.glb"
          pos={[-180, 0, 0]}
          value={0.001}
          r={0}
          g={0}
          b={1}
        />
        <LoadModel
          url="./obj2.glb"
          pos={[-60, 0, 0]}
          value={-0.002}
          r={0}
          g={1}
          b={0}
        />
        <LoadModel
          url="./obj3.glb"
          pos={[60, 0, 0]}
          value={0.002}
          r={0}
          g={1}
          b={1}
        />
        <LoadModel
          url="./obj4.glb"
          pos={[180, 0, 0]}
          value={-0.001}
          r={1}
          g={0}
          b={1}
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
