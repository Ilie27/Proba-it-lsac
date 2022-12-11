const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/memesDB");

const userSchema = {
  id: String,
  email: String,
  username: String,
  password: String
}

const memeSchema = {
  id: String,
  description: String
}
