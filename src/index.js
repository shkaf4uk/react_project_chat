import React from 'react';
import ReactDOM from 'react-dom';
import state, {subscribe} from "./redux/state";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, sendMessage, updateNewMessageText, updateNewPostText} from './redux/state';

let rerenderEntriesTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 sendMessage={sendMessage}
                 updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntriesTree(state);

subscribe(rerenderEntriesTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();