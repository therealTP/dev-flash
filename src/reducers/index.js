/*
This is the "master reducer" file that sets up entire application state
Imports all other reducers and combines them into one state
Exports state
*/

import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';
import CardsReducer from './reducer_cards';

const rootReducer = combineReducers({
  categories: CategoriesReducer, // val is whatever gets returned from CategoriesReducer fcn
  cardsData: CardsReducer
});

export default rootReducer;
