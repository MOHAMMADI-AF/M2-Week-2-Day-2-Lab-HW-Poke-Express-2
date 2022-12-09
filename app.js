require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const Pokemon = require("./models/pokemon.js");

//MIDDLEWARE
//==========
app.use((req, res, next) => {
  next();
});

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

mongoose.set("strictQuery", true);

// MONGOOSE
//=========
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// ROUTES
//=======
app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokes) => {
    res.render("Index", {
      pokes: allPokes, // getting all fruis from db to pass as props
    });
  });
});

// CREATING RECORDS/DOCUMENTS
//===========================
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body, (error, createdPokemon) => {
    res.redirect("/pokemon");
  });
});

app.get("/pokemon/:indexOfPokesArray", function (req, res) {
  Pokemon.findById(req.params.indexOfPokesArray, (err, foundpokemon) => {
    res.render("Show", {
      pokemon: foundpokemon,
    });
  });
});

//TESTING SERVER
//==============
app.listen(port, () => {
  console.log("listening");
});
