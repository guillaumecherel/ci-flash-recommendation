export type Ci = { id: number };

export const ci = (id: number): Ci => Object.freeze({id: id});

export type CiReco = {
    ciClose: Ci[];
    ciOpening: Ci[];
    ciDistant: Ci[];
};

export const ciReco = (ciClose: Ci[], ciOpening: Ci[], ciDistant: Ci[]): 
        CiReco =>
    Object.freeze({
        ciClose: ciClose, 
        ciOpening: ciOpening, 
        ciDistant: ciDistant
    });


export type CiNames = {
  map: Record<number, string>;
  get: (ci: Ci) => string;
  array: () => {ci: Ci, name: string}[];
}

export const ciNamesFromRecord = (rec: Record<number, string>): CiNames => {
  return {
    map: rec,
    get: (ci: Ci): string => rec[ci.id],
    array: (): {ci: Ci, name: string}[] => {
      return Object.entries(rec).map(([ciId, ciName]) => { 
        return{ci: ci(+ciId), name: ciName}
      });
    },
  };
};

export type CiScoreVals = {distance: number; ouverture: number};

export type CiScores = {
  map: Record<number, CiScoreVals>;
  get: (ci: Ci) => CiScoreVals;
  distanceAsc: (ciNames: CiNames) => {name: string, val: number}[];
  ouvertureDesc: (ciNames: CiNames) => {name: string, val: number}[];
};

export const ciScoresFromRecord = (rec: Record<number, CiScoreVals>): CiScores => {
  return {
    map: rec,
    get: (ci: Ci): CiScoreVals => rec[ci.id],
    distanceAsc: (ciNames: CiNames): {name: string, val: number}[] => Object.entries(rec)
      .map(([ciId, score]) => {return{name: ciNames.get(ci(+ciId)), val: score.distance}}),
    ouvertureDesc: (ciNames: CiNames): {name: string, val: number}[] => Object.entries(rec)
      .map(([ciId, score]) => {return{name: ciNames.get(ci(+ciId)), val: score.ouverture}}),
  };
};



//export const ciNames: Record[]
//   "Travailler à mon compte",
//   "Travailler seul",
//   "Piloter les coûts, la rentabilité",
//   "Piloter un budget",
//   "Gérer un service de grande entreprise",
//   "Gérer une salle de sport",
//   "Gérer un hôtel",
//   "Gérer un salon de coiffure",
//   "Créer un projet entrepreneurial",
//   "Prendre des risques",
//   "Vendre ou louer des maisons",
//   "Gérer des actifs, un patrimoine",
//   "Piloter des indicateurs statistiques",
//   "Etre leader, inspirer et motiver",
//   "Organiser une équipe, des tâches",
//   "Coacher, faire progresser les autres",
//   "Atteindre des objectifs ambitieux",
//   "Accompagner le changement",
//   "Réaliser une veille de marché",
//   "Concevoir une offre de produits / services",
//   "Travailler dans l’administration publique",
//   "Donner des discours",
//   "Développer un territoire économique",
//   "Gérer et entretenir un site, une infrastructure",
//   "Se déplacer souvent, voyager",
//   "Convaincre, influencer",
//   "Concevoir des contenus, des supports de communication",
//   "Gérer le marketing et piloter l'image de marque",
//   "Vendre, commercialiser",
//   "Servir un client",
//   "Elaborer une stratégie commerciale",
//   "Elaborer une offre commerciale / Répondre à un appel d'offre",
//   "Gérer la relation client",
//   "Améliorer la qualité de service, fidéliser les clients",
//   "Animer la communication interne",
//   "Accueillir, orienter, renseigner",
//   "S'occuper de la carrière de quelqu'un",
//   "Ecouter et dialoguer avec ses collaborateurs",
//   "Maintenir l’engagement et la satisfaction des collaborateurs",
//   "Travailler en réseau",
//   "Découvrir d'autres cultures",
//   "Travailler en collectif",
//   "Travailler dans le secteur social",
//   "Travailler dans un bureau",
//   "Assurer une gestion documentaire",
//   "Faire des inventaires et tenir des registres",
//   "Commander et gérer le matériel de bureaux",
//   "Gérer la logistique",
//   "Tenir le registre des transactions financières d'une entreprise",
//   "Assurer la gestion administrative",
//   "Calculer le salaire des employés",
//   "Transférer des fonds entre banques",
//   "Elaborer et faire respecter des consignes",
//   "Respecter les règles",
//   "Collecter et classer",
//   "Gérer la comptabilité et les finances",
//   "Gérer les finances publiques",
//   "Protéger les personnes et les biens",
//   "Juger",
//   "Faire respecter les lois",
//   "Participer à des procès",
//   "Enquêter",
//   "Rédiger des contrats",
//   "Négocier des contrats",
//   "Respecter un cadre juridique",
//   "Assurer un transport",
//   "Travailler sur des voitures",
//   "Réparer, nettoyer, entretenir",
//   "Poser du parquet ou du carrelage",
//   "Poser des murs ou des toits",
//   "Poser, réparer de la plomberie",
//   "Livrer, transporter, conduire, manoeuvrer",
//   "Porter ou manipuler des charges lourdes",
//   "Faire un travail physique, fatiguant",
//   "Réparer et installer des serrures",
//   "Se rendre sur des chantiers",
//   "Manipuler des matières premières",
//   "Extraire, exploiter des ressources",
//   "Conditionner, manutentionner des produits",
//   "Réparer des appareils électroménagers",
//   "Monter des meubles",
//   "Maîtriser un savoir faire technique",
//   "Utiliser une machine sur une chaîne de production",
//   "Assembler des pièces électroniques",
//   "Assurer la maintenance technique",
//   "Cultiver, récolter",
//   "Cuisiner",
//   "Travailler dans l'art ou dans la musique",
//   "Faire des tâches minutieuses, de précision",
//   "Utiliser des machines, des outils, des logiciels",
//   "Repérer les erreurs, observer, contrôler",
//   "Maîtriser une documentation technique",
//   "Contrôler la qualité",
//   "Gérer les stocks et les approvisionnements",
//   "Travailler de mes mains",
//   "Construire, fabriquer",
//   "Entretenir des jardins et des espaces verts",
//   "Aménager un espace",
//   "Dessiner",
//   "Ecrire des chansons",
//   "Composer, mettre en scène",
//   "Créer une oeuvre, designer",
//   "Faire des illustrations, du graphisme",
//   "Ecrire des scénarios de films ou séries",
//   "Distraire, animer, divertir",
//   "Chanter, jouer d'un instrument",
//   "Exercer une activité artistique ou créative",
//   "Travailler dans le spectacle ou pour la télévision",
//   "Réaliser une performance, une représentation artistique",
//   "Diriger une pièce de théâtre",
//   "Se déplacer pour faire des reportages",
//   "Avoir des sensations fortes",
//   "Jouer un rôle dans une série ou un film",
//   "Ecrire des livres",
//   "Traduire",
//   "Développer les relations internationales",
//   "Pratiquer plusieurs langues",
//   "Se déplacer en tournées",
//   "Organiser des sorties pédagogiques avec des personnes handicapées",
//   "Apprendre à des personnes handicapées à travailler en autonomie",
//   "Favoriser l'insertion professionnelle et sociale des personnes",
//   "Enseigner et éduquer",
//   "Enseigner dans une école primaire",
//   "Enseigner à une classe de lycée",
//   "Aider, conseiller les autres",
//   "M'occuper de la santé des autres",
//   "Travailler pour des associations",
//   "Réaliser un accompagnement psychologique",
//   "Apprendre la lecture à des enfants",
//   "S'occuper des enfants dans une garderie",
//   "Être avec des enfants ou adolescents",
//   "Travailler en magasin",
//   "Travailler au domicile d'un particulier",
//   "Aider les personnes ayant des problèmes familiaux",
//   "Aider les personnes ayant des problèmes d'addiction",
//   "Prendre soin des animaux",
//   "Protéger l'environnement",
//   "Être dans la nature",
//   "Etudier le comportement animal",
//   "Cartographier",
//   "Etudier des solutions pour réduire la pollution",
//   "Faire de la recherche scientifique",
//   "Examiner au microscope",
//   "Gérer une architechture logicielle, un système technique",
//   "Rechercher et analyser des informations",
//   "Travailler avec les nombres, manipuler des données",
//   "Etudier la génétique",
//   "Etudier la structure du corps humain",
//   "Développer des nouveaux traitements médicaux",
//   "Etudier le mouvement des planètes",
//   "Faire des expériences, des tests",
//   "Développer des programmes informatiques",
//   "Résoudre des énigmes et des problèmes",
//   "Elaborer une feuille de calcul à l'aide d'un logiciel",
//   "Modéliser / Prototyper",
//   "Utiliser les nouvelles technologies",
//   "Assurer une veille technologique",
// ];
