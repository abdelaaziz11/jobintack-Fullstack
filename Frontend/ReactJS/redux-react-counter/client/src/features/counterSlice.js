import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },

  reducers: {
    increment(state) {
      // GRÂCE À IMMER, on peut écrire du code "mutable"
      state.value++;
    },

    decrement(state) {
      state.value--;
    },

    incrementByAmount(state, action) {
      state.value += action.payload;
    },

    reset(state) {
        state.value = 0;
    },
    double(state, action) {
        state.value *= action.payload;
    },
    divide(state, action) {
        state.value /= action.payload;
    }
  },
});

// Export auto-généré des actions
export const { increment, decrement, incrementByAmount, reset, double, divide } = counterSlice.actions;

// Export du reducer
export default counterSlice.reducer;