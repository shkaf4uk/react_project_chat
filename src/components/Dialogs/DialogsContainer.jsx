import React from 'react';
import {addMassageActionCreator} from "../../redux/dialogs_reducer";
import store from "../../redux/redux_store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state,
        dispatch: store.dispatch,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMassageText: (text) => dispatch.updateNewMassageText(text),
        sendMessageText: () => dispatch(addMassageActionCreator()),
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;