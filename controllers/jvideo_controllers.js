const { v4: uuidv4 } = require("uuid");

let jeuxvideo = [
  {
    id: "1",
    auteur: "Ubisoft",
    annee: 2021,
    titre: "FAR CRY 6",
    resume:
      "Rejoignez les guerilleros de Libertad et combattez la dictature des Castillo",
    imageUrl:
      "https://www.journaldugeek.com/content/uploads/2021/05/far-cry-6-ubisoft.jpg",
  },
  {
    id: "2",
    auteur: "Blizzard",
    annee: 2021,
    titre: "Diablo II : Resurrected",
    resume:
      "Il s'agit d'une version remake du jeu vidéo Diablo II sorti en 2000.",
    imageUrl:
      "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_DiabloIIResurrected_image1600w.jpg",
  },
  {
    id: "3",
    auteur: "EA",
    annee: 2021,
    titre: "Battlefield 2042",
    resume: "Un jeu basé dans un conflit du futur (2042)",
    imageUrl:
      "https://www.journaldugeek.com/content/uploads/2021/06/bf-2042-section-bg-homepage-hero-keyart-xl-adapt--320w.jpg",
  },
  {
    id: "4",
    auteur: "LucasArts",
    annee: 2005,
    titre: "Battlefront 2",
    resume: "Le VRAI Battlefront 2 !!!",
    imageUrl:
      "https://static.hitek.fr/img/actualite/2017/10/04/fb_star-wars-battlefront-ii-wallpap.jpg",
  },
  {
    id: "5",
    auteur: "Frontier Developments",
    annee: 2014,
    titre: "Elite : Dangerous",
    resume: "Une simulation spatiale très réaliste, magnifiée par la VR.",
    imageUrl:
      "https://thumbs.gfycat.com/AnguishedDecentGuillemot-size_restricted.gif",
  },
];

const getJvideo = (req, res, next) => {
  res.json({ jeuxvideo });
};

const getJvideoById = (req, res, next) => {
  const jeuvId = req.params.jvideoId;
  const jeuxVideo = jeuxvideo.find((j) => {
    return j.id === jeuvId;
  });
  if (!jeuxVideo) {
    return res.status(404).json({
      message: "Error 404 : Jeux vidéo non trouvé pour cette identifiant",
    });
  }
  res.json({ jeuxVideo });
};

const createJvideo = (req, res, next) => {
  const { auteur, annee, titre, resume, imageUrl } = req.body;
  const createdJvideo = {
    id: uuidv4(),
    auteur,
    annee,
    titre,
    resume,
    imageUrl,
  };
  jeuxvideo.push(createdJvideo);
  res.status(201).json({ musique: createdJvideo });
};

const updateJvideo = (req, res, next) => {
  const { auteur, annee, titre, resume, imageUrl } = req.body; // recuperation des variables dans le body
  const jeuvId = req.params.jvideoId; // recuperation du musiqueId

  const updatedJvideo = {
    ...jeuxvideo.find((j) => {
      return j.id === jeuvId; // recherche le musique dont l'Id correspond au parametre musiqueId. Le return permet d'injecter et de continuer
    }),
  };

  const jvideoIndex = jeuxvideo.findIndex((j) => j.id === jeuvId); // recuperation du numero d'index

  updatedJvideo.auteur = auteur;
  updatedJvideo.titre = titre;
  updatedJvideo.annee = annee;
  updatedJvideo.resume = resume;
  updatedJvideo.imageUrl = imageUrl;

  jeuxvideo[jvideoIndex] = updatedJvideo;

  res.status(200).json({ jeuvideo: updatedJvideo });
};

const deleteJvideo = (req, res, next) => {
  const jeuvId = req.params.jvideoId;
  jeuxvideo = jeuxvideo.filter((j) => j.id !== jeuvId);
  res.status(200).json({ message: "Jeu vidéo supprimé !" });
};

exports.getJvideo = getJvideo;
exports.getJvideoById = getJvideoById;
exports.createJvideo = createJvideo;
exports.updateJvideo = updateJvideo;
exports.deleteJvideo = deleteJvideo;
