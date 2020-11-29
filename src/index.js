import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/redux_store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

let rerenderEntriesTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                    <App />
            </Provider>
        </React.StrictMode>
        ,
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