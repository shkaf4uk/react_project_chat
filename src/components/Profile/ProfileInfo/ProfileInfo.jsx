import React from 'react';
import s from './ProfileInfo.modele.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://img.theculturetrip.com/768x432/wp-content/uploads/2016/03/suspension-bridge-1149942_1280.jpg'}/>
            </div>
            <div>
                <img src={'https://i.pinimg.com/564x/7a/7e/be/7a7ebe744313282a2bfa30cb154a39cb.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;