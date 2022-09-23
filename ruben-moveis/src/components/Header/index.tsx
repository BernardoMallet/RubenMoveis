import router from "next/router";
import React from "react";

const HeaderLogo = () => {
  return (
    <div
      style={{
        backgroundColor: "#26ade4",
        width: "100%",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        cursor: 'pointer'
      }}
      onClick={() => router.push("home")} 
    >
      <img
        src="././images/logo azul.png"
        style={{
          width: "400px",
          height: "200px",
        }}
      />
    </div>
  );
};

export default HeaderLogo;
