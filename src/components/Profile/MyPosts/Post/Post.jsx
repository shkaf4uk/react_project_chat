import React from 'react';
import style from './Post.module.css';

const Post = ({massage, likesCount, profile}) => {
    return (
        <div className={style.item}>
            <img src={profile ? profile.photos.small : ''} alt={''}/>
            <div className={style.item__massage}>
                <span>{`${massage}`}</span>
            </div>
            <div>
                <span>Like {likesCount}</span>
            </div>
        </div>
    )
}

export default Post;