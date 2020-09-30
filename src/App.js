import React, { Suspense, useRef } from "react";
import "./styles.css";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls } from "drei";

import { motion } from "framer-motion";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Page } from "./components/Page";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Model({ props, url, pos }) {
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

export function GlitchPage() {
  return (
    <Canvas camera={{ position: [-100, -100, -100] }}>
      <ambientLight intensity={1} />
      <pointLight position={[-400, -400, -400]} />
      <Suspense fallback={null}>
        <Model url="./glbtest2.glb" pos={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <motion.div className="heading-2">
            Nov 23, 2020 - Dec 4, 2020
          </motion.div>
        </Header>
        <Switch>
          <Route exact path="/">
            <div style={{ position: "relative", height: "100vh" }}>
              <div
                style={{
                  textAlign: "center",
                  display: "grid",
                  alignItems: "center",
                  // position: "absolute",
                  // top: 100,
                  height: "100vh",
                  maxWidth: 1280,
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <div className="bg-text-test">
                  <div>
                    SPECTRUM CON DESIGN WEEK 2020 A WHOLE NEW WORLD SPECTRUM CON
                    DESIGN WEEK 2020 A WHOLE NEW WORLD
                  </div>
                </div>
              </div>
              <div className="canvas">
                <GlitchPage />
              </div>
            </div>
            <div className="content">
              <Page center={true}>
                <div className="title">
                  <div className="heading-1">
                    Spectrum Con <br />
                    Design Week 2020
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    // gridTemplateColumns: "auto max-content",
                    gridGap: 95
                  }}
                >
                  <div>
                    <div className="heading-2">Nov 23, 2020 - Dec 4, 2020</div>
                    <div className="body-1">
                      디자이너들이 자신의 가치를 확인하고 더욱 발전하기 위해서는
                      여러 각도에서의 자극과 탐구가 필요합니다. 그것이
                      온라인이든 오프라인이든 상관없이 디자이너들이 이러한
                      필요를 느낄 때 자유롭게 찾아와서 이야기할 수 있는 기회와
                      공간이 필요하다고 생각했습니다.
                    </div>
                  </div>
                </div>
              </Page>
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
