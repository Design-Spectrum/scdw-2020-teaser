import React from "react";
import instaLogo from "../img/logo/Instagram.svg";
import fbLogo from "../img/logo/Facebook.svg";
import spectrumLogo from "../img/logo/Spectrum.svg";

export function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <a className="spectrum-logo" href="https://designspectrum.org"><img className="spectrum-logo" src={spectrumLogo} alt="Design Spectrum" /></a>
        <div></div>
        <a className="insta-logo" href="https://www.instagram.com/designspectrum_official/"><img className="insta-logo" src={instaLogo} alt="Design Spectrum Instagram link" /></a>
        <a className="fb-logo" href="https://www.facebook.com/sharedesignspectrum"><img className="fb-logo" src={fbLogo} alt="Design Spectrum Facebook link" /></a>
      </div>
    </div>
  );
}
