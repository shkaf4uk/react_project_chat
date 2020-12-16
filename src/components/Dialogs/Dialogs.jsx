import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Massage from './Massage/Massage';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../utils/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";

const Dialogs = (props) => {
    let state = props.dialogPage;
    let dialogElements = state.dialogPage.dialogs.map((el, index) => (
        <DialogItem key={index} id={index} name={el.name}/>));
    let massagesElements = state.dialogPage.massages.map((el, index) => (
        <Massage key={index} id={index} massage={el.massage}/>));

    const addNewMassage = (dataForm) => {
        props.sendMessageText(dataForm.dialog)
        dataForm.dialog = '';
    }

    if (!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>
            <div className={style.massages}>
                <div>{massagesElements}</div>
                <DialogReduxForm onSubmit={addNewMassage} />
            </div>
        </div>
    )
}

let maxLength50 = maxLengthCreator(50);

const DialogsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Write a massage...'} component={Textarea}
                   name={'dialog'} validate={[required, maxLength50]}/>
        </div>
        <button>Send</button>
    </form>
}

const DialogReduxForm = reduxForm({form: 'dialog'})(DialogsForm)

export default Dialogs;