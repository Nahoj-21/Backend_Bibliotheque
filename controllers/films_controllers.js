const { v4: uuidv4 } = require("uuid");

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

const getFilms = (req, res, next) => {
  res.json({ films });
};

const getFilmByID = (req, res, next) => {
  const filId = req.params.filmId;
  const film = films.find((f) => {
    return f.id === filId;
  });
  if (!film) {
    return res
      .status(404)
      .json({ message: "Error 404 : Film non trouvé pour cette identifiant" });
  }
  res.json({ film });
};

const createFilm = (req, res, next) => {
  const { auteur, annee, titre, imageUrl } = req.body;
  const createdFilm = {
    id: uuidv4(),
    auteur,
    annee,
    titre,
    imageUrl,
  };
  films.push(createdFilm);
  res.status(201).json({ musique: createdFilm });
};

const updateFilm = (req, res, next) => {
  const { auteur, annee, titre, imageUrl } = req.body; // recuperation des variables dans le body
  const filId = req.params.filmId; // recuperation du musiqueId

  const updatedFilm = {
    ...films.find((f) => {
      return f.id === filId; // recherche le musique dont l'Id correspond au parametre musiqueId. Le return permet d'injecter et de continuer
    }),
  };

  const filmIndex = films.findIndex((f) => f.id === filId); // recuperation du numero d'index

  updatedFilm.auteur = auteur;
  updatedFilm.titre = titre;
  updatedFilm.annee = annee;
  updatedFilm.imageUrl = imageUrl;

  films[filmIndex] = updatedFilm;

  res.status(200).json({ film: updatedFilm });
};

const deleteFilm = (req, res, next) => {
  const filId = req.params.filmId;
  musiques = musiques.filter((f) => f.id !== filmId);
  res.status(200).json({ message: "Film supprimé !" });
};

exports.getFilms = getFilms;
exports.getFilmByID = getFilmByID;
exports.createFilm = createFilm;
exports.updateFilm = updateFilm;
exports.deleteFilm = deleteFilm;
