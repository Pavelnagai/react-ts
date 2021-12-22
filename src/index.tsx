import reportWebVitals from './reportWebVitals';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ReactDOM from 'react-dom';
import React from "react";
import {store} from "./redux/store-redux";


export let rerenderTree = (state: any) => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={state}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state)
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
