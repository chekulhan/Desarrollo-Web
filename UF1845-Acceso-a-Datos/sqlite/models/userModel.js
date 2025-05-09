import db from './db.js';

export function createTable() {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  )`);
}

export function addUser(name, email, callback) {
  db.run(`INSERT INTO users(name, email) VALUES(?, ?)`, [name, email], function (err) {
    callback(err, this?.lastID);
  });
}

export function listUsers(callback) {
  db.all(`SELECT * FROM users`, [], (err, rows) => {
    callback(err, rows);
  });
}

export function updateUser(id, name, callback) {
  db.run(`UPDATE users SET name = ? WHERE id = ?`, [name, id], function (err) {
    callback(err, this?.changes);
  });
}

export function deleteUser(id, callback) {
  db.run(`DELETE FROM users WHERE id = ?`, [id], function (err) {
    callback(err, this?.changes);
  });
}
