import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";

const AboutUs = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: 15,
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
            fontWeight: 700,
          }}
          color="text.primary"
          variant="h1"
          gutterBottom
        >
          <Avatar src="././images/Vitrines expositoras/1517365956931.jpg" />
          Ruben Moreira - Mais de 8 anos no mercado.
        </Typography>
        <DialogContent dividers>
          <Typography gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </DialogContent>
      </Box>
    </>
  );
};

export default AboutUs;
