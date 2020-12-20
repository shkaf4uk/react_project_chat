import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/redux_store";
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainApp from "./App";

let rerenderEntriesTree = () => {
    ReactDOM.render(
        <MainApp/>,
        document.getElementById('root')
    );
}

rerenderEntriesTree();

store.subscribe(() => {
    rerenderEntriesTree();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();