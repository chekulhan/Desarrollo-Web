import db from '../db.js';

export function createTable() {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  )`);
}

export function addUser(name, email) {
  
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO users(name, email) VALUES(?, ?)`, [name, email], function (err) {
      if (err) return reject(err);
      resolve(this.lastID);
    });
  });
}

export function listUsers() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM users`, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

export function updateUser(id, name) {
    // completar
      
      resolve(this.changes);
    
}

export function deleteUser(id) {
  // completar

      resolve(this.changes);
    
}
