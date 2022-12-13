require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");
const Pokemon = require("./models/pokemon.js");

//MIDDLEWARE
//==========
app.use(methodOverride("_method"));
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

// DELETING RECORDS/DOCUMENTS
//===========================
app.delete("/pokes/:id", (req, res) => {
  Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/pokemon"); //redirect back to Pokemon index
  });
});

// UPDATE RECORDS/DOCUMENTS
//===========================
app.put("/pokes/:id", (req, res) => {
  Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokes) => {
    console.log(updatedPokes);
    res.redirect(`/fruits/${req.params.id}`);
  });
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

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/pokemon`);
});
