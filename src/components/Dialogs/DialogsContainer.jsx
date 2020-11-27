import React from 'react';
import {addMassageActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(addMassageActionCreator());
    }

    let changeMessage = (text) => {
        props.updateNewMassageText(text)
    }
    return <Dialogs updateNewMassageText={changeMessage}
                    sendMessageText={sendMessage}
                    dialogPage={state}
                    store={props.store} />
}

export default DialogsContainer;