import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Massage from './Massage/Massage';

const Dialogs = (props) => {



    let dialogElements = props.dialogs.map( (el, index) => (<DialogItem key={index} id={index} name={el.name} />));
    let massagesElements = props.massages.map( (el, index) => (<Massage key={index} id={index} massage={el.massage} />))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.massages}>
                { massagesElements }
            </div>
        </div>
    )
}

export default Dialogs;