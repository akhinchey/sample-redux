import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from "./store";
import RecipeApp from './recipe-app';

ReactDOM.render(
    <Provider store={store}>
        <RecipeApp />
    </Provider>,
    document.getElementById('root')
);
