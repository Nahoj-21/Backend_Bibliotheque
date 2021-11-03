const { v4: uuidv4 } = require("uuid");

const Musique = require("../models/musiques");

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

const getMusiques = (req, res, next) => {
  res.json({ Musique });
};

const getMusiqueById = (req, res, next) => {
  const musicId = req.params.musiqueId;
  const musique = musiques.find((m) => {
    return m.id === musicId;
  });
  if (!musique) {
    return res.status(404).json({
      message: "Error 404 : Musique non trouvée pour cette identifiant",
    });
  }
  res.json({ musique });
};

const createMusique = (req, res, next) => {
  const { auteur, annee, titre, imageUrl } = req.body;
  const createdMusique = {
    id: uuidv4(),
    auteur,
    annee,
    titre,
    imageUrl,
  };
  musiques.push(createdMusique);
  res.status(201).json({ musique: createdMusique });
  // res.status(201).json({ musique: "Enregistrement effectué !" });
};

const updateMusique = (req, res, next) => {
  const { auteur, annee, titre, imageUrl } = req.body; // recuperation des variables dans le body
  const musicId = req.params.musiqueId; // recuperation du musiqueId

  const updatedMusique = {
    ...musiques.find((m) => {
      return m.id === musicId; // recherche le musique dont l'Id correspond au parametre musiqueId. Le return permet d'injecter et de continuer
    }),
  };

  const musiqueIndex = musiques.findIndex((m) => m.id === musicId); // recuperation du numero d'index

  updatedMusique.auteur = auteur;
  updatedMusique.titre = titre;
  updatedMusique.annee = annee;
  updatedMusique.imageUrl = imageUrl;

  musiques[musiqueIndex] = updatedMusique;

  res.status(200).json({ musique: updatedMusique });
};

const deleteMusique = (req, res, next) => {
  const musicId = req.params.musiqueId;
  musiques = musiques.filter((m) => m.id !== musicId);
  res.status(200).json({ message: "Musique supprimée !" });
};

exports.getMusiques = getMusiques;
exports.getMusiqueById = getMusiqueById;
exports.createMusique = createMusique;
exports.updateMusique = updateMusique;
exports.deleteMusique = deleteMusique;
