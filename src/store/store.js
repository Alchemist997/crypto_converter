import { configureStore } from '@reduxjs/toolkit';
import directionsReducer from './reducers/directionsReducer';
import selectedDirectionsReducer from './../components/directionsForm/directionsFormSlice';

export const store = configureStore({
  reducer: {
    directions: directionsReducer,
    selectedDirections: selectedDirectionsReducer
  }
});
