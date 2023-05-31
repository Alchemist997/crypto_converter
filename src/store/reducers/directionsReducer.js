import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

const initialState = {
  categories: {
    all: {
      name: 'Все',
      values: data.directions
    },
    crypto: {
      name: 'Криптовалюты',
      values: { BTC: true, ETH: true, USDTTRC: true }
    },
    banks: {
      name: 'Банки',
      values: { ACRUB: true, SBERRUB: true, TCSBRUB: true }
    },
    cash: {
      name: 'Наличные',
      values: { CASHUSD: true, CASHRUB: true }
    }
    // В values использован обычный объект вместо Set,
    // т.к. Set отображает пустой объект в Redux DevTools
  },

  filter: data.filter.reduce((accumulator, el) => {
    accumulator[el.from.code] = el;
    return accumulator;
  }, {}),
};


export const directionsSlice = createSlice({
  name: 'directions',
  initialState
});

export const selectCategories = (state) => state.directions.categories;
export const selectFilter = (state) => state.directions.filter;

export default directionsSlice.reducer;