import * as React from "react";
import { MenuItem } from "./styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import router from "next/router";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HomeRepairServiceIcon
          />
          <PrecisionManufacturingIcon
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RubenMóveis
          </Typography>
          <MenuItem>PORTFÓLIO</MenuItem>
          <MenuItem>CONTATO</MenuItem>
          <MenuItem>SOBRE NÓS</MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
