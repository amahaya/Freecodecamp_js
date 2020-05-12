// STEP 1 - Créer une constante contenant l'âge
const myAge = "Coucou";
let result = "";
// STEP 2 - Si l'utisateur est mineur, on lui affiche "Tu es mineur"
// STEP 3 - Si l'utisateur est majeur, on lui affiche "Tu es majeur"
// STEP 4 - Si l'utilisateur a 18 ans, on lui affiche "Pile poil 18 ans !"
// STEP 5 - Si l'utilisateur indique un chiffre plus petit que 0 ou plus grand 110, on lui affiche "Menteur !"
// STEP 6 - Si l'utilisateur indique autre chose qu'un Integer, on lui affiche "Ce n'est pas un nombre valide"

// if (myAge < 0 || myAge > 110) {
//   result = 'Menteur';
// } else if (myAge < 18) {
//   result = 'Tu es mineur';
// } else if (myAge > 18) {
//   result = 'Tu es majeur';
// } else {
//   result = 'Pile poil 18 ans !';
// }

function checkAge(age) {
  if (age < 18) {
    return "Tu es mineur";
  } else if (age > 18) {
    return "Tu es majeur";
  } else {
    return "Pile poil 18 ans !";
  }
}

if (!Number.isInteger(myAge)) {
  result = "Ce n'est pas un nombre valide.";
} else if (myAge < 0 || myAge > 110) {
  result = "Menteur";
} else {
  result = checkAge(myAge);
}

console.log(result);

/*
Exemple :
if (condition) {
  instruction à faire
} else if (condition) {
  instruction à faire
} else {
  instruction à faire
}

AND &&
OR ||

Fonctionnement du &&
VRAI + VRAI = VRAI
VRAI + FAUX = FAUX
FAUX + VRAI = FAUX
FAUX + FAUX = FAUX
VRAI + VRAI + VRAI = VRAI
VRAI + FAUX + VRAI = FAUX

Fonctionnement du ||

VRAI || VRAI = VRAI
VRAI || FAUX = VRAI
FAUX || VRAI = VRAI
FAUX || FAUX = FAUX
VRAI || VRAI || VRAI = VRAI
VRAI || FAUX || VRAI = VRAI
FAUX || FAUX || FAUX = FAUX
*/
