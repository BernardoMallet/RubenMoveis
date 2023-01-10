import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppPopup = () => {
  return (
    <>
      <a
        style={{ cursor: "pointer" }}
        href="https://api.whatsapp.com/send?phone=5521999049917&text=RubenMóveis"
      >
        <Box
          sx={{ float: "right", marginTop: "4px", position: "fixed", right: 5 , zIndex: "999" }}
        >
          <Fab color="success" aria-label="click">
            <WhatsAppIcon />
          </Fab>
        </Box>
      </a>
    </>
  );
};

export default WhatsAppPopup;
