import React from "react";

export function Page({ children, center, myRef }) {
  return (
    <div
      className={center ? "container-center-page" : "container-full-page"}
      ref={myRef}
    >
      <div style={{width: "100%" }}>
        {children}
      </div>
    </div>
  );
}


