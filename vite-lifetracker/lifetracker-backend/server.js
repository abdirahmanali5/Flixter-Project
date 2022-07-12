import express from "express"
import cors from "cors"
import morgan from "morgan"
// const express = require('express')
const app = express()
const port = 300
app.use(cors())

app.use(morgan("tiny"))

app.use(Express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/auth", authRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
