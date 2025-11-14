{/*
let tabl3 = [1, "deux", 3]
let tabl4 = [1, {nom: "abdel", prenom: "khouda"}]
let tabl5 = [1,[1,2,3], function(){console.log("Hi!")}]

console.log(tabl3[0])
console.log(tabl3[1])
console.log(tabl3[2])
console.log("length ", tabl3.length)

console.log(tabl4[0])
console.log(tabl4[1])

console.log("length ",tabl4.length)

console.log(tabl5) */}


{/*
let contenuMixte = ["Mon premier element", 2024, {nom: "Dupont"}, function(){console.log("Cette fonction a ete appelee !")}];

console.log(contenuMixte[1])
console.log(contenuMixte[2].nom)
console.log(contenuMixte[3]())*/}

// let t1 = [1, "deux", "abdel"]
// let t2 = [1, {nom: "abdel", prenom: "khouda"}]

// console.log()

{/* 
//props 
let obj1 = {0:"un", 1:"deux", 2:"trois", length :3}
obj1.unites = "kg"
let  tab1 = ["un", "deux", "trois"]
tab1.unites = "kg"

function display(x) {
    console.log(typeof x)
    for (let prop in x){
        console.log(prop + " : " + x[prop])
    }
}

display(obj1)
display(tab1)

console.log(Object.getOwnPropertyDescriptor(tab1,'length'))
console.log(Object.getOwnPropertyDescriptor(obj1,'length'))
*/}

{/** 
let tab1 = ["un", , "trois"]
tab1[5] = "six"
tab1.name = "tab1"

for (let i = 0 ; i < tab1.length; i++) {

    console.log(i + " : " + tab1[i])
}
for (let nb of tab1) {
    console.log(nb)
}
for ( let prop in tab1){
    console.log(prop)
}

console.log(Array.isArray(tab1))*/}
{/** 
let  tab1 = ["un", "deux", "trois", "quatre", "cinq"]
let  tab = ["un", "deux", "trois", "quatre", "cinq"]

removed = tab1.splice(2)
console.log(tab1)
console.log(removed)

removed = tab.splice(-2)
console.log(tab)
console.log(removed)*/}

// let tab2 = ["ufof","kjfiuf", "Zjkh", "Alknf"]
// console.log(tab2.sort())
// console.log("--------")
// tab2.sort(function(a){
//     console.log(a)
// })

let tabAssoc1 = [];
tabAssoc1["cle1"] = "valeur1";
tabAssoc1["clé2"] = "valeur2";
tabAssoc1["clé3"] = "valeur3";

console.log("tabAssoc1");
for (let cle in tabAssoc1) {
  console.log(cle + " -->" + tabAssoc1[cle]);
}

tabAssoc1["clé2"] = "valeur2bis";
tabAssoc1["clé4"] = "valeur4";

console.log("tabAssoc après modification");
for (let cle in tabAssoc1) {
  console.log(cle + " -->" + tabAssoc1[cle]);
}

console.log(tabAssoc1[0]);
console.log(tabAssoc1.length);