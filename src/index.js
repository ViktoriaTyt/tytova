import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from "./StoreContext";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
          <App />  , document.getElementById('root'));
        </StoreContext.Provider>
    )
};


rerenderEntireTree(store.getState());
let state = store.getState();
store.subscribe(() => (rerenderEntireTree(state)));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
