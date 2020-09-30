import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls } from "drei";

function LoadModel({ props, url, pos }) {
    const { scene } = useLoader(GLTFLoader, url);
    useFrame(
      () =>
        (ref.current.rotation.x = ref.current.rotation.z = ref.current.rotation.y += 0.01)
    );
    const ref = useRef();
  
    return (
      <group {...props} dispose={null} ref={ref}>
        <group position={pos} rotation={[1, 0.5, -0.6]} scale={[0.2, 0.2, 0.2]}>
          <primitive object={scene} />
        </group>
      </group>
    );
  }
  
  export function Glitch() {
    return (
      <Canvas camera={{ position: [-100, -100, -100] }}>
        <ambientLight intensity={1} />
        <pointLight position={[-400, -400, -400]} />
        <Suspense fallback={null}>
          <LoadModel url="./glbtest2.glb" pos={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    );
  }

  export function GlitchPage() {
      return(
        <div className="container-glitch">
            <div className="container-bg-text">
                <div className="bg-text-test">
                    SPECTRUM CON DESIGN WEEK 2020 A WHOLE NEW WORLD SPECTRUM CON DESIGN WEEK 2020 A WHOLE NEW WORLD
                </div>
            </div>
            <div className="canvas">
                <Glitch />
            </div>
        </div>
      )
  }

