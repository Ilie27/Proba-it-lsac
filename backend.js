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

const User = new mongoose.model("User", userSchema);
const Meme = new mongoose.model("Meme", memeSchema);

// Target one meme

app.route("/memes")

.get(function(req,res){
  Meme.find({}, function(err, memes){
    if(!err){
      res.send(memes);
    } else {
      res.send(err);
    }
  });
})

const port = 3000;
app.listen(port, function(){
  console.log("Server started on port " + port);
})
