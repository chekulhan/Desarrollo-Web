# Material Design
https://m3.material.io/


## MUI with reactjs
https://mui.com/

**Instalacion y configuracion**
https://mui.com/material-ui/getting-started/installation/

Roboto font es la fuente por defecto:

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
npm install @mui/icons-material
```

Ejemplo Component:

```jsx
import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}
```


https://mui.com/material-ui/all-components/



# Themes
https://mui.com/material-ui/customization/theming/?srsltid=AfmBOoqLcIMqnsRbcrgRVKrogr5npCsiUdz5UqQnIXgueuTU-PjBP8jq

Theme creador: https://zenoo.github.io/mui-theme-creator/

NOTAS: Por ejemplo:
- ensuring consistency across different browsers
- Without `<CssBaseline />`, text rendering might look slightly different across browsers.
- In Chrome, `<body>` has an 8px margin by default, whereas other browsers may have different values. 

**Paso 1:** Crear un theme

Crear un archivo theme.js en el directorio donde esta App.js:

```jsx
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#dc004e", // Pink
    },
    background: {
      default: "#f5f5f5", // Light gray background
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
```

**Paso 2:** Wrap your app with the ThemeProvider

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.js"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


export default App;
```


Para acceder el Theme en un componente:

```jsx
import React from "react";
import { useTheme } from "@mui/material/styles"; // importar el Hook para usar el theme
import { Button, Typography, Box } from "@mui/material";

const ThemedComponent = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Typography variant="h4" color={theme.palette.primary.main}>
        Themed Component
      </Typography>
      <Button variant="contained" color="secondary">
        Themed Button
      </Button>
    </Box>
  );
};

export default ThemedComponent;
```

## Actividad 1

Empezar con un listado de items:

```javascript
const items = [
  { id: 1, name: 'Item 1', description: 'This is a description for item 1', price: '$10' },
  { id: 2, name: 'Item 2', description: 'This is a description for item 2', price: '$20' },
  { id: 3, name: 'Item 3', description: 'This is a description for item 3', price: '$30' },
  { id: 4, name: 'Item 4', description: 'This is a description for item 4', price: '$40' },
];
```

Recordar:

- Aplicar un map para mostrar cada elemento de Card (cambiar items por filteredItems)
```jsx
{items.map(item => (
    <Card key={item.id} sx={{ width: 250 }}>
```

Ejecutar la funcion handleFilter para filtrar los items en el button:

```jsx
<Button onClick={handleFilter} variant="contained" sx={{ marginBottom: '20px' }}>
  Filter Items
</Button>
```

![Example](../../../x-assets/UF1843/mui.example.png)

## Actividad 2 Productos Dashboard

import { Grid, Card, CardContent, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Snackbar, Box, ListItem, ListItemText, List, InputLabel, FormControl, Select, MenuItem } from "@mui/material";


![Example](../../../x-assets/UF1843/mui.productos.png)