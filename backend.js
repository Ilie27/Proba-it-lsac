require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
var sha256 = require('js-sha256');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/ProbaItDB");
// mongoose.connect(process.env.SERVER);


const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

const memeSchema = new mongoose.Schema({
  description: String,
  user: userSchema
});

const Meme = mongoose.model('Meme', memeSchema);


// Target all memes

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

// Target one meme

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

app.route("/memes/:memeId")
.patch(function(req,res){
  Meme.findOneAndUpdate(
    {_id: req.params.memeId},
    { $set: {description: req.body.description} },
    function(err){
      if(!err){
        res.send("Succesfully updated meme");
      } else {
        res.send(err);
      }
    }
  );
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

// Register
app.post("/register", function(req,res){
  const hashedPassword = sha256(req.body.password);
  const newUser = new User({
    email: req.body.email,
    username: req.body.username,
    password: hashedPassword
  });
  newUser.save(function(err){
    if(!err){
      res.send("Succesfully added a new user.");
    } else {
      res.send(err);
    }
  });
});

// Login
app.post("/login", function(req,res){
  const reqPassword = sha256(req.body.password);
  const reqUsername = req.body.username;
  User.find({username: reqUsername}, function(err, user) 
  {
     if (err){
         res.sendStatus(404); // user not found
     }
     else if(user.password == reqPassword){
        res.send ("Authenticated with succes");
      } else {
        res.sendStatus(401); // password is incorect
      }
  });
});



const port = 3000;
app.listen(port, function(){
  console.log("Server started on port " + port);
})
