// On exporte la fonction pour pouvoir l'utiliser dans d'autres fichiers
export function createStore(reducer) {

  // On initialise l'état en appelant le reducer une première fois.
  // state = undefined → le reducer utilisera son état initial.
  // action = { type: "@@INIT" } → action spéciale juste pour démarrer.
  let state = reducer(undefined, { type: "@@INIT" });

  // Tableau qui va contenir toutes les fonctions abonnées (listeners)
  let listeners = [];

  // On renvoie l'objet "store" avec ses 3 méthodes
  return {

    // Permet de lire l'état actuel
    getState() {
      return state;
    },

    // Permet d'envoyer une action pour modifier l'état
    dispatch(action) {
      // Le reducer calcule le nouvel état à partir de l'ancien + action
      state = reducer(state, action);

      // On appelle toutes les fonctions abonnées (par ex. "render")
      listeners.forEach((listener) => listener());
    },

    // Permet d'ajouter une fonction qui sera appelée à chaque changement d'état
    subscribe(listener) {
      // On ajoute la fonction à la liste des écouteurs
      listeners.push(listener);

      // On renvoie une fonction pour se désabonner
      return () => {
        // On filtre pour retirer le listener de la liste
        listeners = listeners.filter((l) => l !== listener);
      };
    },
  };
}
//[ store ] ----> 🔔 ----> listener 1 (met à jour l'écran)
//              ----> listener 2 (sauvegarde dans localStorage)
//              ----> listener 3 (affiche dans la console)
