// src/todoReducer.js

// État initial : tableau vide de todos
export const initialState = {
  todos: [],
};

// Chaque todo sera un objet : { id: number, text: string }

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todo/add":
      // action.payload = { id, text }
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "todo/delete":
      // action.payload = { id }
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    default:
      return state;
  }
}
