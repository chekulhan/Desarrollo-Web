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

App.js file:

```jsx
import { createTheme, ThemeProvider } from "@mui/material/styles";


// Paso 1: Crear un theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Customize the primary color
    },
    secondary: {
      main: "#dc004e", // Customize the secondary color
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem", // Customize h1 font size
      fontWeight: "bold", // Customize font weight
    },
    body1: {
      fontSize: "1rem", // Customize body text size
    },
  },
});

// Paso 2: Wrap your app with the ThemeProvider

function App() {
 
  return (
    <ThemeProvider theme={theme}>
    {/* <Navbar /> */} 

      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>
  
    </ThemeProvider>
  );
}

export default App;
```