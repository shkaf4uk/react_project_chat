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

        { portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1);
            setCurrentPageAfterChange(currentPageAfterChange - 10);
            props.onPageChanged(currentPageAfterChange - 10);
        }}>Prev</button> }

        {pages.filter(p => {
           return  p >= leftPortionPageNumber && p <= rightPortionPageNumber
        })
            .map((p) => <span key={p} className={props.currentPage === p ? style.selectedPage : ''}
                                     onClick={(e) => props.onPageChanged(p)}>{p}</span>)}
        { portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1);
                setCurrentPageAfterChange(currentPageAfterChange + 10);
                props.onPageChanged(currentPageAfterChange + 10);
            }}>Next -></button>
        }
    </div>
}

export default Pagination;