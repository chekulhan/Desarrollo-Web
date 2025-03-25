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