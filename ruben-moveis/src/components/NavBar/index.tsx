import * as React from "react";
import { MenuItem } from "./styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import router from "next/router";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a onClick={() => router.push("home")} style={{ cursor: "pointer" }}>
            <Typography
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
            </Typography>
          </a>
          <MenuItem>
            <a onClick={() => router.push("products")}>PORTFÓLIO</a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => router.push("contact")}>CONTATO</a>
          </MenuItem>
          <MenuItem>
            <a onClick={() => router.push("aboutUs")}>SOBRE NÓS</a>
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
