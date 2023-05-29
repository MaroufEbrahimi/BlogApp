import { db } from "../db.js"

export const register = (req, res) => {
  // check existing user
  const dbQuery = "SELECT * FROM users WHERE email = ? OR username = ?"

  db.query(dbQuery, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err)
    if (data.length) return res.status(409).json("User already exists!")
  })
}
