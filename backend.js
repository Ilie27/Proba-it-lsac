require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/ProbaItDB");

const Schema = mongoose.Schema;

const memeSchema = new Schema({
  description: String
});

const Meme = mongoose.model('Meme', memeSchema);

// const userSchema = new Schema({
//   email: String,
//   username: String,
//   password: String,
//   memes: [memeSchema]
// });

// const User = new mongoose.model("User", userSchema);

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

.post(function(req,res){
  const newMeme = new Meme({
    description: req.body.description
  });

  newMeme.save(function(err){
    if(!err){
      res.send("Succesfully added a new meme.");
    } else {
      res.send(err);
    }
  });
});

// Target all memes

app.route("/memes/:memeId")

.get(function(req,res){
Meme.findOne({_id: req.params.memeId}, function(err, foundMeme){
  if(!err){
    if(foundMeme){
      res.send(foundMeme);
    } else {
      res.send("404 No meme found!");
    }
  } else {
  res.sendres.send(err);
  }
});
})

// nu merge
.patch(function(req,res){
  Meme.findOneAndUpdate(
    {_id: req.params.memeId},
    {description: req.body.description},
    function(err){
      if(!err){
        res.send("Succesfully updated meme");
      } else {
        res.send(err);
      }
    }
  )
})

.delete(function(req,res){
  Meme.deleteOne({_id: req.params.memeId},function(err){
    if(!err){
      res.send("Succesfully deleted the meme");
    } else {
      res.send(err);
    }
  });
});



const port = 3000;
app.listen(port, function(){
  console.log("Server started on port " + port);
})
