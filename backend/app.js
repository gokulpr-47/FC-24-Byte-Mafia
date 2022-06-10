require('dotenv').config()

const express = require("express");
const mongoose  = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test")

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`Listening at port ${port}`));