import React from 'react';
import styles from "../../Users/user.module.css";

type PaginationType = {
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
}

const Pagination = ({totalUserCount, pageSize, currentPage, onPageChanged}: PaginationType) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map((el, i) => {
                return <span
                    key={i}
                    className={currentPage === el ? styles.selectedPage : ''}
                    onClick={() => {
                        onPageChanged(el)
                    }}> {el} </span>
            })}
        </div>
    );
};

export default Pagination;