const prompt = require("prompt-sync")();
let taches = [];
let count = 1;

const menu = `
=== To-Do List ===
1. Afficher les tâches
2. Ajouter une tâche
3. Rechercher une tâche
4. Modifier une tâche
5. Supprimer une tâche
6. Marquer une tâche comme terminée
7. Afficher tâches terminées / en attente
0. Quitter
`;
function afficheslestaches() {
  if (taches.length === 0) {
    console.log("Aucune tâche disponible.");
    return;
  }
  console.table(taches);
}

function ajouterTache() {
  let Tache = {
    id: count++,
    description: prompt("entrer la description du tache : "),
    isDone: false,
  };
  taches.push(Tache);
}

function searchtache() {
  let description = prompt(" entrez le description : ");
  let tache = taches.find((elm) => elm.description === description);
  console.log(tache);
}

function modifiertaches() {
  let id = Number(prompt(" enter the id : "));
  let tache = taches.find((elm) => elm.id === id);
  if (!tache) {
    console.log(" tache introvable ");
  } else {
    tache.description = prompt("entrez la nouvelle description : ");
  }
}

function supremertache() {
  let id = Number(prompt(" enter the id : "));
  taches = taches.filter((elm) => elm.id !== id);
}
function statutache() {
  let id = Number(prompt("Entrer l' id : "));
  let tache = taches.find((elm) => elm.id === id);

  if (!tache) {
    console.log("Tâche introuvable!");
  } else {
    tache.isDone = !tache.isDone;
    let statut = tache.isDone ? "terminée" : "en attente";
    console.log(`Tâche marquée comme ${statut}!`);
  }
}

function affparstatutache() {
  console.log(" Afficher tâches terminées");
  console.log("  Afficher tâches en attente");
  let choix = prompt("Votre choix : ");

  if (choix === "1") {
    let terminer = taches.filter((tache) => tache.isDone);
    if (terminer.length === 0) {
      console.log("Aucune tâche terminée.");
    } else {
      console.log(" === Tâches Terminées === ");
      console.table(terminer);
    }
  } else if (choix === "2") {
    let enattente = taches.filter((tache) => !tache.isDone);
    if (enattente.length === 0) {
      console.log("Aucune tâche en attente.");
    } else {
      console.log(" === Tâches En Attente === ");
      console.table(enattente);
    }
  } else {
    console.log("Choix invalide!");
  }
}

while (true) {
  console.log(" ==== To Do Liste === ");
  console.table(menu);

  let choice = Number(prompt("enter your choice "));
  if (choice === 0) {
    break;
  }

  switch (choice) {
    case 1:
      afficheslestaches();
      break;
    case 2:
      ajouterTache();
      break;
    case 3:
      searchtache();
      break;
    case 4:
      modifiertaches();
      break;
    case 5:
      supremertache();
      break;
    case 6:
      statutache();
      break;
    case 7:
      affparstatutache();
      break;
    default:
      console.log("Choix invalide!");
  }
}
