import mysql from "mysql"

export const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fam##00%%",
  database: "test",
})
