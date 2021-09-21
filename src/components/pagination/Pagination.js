import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination({
  dataItemsPerPage,
  totalDataItems,
  paginate,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDataItems / dataItemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {totalDataItems > 0 && (
        <ul className={styles.pagination}>
          {pageNumbers.map((number) => (
            <li className={styles.paginationItem} key={number}>
              <a
                href="!#"
                className={styles.pageLink}
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
