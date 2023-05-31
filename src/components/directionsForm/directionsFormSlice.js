import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  receivedCategory: 'all',
  receivedCurrency: 'BTC',
  outgoingCategory: 'all',
  outgoingCurrency: null,
};

export const directionsFormSlice = createSlice({
  name: 'selectedDirections',
  initialState,
  reducers: {
    setReceivedCategory: (state, action) => {
      state.receivedCategory = action.payload;
      state.outgoingCategory = 'all';
      state.outgoingCurrency = null;
    },

    setReceivedCurrency: (state, action) => {
      state.receivedCurrency = action.payload;
      state.outgoingCategory = 'all';
      state.outgoingCurrency = null;
    },

    setOutgoingCategory: (state, action) => {
      state.outgoingCategory = action.payload;
    },

    setOutgoingCurrency: (state, action) => {
      state.outgoingCurrency = action.payload;
    }
  }
});


export const {
  setReceivedCategory,
  setReceivedCurrency,
  setOutgoingCategory,
  setOutgoingCurrency
} = directionsFormSlice.actions;

export const selectReceivedCategory = (state) => state.selectedDirections.receivedCategory;
export const selectReceivedCurrency = (state) => state.selectedDirections.receivedCurrency;
export const selectOutgoingCategory = (state) => state.selectedDirections.outgoingCategory;
export const selectOutgoingCurrency = (state) => state.selectedDirections.outgoingCurrency;

export default directionsFormSlice.reducer;
