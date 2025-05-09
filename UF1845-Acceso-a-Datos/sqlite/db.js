import sqlite3 from 'sqlite3';
sqlite3.verbose(); 

const db = new sqlite3.Database('./mydb.sqlite', (err) => {
  if (err) console.error(err.message);
  else console.log('Connected to SQLite DB');
});

export default db;
