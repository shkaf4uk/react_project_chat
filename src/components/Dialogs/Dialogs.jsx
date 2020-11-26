import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Massage from './Massage/Massage';

const Dialogs = (props) => {
    let newMassage = React.createRef();

    let sendMessage = () => {
        let text = newMassage.current.value;
        props.sendMessage(text);
    }

    let changeMessage = () => {
        let text = newMassage.current.value;
        props.updateNewMessageText(text);
    }

    let dialogElements = props.dialogs.map( (el, index) => (<DialogItem key={index} id={index} name={el.name} />));
    let massagesElements = props.massages.map( (el, index) => (<Massage key={index} id={index} massage={el.massage} />))
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogElements }
            </div>
            <div className={style.massages}>
                { massagesElements }
                <textarea ref={newMassage} value={props.newMessage} onChange={changeMessage}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;