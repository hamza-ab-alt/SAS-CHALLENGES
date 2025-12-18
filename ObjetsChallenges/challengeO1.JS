let voiture = { marque: "mercedes", modele: "G-CLASS", annee: 2020 };
console.log(voiture);
console.log(voiture.marque, voiture.annee);
voiture.annee = 1800;
console.log(voiture);
voiture.coleur = "black";
console.log(voiture);

delete voiture.modele;
console.log(voiture);
