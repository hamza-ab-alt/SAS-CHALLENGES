let entreprise = {
  adresse: {
    rue: "saada",
    ville: "beni makada",
    codepostall: 23000,
  },
};
console.log(entreprise.adresse.ville);





let produits = [
  { nom: "alia", prix: 180, quantite: 20 },
  { nom: "lava", prix: 60, quantite: 25 },
  { nom: "halal", prix: 45, quantite: 30 },
];
for (elem of produits) {
  totale = elem.prix * elem.quantite;
  console.log(elem.nom + ": " + totale);
}





class animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  parler() {
    console.log(
      " may name is " + this.name + " and his is my type " + this.type
    );
  }
}
const chien = new animal("bobi", "doberman");
chien.parler();






let employes = [
  { nom: "hamza", salaire: 2500 },
  { nom: "simo", salaire: 4000 },
  { nom: "ali", salaire: 2000 },
  { nom: "hwa", salaire: 5000 },
];
for (elem of employes) {
  if (elem.salaire > 3000) {
    console.log(elem.nom);
  }
}

function cloner(obj) {
  return { ...obj };
}
let originale = {
  name: "flan",
  age: 123,
  ville: "bni makad",
};
let copie = cloner(originale);
console.log(copie);
