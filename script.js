// -- DATA --
const enigmes = [
  {
    objet: "curtain",
    titre: "Morphogènese",
    courteHistoire: "",
    enonce:
      "Je suis le cadre du serpent mais aussi un guitariste de renom.<br>Je suis la boite à outils la plus legere qui soit, à la main gauche il me manque un doigt.",
    reponsesProposees: [],
    bonneReponse: ["Django", "django"],
    indice:
      "Je suis un framework qui porte le nom d’un celebre joueur de jazz/manouche.",
  },
  {
    objet: "bug",
    titre: "Compilateur",
    courteHistoire: "",
    enonce:
      "Si votre Terminal ne vous obéit pas, je me subsitue à vous.<br>Un superUtilisateur, qu’ en premier l’on place, et de vos commandes, je viendrais à bout.",
    reponsesProposees: [],
    bonneReponse: ["sudo", "$ sudo", "sudo-", "sudo -"],
    indice: 'Abréviation de "substitute user do"',
  },
  {
    objet: "poetry",
    titre: "Pionnière",
    courteHistoire: "",
    enonce:
      "J’apparais au XVIIIe sciecle dans de multiples domaines.<br>Au XIXe, musique et tissage m’utilisaient sans modération.<br>Mais j’atteinds mon heure de gloire au XXe sciecle, avec la programmation.",
    reponsesProposees: [],
    bonneReponse: [
      "La carte perforée",
      "La carte perforee",
      "carte perforée",
      "carte perforee",
      "la carte perforée",
      "la carte perforée",
    ],
    indice: '"J’fais des trous, des p’tits trous…"',
  },
  {
    objet: "richardStallman",
    titre: "My Best Buddy",
    courteHistoire: "",
    enonce:
      '"Sans toi je n’finis rien;<br>Sans toi après rien ne vient…<br>Ma colonne me tient;<br>La demi, c’est très bien…"',
    reponsesProposees: [],
    bonneReponse: [";"],
    indice: "Regarde ton clavier",
  },
  {
    objet: "asteroidPoster",
    titre: "My very own Rolling-Stone",
    courteHistoire: "",
    enonce:
      'Si ma base est variable, je vaux toujours la même chose.<br>Lorsque 2641 = 23101 = 001001100100001 et que je suis "Torvalds".',
    reponsesProposees: [],
    bonneReponse: [
      "9793 Torvalds",
      "9793-Torvalds",
      "Torvalds-9793",
      "Torvalds 9793",
    ],
    indice: "Caillou Volant",
  },
  {
    objet: "mascot",
    titre: "",
    courteHistoire: '- Tux: "I won’t bite",<br>- Linus: "Yes, it will!"',
    enonce: "",
    reponsesProposees: [],
    bonneReponse: [],
    indice: "",
  },
  {
    objet: "commodore",
    titre: "Gourou Meditation",
    courteHistoire: "",
    enonce: "Que fait un geek pour se remonter le moral?",
    reponsesProposees: [],
    bonneReponse: ["Il se console", "il se console"],
    indice: "Il se console",
  },
  {
    objet: "dart",
    titre: "On ne peut pas être bon en tout...",
    courteHistoire:
      "Linus a dit: \"...le système Mach c'est de la daube.<br>Ca réunit toutes les erreurs de conception possibles et imaginables, ils ont meme réussi à en rajouter quelques-unes...",
    enonce: "\"none : (pas d'enigme) Chez nous, c'est gratuit!\"",
    reponsesProposees: [],
    bonneReponse: [],
    indice: "",
  },
  {
    objet: "copyleft",
    titre: "J'y crois",
    courteHistoire: "",
    enonce: "Pourtant pas un héro, je suis loin d'etre zéro.",
    reponsesProposees: [],
    bonneReponse: ["null", "NULL", "Null"],
    indice: 'En Python se dit "None".',
  },
  {
    objet: "phone",
    titre: "",
    courteHistoire: "",
    enonce:
      "En ce moment, on me croise tout le temps.<br>Je suis symbole de rassemblement et à l’inverse du chiffrement, je suis irréversible.",
    reponsesProposees: [],
    bonneReponse: ["hash"], // attention fct convertion UPPERCASE ou lowcase de l'input reponse
    indice: "sécurité des mots de passe ou élément d'un micro-blog",
  },
  {
    objet: "alarmClock",
    titre: "Reveil",
    courteHistoire: "",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
  },
  {
    objet: "algoCollection",
    titre: "",
    courteHistoire: "",
    enonce:
      "Au risque de me répéter, je n’ai pas d’autre utilité.<br>J’agis avant de réflechir ou bien je reflechis avant de reflechir,<br>C'est selon vos conditions.",
    reponsesProposees: [],
    bonneReponse: ["while", "boucle while", "While"],
    indice: "je boucle",
  },
  {
    objet: "steveJobs",
    titre: "I wan't you Linus ... Nope thank you Stevie !",
    courteHistoire: "",
    enonce: "Comment concilier l’inconciliable ?",
    reponsesProposees: [
      "en douceur avec un TryParse",
      "en force avec un Parse",
      "en schmet avec JavaScript",
    ],
    bonneReponse: [
      "en douceur avec un TryParse",
      "en force avec un Parse",
      "en schmet avec JavaScript",
    ],
    indice: "",
  },
  {
    objet: "graceHopper",
    titre: "Grace Hopper",
    courteHistoire: "",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
  },
  {
    objet: "alanTuring",
    titre: "Alan Turing",
    courteHistoire: "",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
  },
  {
    objet: "adaLovelace",
    titre: "Ada Lovelace",
    courteHistoire: "",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
  },
  {
    objet: "postIt1",
    titre: "",
    courteHistoire:
      "Quand quelqu'un de triste joue aux jeux vidéo pour oublier, on peut dire qu'il se console.",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
  },
  {
    objet: "postIt2",
    titre: "",
    courteHistoire:
      "Quand est ce que Windows ne bug pas ?<br>Quand l'ordinateur est éteint.",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
  },
  {
    objet: "postIt3",
    titre: "",
    courteHistoire: "De quelle couleur sont tes yeux ?<br> #1292f4 et toi ? :)",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
  },
];

// -- FUNCTIONS --
function verifyResponse(val, objet) {
  let enigme = enigmes.find((e) => e.objet === objet);

  if (enigme.objet !== undefined && enigme.objet !== null) {
    let bonneReponse = false;
    enigme.bonneReponse.forEach((reponse) => {
      if (val === reponse) {
        bonneReponse = true;
      }
    });
    if (bonneReponse) {
      // Chaque la popup contenant l'énigme
      $(`#enigme-${enigme.objet}`).hide();
      // Affiche la popup contenant le résultat
      $("body").prepend(`
          <div class="resultat-enigme popup">
            <i class="far fa-times-circle close"></i>
            <p class="resultat-enigme-text win">bonne réponse !</p>
          </div>`);
    } else {
      // Chaque la popup contenant l'énigme
      $(`#enigme-${enigme.objet}`).hide();
      // Affiche la popup contenant le résultat
      $("body").prepend(`
          <div class="resultat-enigme popup">
            <i class="far fa-times-circle close"></i>
            <p class="resultat-enigme-text lose">mauvaise réponse...</p>
            <button class="btn-essai">Réessayer</button>
          </div>`);
      // Lors du clique sur le bouton "Réessayer", la popup enigme se remontre
      $(".btn-essai").on("click", () => {
        $(".resultat-enigme").remove();
        $(`#enigme-${enigme.objet}`).show();
      });
    }
    // Permet de fermer la popup
    $(".close").on("click", () => {
      $(".popup").remove();
    });
  }
}

window.showEnigma = function (objet) {
  let enigme = enigmes.find((e) => e.objet === objet);
  if ($(`.enigme`).length === 0) {
    if (enigme.objet !== undefined && enigme !== null) {
      let popupEnigme = `<div class="enigme popup" id="enigme-${enigme.objet}"><i class="fas fa-info-circle info"></i><i class="far fa-times-circle close"></i>`;
      popupEnigme += `<p class="text-enigme">${enigme.enonce}</p>`;
      if (enigme.reponsesProposees.length === 0) {
        popupEnigme += '<input type="text" class="ipt-enigme"/>';
      } else {
        enigme.reponsesProposees.forEach((proposition) => {
          popupEnigme += `<div class="reponse-enigme ipt-enigme" id="${proposition}">${proposition}</div>`;
        });
      }
      popupEnigme += `<p class="infotext" style="display:none;">${enigme.indice}</p>`;
      popupEnigme += `<button class="btn-enigme">C\'est mon dernier mot</button></div>`;

      $("body").append(popupEnigme);
      $(".info").on("click", () => {
        $(".infotext").css("display", "block");
        console.log("hellooooo");
        console.log(enigme.indice);
      });
    }
    // Change le style de la réponse sélectionnée en lui ajoutant ou retirant une classe
    const reponses = $(".reponse-enigme");
    for (const reponse of reponses) {
      $(reponse).on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(".active").removeClass("active");
          $(this).addClass("active");
        }
      });
    }

    // Vérification de la réponse au clique sur un bouton
    $(".btn-enigme").on("click", (e) => {
      if ($(".ipt-enigme").hasClass("active")) {
        verifyResponse($(".active").text(), objet);
      } else {
        verifyResponse($(".ipt-enigme").val(), objet);
      }
    });
  }

  // Permet de fermer la popup
  $(".close").on("click", () => {
    $(".popup").remove();
  });
};

// handles the keyboard input in unity
var gameReady = false;
// Called by Unity in GameControl's start function
function GameControlReady() {
  gameReady = true;
}
function FocusCanvas(focus) {
  if (gameReady) {
    unityInstance.SendMessage("gameControl", "FocusCanvas", focus);
  }
}