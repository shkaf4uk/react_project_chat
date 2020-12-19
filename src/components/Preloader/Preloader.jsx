import React from 'react';
import style from "../Users/Users.module.css";
import loader from "../../images/4dc11d17f5292fd463a60aa2bbb41f6a_w200.gif";

const Preloader = (props) => {
    return <div>
        { props.isFetching ? <img className={style.loading} src={loader} alt={''}  /> : null }
    </div>
}

export default Preloader;