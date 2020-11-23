import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Massage = (props) => {
    return (
        <div className={s.massage}>{props.massage}</div>
    )
}


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Mike'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Nasty'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'Alla'},
        {id: 6, name: 'Nikolai'},
    ];

    let massages = [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'Hello'},
        {id: 3, massage: 'Старт!'},
        {id: 4, massage: 'Yo'},
        {id: 5, massage: 'Yo'},
        {id: 6, massage: 'Yo'},
    ];

    let dialogElements = dialogs.map( el => (<DialogItem name={el.name} id={el.id}/>));
    let massagesElements = massages.map( el => (<Massage massage={el.massage} />))

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