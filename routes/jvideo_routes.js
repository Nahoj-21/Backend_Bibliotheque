const express = require("express");
const router = express.Router();
const jvideoControllers = require("../controllers/jvideo_controllers");

// chemin jeuxvideo : /api/jeuxvideo

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

router.get("/", jvideoControllers.getJvideo);

router.get("/:jvideoId", jvideoControllers.getJvideoById);

router.post("/", jvideoControllers.createJvideo);

router.patch("/:jvideoId", jvideoControllers.updateJvideo);

router.delete("/:jvideoId", jvideoControllers.deleteJvideo);

module.exports = router;
