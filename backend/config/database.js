import mysql from "mysql";

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password123#@!',
  database: 'pos_db'
});
 
export default db;