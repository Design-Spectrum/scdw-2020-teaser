import React from "react";
import instaLogo from "../img/logo/Instagram.svg";
import fbLogo from "../img/logo/Facebook.svg";
import spectrumLogo from "../img/logo/Spectrum.svg";

export function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <img className="spectrum-logo" src={spectrumLogo} alt="Design Spectrum" />
        <img className="insta-logo" src={instaLogo} alt="Design Spectrum Instagram link" />
        <img className="fb-logo" src={fbLogo} alt="Design Spectrum Facebook link" />
      </div>
    </div>
  );
}
