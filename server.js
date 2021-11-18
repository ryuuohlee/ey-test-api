//requirements
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./connect.js')

//route configs
const app = express();
const port = process.env.PORT;

//middleware
app.use(bodyParser.json());
app.use(cors());

//controllers

//routes
app.get('/',(req, res) => {
  res.send("200 connected")
})

app.listen(port, () => {
  console.log(`Port is listening on port ${port}`);
})