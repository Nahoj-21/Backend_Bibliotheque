const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const musiqueSchema = new Schema({
  auteur: { type: String, required: true },
  annee: { type: String, required: True },
  titre: { type: String, required: True },
  imageUrl: { type: String, required: True },
});

module.exports = mongoose.model("Musique", musiqueSchema);
