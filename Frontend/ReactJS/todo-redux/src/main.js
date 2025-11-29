// src/main.js

import { createStore } from "./store.js";
import { todoReducer } from "./todoReducer.js";

// Création du store avec notre reducer
const store = createStore(todoReducer);

// Récupération des éléments du DOM
const input = document.getElementById("todo-input");
const addButton = document.getElementById("todo-add");
const todoList = document.getElementById("todo-list");

// Petit compteur pour générer des id uniques
let nextId = 1;

// Fonction d'affichage : lit le state et met à jour la liste <ul>
function render() {
  const state = store.getState();

  // On vide la liste
  todoList.innerHTML = "";

  // Pour chaque todo, on crée un <li>
  state.todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    // Bouton de suppression
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";

    // Quand on clique → on dispatch une action "todo/delete"
    deleteBtn.addEventListener("click", () => {
      store.dispatch({
        type: "todo/delete",
        payload: { id: todo.id },
      });
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// On s'abonne au store : à chaque changement d'état → render()
store.subscribe(render);

// Premier affichage (state initial)
render();

// Gestion du bouton "Ajouter"
addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  // On envoie une action "todo/add" avec un payload
  store.dispatch({
    type: "todo/add",
    payload: {
      id: nextId++,
      text,
    },
  });

  // On vide le champ et on remet le focus
  input.value = "";
  input.focus();
});

// Bonus : ajouter avec la touche Enter
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});
