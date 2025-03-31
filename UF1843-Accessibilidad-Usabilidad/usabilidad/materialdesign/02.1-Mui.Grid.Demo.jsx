import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

/*
basado en el modelo de diseño Flexbox de CSS
1. Grid Container: Es el componente principal que contiene todos los elementos de la cuadrícula.
2. Grid Item: Son los componentes hijos que se colocan dentro del Grid Container.

En MUI (Material-UI), xs, sm, md, lg, xl son propiedades que se utilizan dentro del sistema de grid para crear diseños responsivos, es decir, diseños que se adaptan a diferentes tamaños de pantalla.

Estos son breakpoints o puntos de quiebre, que son valores predefinidos en el sistema de diseño de MUI, y se corresponden con diferentes tamaños de pantalla:
- xs: Extra pequeño (por ejemplo, teléfonos móviles en modo retrato).
- sm: Pequeño (por ejemplo, tabletas en modo retrato).
- md: Mediano (por ejemplo, tabletas en modo paisaje o computadoras portátiles).
- lg: Grande (por ejemplo, pantallas de escritorio).
- xl: Extra grande (por ejemplo, pantallas de escritorio grandes o monitores 4K).

Cada uno de estos valores se utiliza para especificar cuántas columnas debe ocupar un elemento en la cuadrícula de MUI, dependiendo del tamaño de la pantalla. Por defecto, MUI usa un sistema de 12 columnas, por lo que puedes hacer que un componente ocupe entre 1 y 12 columnas dependiendo de la propiedad que asignes.


*/

const GridExample = () => {
  return (
    <Grid container spacing={2} sx={{ padding: '20px' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: '20px', height: '100%' }}>
          <Typography variant="h6">Item 1</Typography>
          <Typography>Content for Item 1</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: '20px', height: '100%' }}>
          <Typography variant="h6">Item 2</Typography>
          <Typography>Content for Item 2</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ padding: '20px', height: '100%' }}>
          <Typography variant="h6">Item 3</Typography>
          <Typography>Content for Item 3</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GridExample;
