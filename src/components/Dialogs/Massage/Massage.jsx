import React from 'react';
import style from '../Dialogs.module.css';
import avatar from '../../../images/photo_2020-10-31_20-36-09.jpg';

const Massage = (props) => {
    return (
        <div className={style.massage}>
            <img src={avatar} alt={'avatar'} />
            {props.massage}
        </div>
    )
}

export default Massage;