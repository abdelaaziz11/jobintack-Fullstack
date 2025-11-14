{/*
// Declaration d'une variable sans intialisation

let a;
console.log('a '+ a)
a = "this is a character"
console.log('a '+ a)
a = 123
console.log('a '+ a)
*/}


{/*
// Declaration d'une variable avec intialisation

let prixHT = 150
let tauxTVA = 19.6
let prixTTC = prixHT + (tauxTVA / 100 * prixHT)
console.log((`prix TCC : ${prixTTC}`))
*/}

{/*
const nom = "Abdelaaziz"
let age = 21
let estEtudiant = false
console.log("nom" + nom)
console.log("age" + age)
console.log("estEtudiant " + estEtudiant)
console.log(typeof(nom))
console.log(typeof(age))
console.log(typeof(estEtudiant))
nom = "abdel"
console.log(nom)

*/}


{/*
"use script";

function cherche (tab, value) {
    let i = 0;
    let trouvé = false;
    let resultat = -1 
    while (i <= tab.length && !trouvé) {
      if (tab[i] === value) {
        trouvé = true;
        resultat = i
      } else {
        i++;
      }
    }
    if (trouvé) {
    } else {
      console.log('le tableau contient la valeur ' + value + ' sa position est ' + resultat);
      console.log('le tableau ne contient pas la valeur ' + value);
    }
    
  }
cherche ([2, 4, 14, 23, 12, 7, 10], 34);
cherche([2, 4, 14, 23, 12, 7, 101], 14);
*/}