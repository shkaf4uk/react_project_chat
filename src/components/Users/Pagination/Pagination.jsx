import React from 'react';
import style from './Pagination.module.css';

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={style.page}>
        <button
            onClick={(e) => {
                let pageNumber = props.currentPage;
                pageNumber === 1 ? pageNumber = 1 : pageNumber--;
                return props.onPageChanged(pageNumber);
            }}> Back
        </button>
        <button
            onClick={(e) => {
                let pageNumber = props.currentPage;
                pageNumber++;
                return props.onPageChanged(pageNumber);
            }}> Next
        </button>
        {pages.map((p, index) => <span key={index} className={props.currentPage === p ? style.selectedPage : ''}
                                       onClick={(e) => {
                                           props.onPageChanged(p)
                                       }}>{p}</span>)}
    </div>
}

export default Pagination;