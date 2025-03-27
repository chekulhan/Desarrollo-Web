import * as React from 'react';
import {Button, Typography, TextField} from '@mui/material';

export default function ButtonUsage() {
  return (
    <>
      <Typography variant="body1" color="textDisabled">Hello, MUI!</Typography>
     
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
*/}