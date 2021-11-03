const express = require("express");
const router = express.Router();
const musiquesControllers = require("../controllers/musiques_controllers");

// chemin musiques : /api/musiques

let musiques = [
  {
    id: "1",
    auteur: "Daft Punk",
    annee: 2013,
    titre: "Get lucky",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg",
  },
  {
    id: "2",
    auteur: "David Guetta ft Sia",
    annee: 2011,
    titre: "Titanium",
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/51cQ8TfyqJL._SX342_QL70_ML2_.jpg",
  },
  {
    id: "3",
    auteur: "Nirvana",
    annee: 1991,
    titre: "Smells like teen spirit",
    imageUrl:
      "http://www.musiqxxl.fr/wp-content/uploads/2018/07/71VZjASx2kL._SL1400_-e1600358272696.jpg",
  },
  {
    id: "4",
    auteur: "Imagine Dragon",
    annee: 2018,
    titre: "Natural",
    imageUrl:
      "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg",
  },
  {
    id: "5",
    auteur: "System of a Down",
    annee: 2001,
    titre: "Toxicity",
    imageUrl:
      "https://static.fnac-static.com/multimedia/Images/FR/NR/3b/a1/9d/10330427/1540-1/tsp20180831092201/Toxicity.jpg",
  },
  {
    id: "6",
    auteur: "Hubert-Félix Thiéfaine",
    annee: 1978,
    titre: "La Cancoillotte",
    imageUrl:
      "https://media.paperblog.fr/i/586/5862158/cancoillotte-hubert-felix-thiefaine-1978-L-j7Mx8v.jpeg",
  },
  {
    id: "7",
    auteur: "AC/DC",
    annee: 1990,
    titre: "Thunderstruck",
    imageUrl:
      "https://i.scdn.co/image/fb26e1c0e5779ac46b225651494ac14b6b8ebba7",
  },
];

router.get("/", musiquesControllers.getMusiques);

router.get("/:musiqueId", musiquesControllers.getMusiqueById);

router.post("/", musiquesControllers.createMusique);

router.patch("/:musiqueId", musiquesControllers.updateMusique);

router.delete("/:musiqueId", musiquesControllers.deleteMusique);

module.exports = router;
