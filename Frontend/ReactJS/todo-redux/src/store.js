// src/store.js

export function createStore(reducer) {
  // Initialisation de l'état avec le reducer
  let state = reducer(undefined, { type: "@@INIT" });

  // Liste des fonctions abonnées
  let listeners = [];
  return {
    // Lire l'état actuel
    getState() {
      return state;
    },

    // Envoyer une action
    dispatch(action) {
      // Demander au reducer le nouvel état
      state = reducer(state, action);

      // Prévenir tous les abonnés
      listeners.forEach((listener) => listener());
    },

    // S'abonner aux changements d'état
    subscribe(listener) {
      listeners.push(listener);

      // Fonction de désabonnement
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
  };
}
