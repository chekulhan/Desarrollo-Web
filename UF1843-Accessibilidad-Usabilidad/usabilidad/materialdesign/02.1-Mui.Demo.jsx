import * as React from 'react';
import {Button, Typography} from '@mui/material';

export default function MuiDemo1() {
  return (
    <>
      <Typography variant="body1" color="textDisabled" >Hello, MUI!</Typography>
     
      <Button variant="contained">Hello world</Button>


   

    </>
  );
}


{/*
buttons - variant:  contained, outlined, text
text - variant: h1, h2, body1, body2, caption, subtitle1, subtitle2

color: primary, secondary, error, info, success, warning
para text, usar color: textPrimary, textSecondary, textDisabled


size: small, medium, large
Agregar textfield
<TextField label="Small" size="small" />
For Typography: The size is indirectly controlled by the variant 

sx prop - atajo, optimizado, incluir theme tambien (backgroundColor: "primary.main" )

Box - equivalente a un div
    <Box sx={{ padding: 2, bgcolor: "lightgray", borderRadius: 2 }}>
        Esto es un box, equivalente a un div
      </Box>

con flex:
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Box sx={{ bgcolor: "red", width: 100, height: 100 }} />
        <Box sx={{ bgcolor: "green", width: 100, height: 100 }} />
        <Box sx={{ bgcolor: "blue", width: 100, height: 100 }} />
    </Box>


    CARD:
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/150"
        alt="card image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Beautiful Landscape
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple card example with an image, title, and description.
        </Typography>
      </CardContent>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </Card>
*/}