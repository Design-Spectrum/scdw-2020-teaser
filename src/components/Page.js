import React from "react";

export function Page({ children, center, myRef, marginBottom }) {
  return (
    <div
      className={center ? "container-center-page" : "container-full-page"}
      style={{ marginBottom: marginBottom }}
      ref={myRef}
    >
      <div style={{ marginTop: 40, marginBottom: 40, width: "100%" }}>
        {children}
      </div>
    </div>
  );
}
