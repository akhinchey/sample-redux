import { createStore } from 'redux';
import recipeAppReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


let store = createStore(recipeAppReducer, composeWithDevTools());

export default store;
