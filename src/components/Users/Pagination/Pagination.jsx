import React, {useState} from 'react';
import style from './Pagination.module.css';

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let [currentPageAfterChange, setCurrentPageAfterChange] = useState(props.currentPage)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return <div className={style.page}>
        { portionNumber > 1 && <button className={style.button__back} onClick={() => {
            setPortionNumber(portionNumber - 1);
            setCurrentPageAfterChange(currentPageAfterChange - 10);
            props.onPageChanged(currentPageAfterChange - 10);
        }}><span>Back</span></button> }

        <div className={style.spanPage}>
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, index) => <div key={index} className={style.div_span}>
                    <span key={p} className={props.currentPage === p ? style.selectedPage : '' }
                                       onClick={(e) => props.onPageChanged(p)}>{p}</span>
                </div>)}
        </div>

        { portionCount > portionNumber &&
            <button className={style.button__next} onClick={() => {
                setPortionNumber(portionNumber + 1);
                setCurrentPageAfterChange(currentPageAfterChange + 10);
                props.onPageChanged(currentPageAfterChange + 10);
            }}><span>Next</span></button>}
    </div>
}

export default Pagination;