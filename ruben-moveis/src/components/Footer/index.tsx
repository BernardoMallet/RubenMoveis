import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterSite = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#26ade4",
          width: "100%",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
          position: "absolute"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <p>Site desenvolvido por Bernardo Mallet</p>
          <a
            href="https://www.linkedin.com/in/bernardo-mallet-48870b170/"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default FooterSite;
