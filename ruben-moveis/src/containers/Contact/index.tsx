import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactContent = () => {
  return (
    <>
      <Card sx={{ minWidth: 275, display: "flex", justifyContent: "center" }}>
        <CardContent sx={{padding: "20px"}}>
        <Typography sx={{
              fontSize: 30,
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              fontWeight: 700
            }}
            color="text.primary"
            variant="h1"
            gutterBottom>
        Entre em contato conosco e marque uma visita! Vamos até você!     
      </Typography>
          <Typography
            sx={{
              fontSize: 20,
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              justifyContent: "center",
              paddingTop: "20px"
            }}
            color="text.primary"
            variant="h5"
            gutterBottom
          >
            <LocalPhoneIcon />
            <WhatsAppIcon />
            <p>Telefone:</p>
            <u style={{ cursor: "pointer" }}>(21) 99904-9917</u>
          </Typography>
          <Typography
            sx={{ fontSize: 20,
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                justifyContent: "center",
                paddingTop: "20px"
            }}
            color="text.primary"
            variant="h5"
            gutterBottom
          >
            <EmailIcon />
            <p>E-mail:</p> 
            <a href="mailto:email@provedor.com.br">ruben@rubenmoveis.com.br</a>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactContent;
