
# Actividad: Validación de un Token de Verificación de Correo Electrónico en una Aplicación Web

**Objetivo:**
El objetivo de esta actividad es implementar una página React que se encargue de verificar un token de validación recibido a través de la URL, tal como se hace en los sistemas de verificación de correos electrónicos. Además, la página debe mostrar un mensaje visual según si el token es válido o no.

**Descripción:**
Backend (Express)

Crear un servidor Express que reciba el token de verificación como parámetro de consulta (query string) y valide si es correcto o no.

El servidor responderá con un mensaje indicando si el token es válido o no.

**Frontend (React)**

Implementar una página en React que extraiga el token de la URL utilizando el hook useSearchParams o useLocation de React Router.

Enviar este token al servidor para validarlo.

Mostrar un mensaje visual adecuado (como un Alert de MUI) según si la validación del token es exitosa o fallida.

- Si el token es válido, mostrar un mensaje de éxito.

- Si el token es incorrecto o ha expirado, mostrar un mensaje de error.

Por ejemplo, el usuario recibe un vinculo como lo siguiente: http://localhost:3000/email/verification?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImRzZCIsImlhdCI6MTUxNjIzOTAyMn0.Xd8LY_SaWrgd6zZsBjMfUsIP8QYElzqNi7U2yuU7S-8  y al pincharlo, le llevará a una página de React donde comienzo el proceso de validación.

**TIPS:**
1. Usar https://jwt.io/ para crear o generar un token manualmente.

2. En React, usar el hook useSearchParams() para obtener el token del querystring:

```jsx

import { useSearchParams } from 'react-router-dom';

const [searchParams] = useSearchParams();
const token = searchParams.get('token');
```

3. En Express, usar el método jwt.verify() para verificar si el token es válido o no.
```js
const decoded = jwt.verify(token, JWT_SECRET);
```

Token inválido o expirado: Si el token no es válido (por ejemplo, porque la firma no coincide) o si ha expirado, la función jwt.verify lanzará un error. Puedes capturar ese error y manejarlo adecuadamente, por ejemplo, devolviendo una respuesta de error al cliente o registrando el problema en los logs del servidor.



![Verificar Email](../x-assets/UF1844/emailverificar.png)

---

## Respuestas

### JWT Tokens
```jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Alert } from '@mui/material'; // Using MUI components for UI

const EmailVerification = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState('loading');  // 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (token) {
      // Send the token to your API for validation
      fetch(`http://localhost:5000/api/v1/tokens/verify?token=${token}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "success") {
            setStatus('success');
            setMessage(data.message || 'Your email has been successfully verified!');
          } else {
            setStatus('error');
            setMessage(data.message || 'Verification failed. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setStatus('error');
          setMessage('An error occurred while verifying your email.');
        });
    }
  }, [token]);

  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h5">Verifying your email...</Typography>

      {/* Display loading spinner while verifying */}
      {status === 'loading' && <CircularProgress />}

      {/* Show success or error message */}
      {status === 'success' && (
        <Alert severity="success" sx={{ marginTop: '20px' }}>
          {message}
        </Alert>
      )}
      {status === 'error' && (
        <Alert severity="error" sx={{ marginTop: '20px' }}>
          {message}
        </Alert>
      )}
    </Box>
  );
};

export default EmailVerification;
```

```js
const JWT_SECRET = 'abcd1234567890';  // Replace with your actual secret

// Route that accepts a token in the query string
router.get('/verify', (req, res) => {
  const { token } = req.query; // Extract token from query string

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    // Verify the token using the JWT secret
    const decoded = jwt.verify(token, JWT_SECRET);

    // If token is valid, return a success message
    res.status(200).json({
      message: 'success',
      //decoded: decoded,  // Decoded JWT payload
    });
  } catch (error) {
    // If token is invalid or expired, return an error message
    res.status(400).json({
      message: 'Invalid or expired token',
      error: error.message,
    });
  }
});
```