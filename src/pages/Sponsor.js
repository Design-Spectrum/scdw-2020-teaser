import React from "react";
import { Page } from "../components/Page";

import Coupang from "../img/sponsor/coupang.png";
import Toss from "../img/sponsor/toss.png";
import Frip from "../img/sponsor/frip.png";
import Onl from "../img/sponsor/onl.png";
import Tangun from "../img/sponsor/tangun.png";
import ProtoPie from "../img/sponsor/protopie.png";
import Wanted from "../img/sponsor/wanted.png";

export function Sponsor() {

  const size = useWindowSize();

  return (
    <Page center={size.width > 480 ? true : false}>
      <div className="title">
        <div className="heading-1">Sponsor</div>
      </div>
      <div className="sponsor-container">
        <div className="sponsor-wrapper">
          <div className="sponsor-item">
            <img src={Toss} alt="Toss Logo" />
          </div>
          <div className="sponsor-item">
            <img src={Frip} alt="Frip Logo" />
          </div>
          <div className="sponsor-item">
            <img src={Coupang} alt="Coupang Logo" />
          </div>

          <div className="sponsor-item">
            <img src={Onl} alt="Onl Logo" />
          </div>
        </div>
        <div className="sponsor-wrapper">
          
          <div className="sponsor-item">
            <img src={ProtoPie} alt="ProtoPie Logo" />
          </div>
        </div>
      </div>
    </Page>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.Height,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

// <div className="sponsor-item">
//             <img src={Wanted} alt="Wanted Logo" />
//           </div>
//           <div className="sponsor-item">
//             <img src={Tangun} alt="Tangun Logo" />
//           </div>