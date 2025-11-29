export const initialState = { 
 count: 0, 
}; 
 
export function counterReducer(state = initialState, action) { 
 switch (action.type) { 
   case "counter/increment": 
     return { count: state.count + 1 }; 
 
   case "counter/decrement": 
     return { count: state.count - 1 }; 
 
   case "counter/reset": 
     return { count: 0 }; 
 
   default: 
     return state; 
 } 
} 