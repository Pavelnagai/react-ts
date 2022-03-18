import React from 'react';
import {Pagination} from "@mui/material";

type PaginationType = {
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
}

const Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged}: PaginationType) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let changeNumberPage = (num: number) => {
        onPageChanged(num)
    }

    return (
        <div>
            <Pagination count={pagesCount} page={currentPage}
                        onChange={(event: any) => changeNumberPage(JSON.parse(event.target.innerText))}
                        siblingCount={4} boundaryCount={2}
            />
        </div>
    );
};

export default Paginator;