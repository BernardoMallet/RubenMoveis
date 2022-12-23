import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const AccordionProducts = () => {
  return (
    <>
      <Accordion sx={{ marginTop: "1%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Balcões para lojas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "flex-row",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="././images/Balcões para lojas/IMG-20210622-WA0042.jpg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Descrição
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="././images/Balcões para lojas/IMG-20220712-WA0011.jpeg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Descrição
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="././images/Balcões para lojas/20200416_163245 (1).jpg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Descrição
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ marginTop: "1%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Estantes de Aço</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "flex-row",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="././images/Estantes de aço/WhatsApp Image 2017-04-26 at 10.44.38.jpeg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Descrição
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="././images/Estantes de aço/P1010281.JPG"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Descrição
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="././images/Estantes de aço/P1010276.JPG"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Descrição
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
export default AccordionProducts;
