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
          <Typography variant="h6">Balcões para lojas</Typography>
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
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  <Typography gutterBottom variant="subtitle1" component="div">
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
          <Typography variant="h6">Estantes de Aço</Typography>
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
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  <Typography gutterBottom variant="subtitle1" component="div">
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
          <Typography variant="h6">Gondolas</Typography>
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
                  image="././images/Gondolas gancheiras/gancheira 4.jpg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  image="././images/Gondolas organizadoras de filas/IMG-20210312-WA0013.jpg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  image="././images/Gondolas para centro de lojas/IMG-20211112-WA0017.jpeg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
          <Typography variant="h6">Armários roupeiros e Camas beliches</Typography>
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
                  image="././images/Armários roupeiros/IMG-20200619-WA0008.jpg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  image="././images/Camas Beliche/20200529_114237.jpg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  image="././images/Armários roupeiros/Armario insalubre 4p.jpg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
          <Typography variant="h6">Vitrines Expositoras</Typography>
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
                  image="././images/Vitrines expositoras/20200402_111512.jpg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  image="././images/Vitrines expositoras/WhatsApp Image 2017-04-26 at 10.35.32 h.jpeg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  image="././images/Vitrines expositoras/IMG-20200423-WA0023.jpg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
          <Typography variant="h6">Expositores de pisos</Typography>
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
                  image="././images/Expositores de pisos/20200519_080008.jpg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  image="././images/Expositores de pisos/WhatsApp Image 2017-04-26 at 10.35.26.jpeg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
                  image="././images/Expositores de pisos/WhatsApp Image 2017-04-26 at 10.35.29.jpeg"
                  alt="Balcão Loja"
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
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
