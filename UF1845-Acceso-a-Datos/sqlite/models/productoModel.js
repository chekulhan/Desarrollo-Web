import db from '../db.js';

export function createTable() {
  db.run(`CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL,
    stock INTEGER DEFAULT 0,
    fecha_agregado TEXT DEFAULT CURRENT_DATE
  )`);
}

export function addProducto(nombre, precio, stock) {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO productos(nombre, precio, stock) VALUES (?, ?, ?)`,
      [nombre, precio, stock],
      function (err) {
        if (err) return reject(err);
        resolve(this.lastID);
      }
    );
  });
}

export function listProductos() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM productos`, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

export function updateProducto(id, nombre, precio, stock) {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?`,
      [nombre, precio, stock, id],
      function (err) {
        if (err) return reject(err);
        resolve(this.changes);
      }
    );
  });
}

export function deleteProducto(id) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM productos WHERE id = ?`, [id], function (err) {
      if (err) return reject(err);
      resolve(this.changes);
    });
  });
}
