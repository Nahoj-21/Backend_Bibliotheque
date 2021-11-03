const express = require("express");
const router = express.Router();
const filmsControllers = require("../controllers/films_controllers");

// chemin films : /api/films

let films = [
  {
    id: "1",
    auteur: "Kurt Wimmerk",
    annee: 2002,
    titre: "Equilibrium",
    imageUrl: "https://m.media-amazon.com/images/I/51K2WVH130L._AC_.jpg",
  },
  {
    id: "2",
    auteur: "Gareth Edwards",
    annee: 2016,
    titre: "Rogue One : A STAR WARS STORY",
    imageUrl:
      "https://www.starwars-holonet.com/_v8/images/articles/81/20161115-starwars-rogue-one-c-est-quoi-03.jpg",
  },
  {
    id: "3",
    auteur: "Patrice Leconte",
    annee: 1979,
    titre: "Les Bronzés font du ski",
    imageUrl: "https://i.skyrock.net/8386/22938386/pics/688401216.jpg",
  },
];

router.get("/", filmsControllers.getFilms);

router.get("/:filmId", filmsControllers.getFilmByID);

router.post("/", filmsControllers.createFilm);

router.patch("/:filmId", filmsControllers.updateFilm);

router.delete("/:filmId", filmsControllers.deleteFilm);

module.exports = router;
