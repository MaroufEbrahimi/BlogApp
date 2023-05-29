import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.json("this is home page!")
})

app.listen(8800, () => {
  console.log("connect to DB!")
})
