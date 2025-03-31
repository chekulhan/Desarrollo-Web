import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Snackbar, Box, ListItem, ListItemText, List, InputLabel, FormControl, Select, MenuItem } from "@mui/material";

const DashboardProductos = () => {
  // Estado para la lista de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1000, estado: "Disponible" },
    { id: 2, nombre: "Smartphone", categoria: "Electrónica", precio: 700, estado: "Agotado" },
  ]);

  // Estado para los detalles del nuevo producto
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: "", categoria: "", precio: "", estado: "" });

  // Estado para el Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMensaje, setSnackbarMensaje] = useState("");

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para agregar un producto
  const agregarProducto = () => {
    if (nuevoProducto.nombre && nuevoProducto.categoria && nuevoProducto.precio && nuevoProducto.estado) {
      const nuevoProductoData = { ...nuevoProducto, id: productos.length + 1 };
      setProductos((prev) => [...prev, nuevoProductoData]);
      setNuevoProducto({ nombre: "", categoria: "", precio: "", estado: "" }); // Limpiar formulario
      setSnackbarMensaje("¡Producto agregado exitosamente!");
      setSnackbarOpen(true);
    } else {
      setSnackbarMensaje("Todos los campos son obligatorios.");
      setSnackbarOpen(true);
    }
  };

  // Función para cerrar el Snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Panel de Productos
      </Typography>

      {/* Formulario para agregar producto */}
      <Card sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h6">Agregar Nuevo Producto</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Nombre del Producto"
                variant="outlined"
                fullWidth
                name="nombre"
                value={nuevoProducto.nombre}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>
                <Select
                  label="Categoría"
                  name="categoria"
                  value={nuevoProducto.categoria}
                  onChange={handleInputChange}
                >
                  <MenuItem value="Electrónica">Electrónica</MenuItem>
                  <MenuItem value="Ropa">Ropa</MenuItem>
                  <MenuItem value="Hogar">Hogar</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Precio"
                variant="outlined"
                fullWidth
                name="precio"
                value={nuevoProducto.precio}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Estado"
                variant="outlined"
                fullWidth
                name="estado"
                value={nuevoProducto.estado}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={agregarProducto} sx={{ width: "100%" }}>
                Agregar Producto
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Tabla de Productos */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Lista de Productos
          </Typography>
          <TableContainer sx={{ display: "flex", justifyContent: "center" }}>
            <Table sx={{ width: "80%" }}>
              <TableHead>
                <TableRow>
                  <TableCell><Typography fontWeight="bold">Nombre</Typography></TableCell>
                  <TableCell><Typography fontWeight="bold">Categoría</Typography></TableCell>
                  <TableCell><Typography fontWeight="bold">Precio</Typography></TableCell>
                  <TableCell><Typography fontWeight="bold">Estado</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productos.map((producto) => (
                  <TableRow key={producto.id}>
                    <TableCell>{producto.nombre}</TableCell>
                    <TableCell>{producto.categoria}</TableCell>
                    <TableCell>{producto.precio}</TableCell>
                    <TableCell>{producto.estado}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Snackbar de notificaciones */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMensaje}
      />
    </Box>
  );
};

export default DashboardProductos;
