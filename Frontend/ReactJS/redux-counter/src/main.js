// On importe notre fonction createStore (le "restaurant" qui gère l'état)
import { createStore } from "./store.js";

// On importe le reducer (le "chef" qui décide comment l'état change)
import { counterReducer } from "./counterReducer.js";


// On crée le store en lui donnant le reducer
// → Le store sait maintenant comment gérer l'état du compteur
const store = createStore(counterReducer);


// On récupère les éléments du HTML pour les mettre à jour ou écouter les clics
const countSpan = document.getElementById("count-value");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const btnReset = document.getElementById("btn-reset");


// Fonction qui met à jour l'affichage en lisant le state depuis le store
function render() {
  const state = store.getState();     // On récupère l'état actuel
  countSpan.textContent = state.count; // On affiche la valeur du compteur dans le HTML
}


// On s'abonne au store pour que "render" soit appelé à CHAQUE changement d'état
store.subscribe(render);

// On appelle une première fois render() pour afficher la valeur initiale (0)
render();


// Quand on clique sur +1 → on envoie une action au store
btnIncrement.addEventListener("click", () => {
  store.dispatch({ type: "counter/increment" });
});


// Quand on clique sur -1 → on envoie une action au store
btnDecrement.addEventListener("click", () => {
  store.dispatch({ type: "counter/decrement" });
});


// Quand on clique sur Reset → on remet le state à zéro
btnReset.addEventListener("click", () => {
  store.dispatch({ type: "counter/reset" });
});
