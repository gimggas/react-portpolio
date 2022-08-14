import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    addCount(state, action) {
      let number = state.findIndex((findId) => {
        return findId.id === action.payload;
      });

      state[number].count++;
    },

    minusCount(state, action) {
      let number = state.findIndex((findId) => {
        return findId.id === action.payload;
      });

      if (state[number].count > 1) state[number].count--;
    },

    addPrice(state, action) {
      let number = state.findIndex((findId) => {
        return findId.id === action.payload;
      });
      state[number].price = parseFloat(state[number].price);
      state[number].add = state[number].price * state[number].count;
    },

    minusPrice(state, action) {
      let number = state.findIndex((findId) => {
        return findId.id === action.payload;
      });
      state[number].price = parseFloat(state[number].price);
      state[number].add = state[number].price * state[number].count;
    },

    sumPrice(state, action) {
      let number = state.findIndex((findId) => {
        return findId.id === action.payload;
      });
      state[number].price = parseFloat(state[number].price);
      state[number].sum += state[number].add;
    },

    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addCount, addItem, minusCount, addPrice, minusPrice, sumPrice } =
  cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
