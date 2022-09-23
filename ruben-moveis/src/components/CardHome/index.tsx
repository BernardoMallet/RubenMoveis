import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

const GifCard = () => {

  return (
    <>
    <Box justifyContent="space-evenly" sx={{ display: 'flex', flexDirection: 'row' }}>
    <Card sx={{ maxWidth: '40%', maxHeight: '5%', marginTop: '5%' }}>
          <CardActionArea>
              <CardMedia
                  component="img"
                  height="auto"
                  image="././images/CarouselHome/gif ruben moveis.gif"
                  alt="gif projeto" />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      Da teoria...
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Trabalhamos metodologias, planejamentos e tecnologia para 
                      garantir a satisfação dos nossos clientes!   
                  </Typography>
              </CardContent>
          </CardActionArea>
      </Card>
      
    <Card sx={{ maxWidth: '40%', maxHeight: '5%', marginTop: '5%' }}>
              <CardActionArea>
                  <CardMedia
                      component="img"
                      height="auto"
                      image="././images/CarouselHome/obra pronta.JPG"
                      alt="gif projeto" />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          Até a prática!
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Fabricamos qualquer móvel de aço sobre qualquer medida. 
                          Venha fazer um orçamento conosco!

                      </Typography>
                  </CardContent>
              </CardActionArea>
    </Card>
    </Box>
    </>
  );
};

export default GifCard;