const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const musiquesRoutes = require("./routes/musiques_routes");
const filmsRoutes = require("./routes/films_routes");
const jvideoRoutes = require("./routes/jvideo_routes");

app.use("/api/musiques", musiquesRoutes);
app.use("/api/films", filmsRoutes);
app.use("/api/jeuxvideo", jvideoRoutes);

app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "Une erreur non gérée est survenue" });
});

const uri =
  "mongodb+srv://gretaUser:K52vKgeGIT4Zf7Me@johan.jk2am.mongodb.net/gretaBibliotheque?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(5000, console.log("server running"));
  })
  .catch((err) => {
    console.log(err);
  });
