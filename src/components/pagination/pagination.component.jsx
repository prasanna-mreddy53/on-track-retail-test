import React from "react";
import Pagination from "react-bootstrap/Pagination";
import createPagination from "./createPagination.component";

const PaginationComponent = ({
  getPageNumber,
  itemsPerPage,
  totalBooks,
  activePage,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const { pagination } = createPagination({
    totalBooks: totalBooks,
    itemsPerPage: itemsPerPage,
    numberOfButtons: 8,
    currentPage: currentPage,
  });

  let pageNumbers = [];
  pagination.map((page) =>
    pageNumbers.push(
      <Pagination.Item
        onClick={() => getPageNumber(page)}
        key={page}
        active={page === activePage}
        href={`/books/${page}`}
      >
        {page}
      </Pagination.Item>
    )
  );

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => prevPage()}
        className={`${pagination[0] === currentPage && "disabled"}`}
      />
      {pageNumbers}
      <Pagination.Next
        onClick={() => nextPage()}
        className={`${pagination.reverse()[0] === currentPage && "disabled"}`}
      ></Pagination.Next>
    </Pagination>
  );
};

export default PaginationComponent;
