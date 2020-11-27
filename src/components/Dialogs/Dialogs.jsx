import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Massage from './Massage/Massage';
import {changeMassage} from "../../redux/dialogs_reducer";

const Dialogs = (props) => {
    let state = props.dialogPage;
    let newMassage = React.createRef();
    let dialogElements = state.dialogPage.dialogs.map( (el, index) => (<DialogItem key={index} id={index} name={el.name} />));
    let massagesElements = state.dialogPage.massages.map( (el, index) => (<Massage key={index} id={index} massage={el.massage} />))

    let sendMessage = () => {
        props.sendMessageText();
    }

    let changeMessage = () => {
        let text = newMassage.current.value;
        let action = changeMassage(text);
        props.store.dispatch(action);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogElements }
            </div>
            <div className={style.massages}>
                <div>{massagesElements}</div>
                <div><textarea ref={newMassage}
                               value={props.newMessage}
                               onChange={changeMessage} placeholder={'Write a massage...'} /></div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;