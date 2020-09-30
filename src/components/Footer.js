import React from "react";
import instaLogo from "../img/logo/Instagram.svg";
import fbLogo from "../img/logo/Facebook.svg";
import spectrumLogo from "../img/logo/Spectrum.svg";

export function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <a href="https://designspectrum.org"><img className="spectrum-logo" src={spectrumLogo} alt="Design Spectrum" /></a>
        <a href="https://www.instagram.com/designspectrum_official/"><img className="insta-logo" src={instaLogo} alt="Design Spectrum Instagram link" /></a>
        <a href="https://www.facebook.com/sharedesignspectrum"><img className="fb-logo" src={fbLogo} alt="Design Spectrum Facebook link" /></a>
      </div>
    </div>
  );
}
