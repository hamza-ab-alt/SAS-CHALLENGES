let etudiant = {
   nom: "hamza ab ",
   age: 23 
  };
function sePresenter() {
  console.log(
    `Bonjour, je m'appelle ${etudiant.nom} et j'ai ${etudiant.age} ans.`
  );
}
sePresenter();




let person = {
  name: "zineb",
  age: 20,
  cin: "A123456",
  ville: " 3en 3en ",
  student: true,
};
for (elm in person) {
  console.log(elm + ":" + person[elm]);
}






let classe = {
     etudiant : ["hamza", "zineb" , "aimad" ,]

}
function afficherEtudiants(){
    console.log(classe.etudiant);

}
afficherEtudiants()






let livre = [
  { 
    titre: "ta ktab",
     auteur: "zineb sk",
      anee: 1000 
    },
  { 
    titre: "ma l9a mykteb", 
    auteur: "aimad sf",
     anee: 3000 
    },
  { 
    titre: "kteb tariikh",
     auteur: "ham ab ",
      anee: 2025
     },
];
console.log(livre);




function TrouverLivre(titre) {
  for (elm of livre) {
    if (titre === elm.titre) {
      console.log(elm);
    }
  }
}
TrouverLivre("ta ktab");
 