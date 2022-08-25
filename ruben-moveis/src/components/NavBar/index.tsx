import * as React from "react";
import { MenuItem } from "./styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import router from "next/router";
import { Tooltip } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{display: "flex", justifyContent: "space-around"}}>
        <Toolbar disableGutters>
          <a onClick={() => router.push("home")} style={{ cursor: "pointer" }}>
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
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
            </Typography> */}
          </a>
          <Tooltip title="Veja mais nosso portfólio! Grande variedade!" arrow>
          <MenuItem>
            <a onClick={() => router.push("products")}>PORTFÓLIO</a>
          </MenuItem>
          </Tooltip>
          <Tooltip title="Entre em contato conosco!" arrow>
          <MenuItem>
            <a onClick={() => router.push("contact")}>CONTATO</a>
          </MenuItem>
          </Tooltip>
          <Tooltip title="Saiba mais sobre a nossa empresa." arrow>
          <MenuItem>
            <a onClick={() => router.push("aboutUs")}>SOBRE</a>
          </MenuItem>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
