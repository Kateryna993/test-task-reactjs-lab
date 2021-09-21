import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "./components/container/Container.jsx";
import DropdownFilter from "./components/dropdownFilter/DropdownFilter.jsx";
import Datatable from "./components/datatable/Datatable.jsx";
import AdditionalContactInfo from "./components/additionaContactInfo/AdditionalContactInfo.jsx";
import Pagination from "./components/pagination/Pagination";
import styles from "./App.module.css";

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataItemsPerPage] = useState(20);
  const [sortingDirection, setSortingDirection] = useState(true);
  const [detailedInfoRow, setDetailedInfoRow] = useState("");
  const [value, setValue] = useState(null);
  // const [countryState, setCountryState] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json"
      );

      setData(res.data);
    };

    getData();
  }, []);

  const searchFilter = (rows) => {
    return rows.filter((row) => row.firstName.indexOf(query) > -1);
  };

  const sortData = (field) => {
    // console.log(field);
    const providedData = data.concat();
    let sortedData;
    // console.log(providedData[0][field]);
    // console.log(data.concat());
    sortingDirection
      ? (sortedData = providedData.sort((a, b) => {
          return a[field] > b[field] ? 1 : -1;
        }))
      : (sortedData = providedData.reverse((a, b) => {
          return a[field] > b[field] ? 1 : -1;
        }));

    setData(sortedData);
    setSortingDirection(!sortingDirection);
    console.log(!sortingDirection);
  };

  const getAdditionalInfo = (row) => {
    // console.log(row);

    setDetailedInfoRow(row);
  };

  const lastDataItemIndex = currentPage * dataItemsPerPage;
  const firstDataItemIndex = lastDataItemIndex - dataItemsPerPage;
  const currentDataItem = data.slice(firstDataItemIndex, lastDataItemIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  // console.log(data[0].adress);

  return (
    <Container className={styles.mainContiner}>
      <div className={styles.filtersElemContainer}>
        <div className={styles.searchContainer}>
          <label className={styles.searchLabel}>Search by name:</label>

          <input
            type="text"
            placeholder="Enter name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div style={{ width: 200 }}>
          <DropdownFilter
            options={data}
            prompt="Filter by state"
            value={value}
            onChange={(val) => setValue(val)}
          />
        </div>
      </div>
      <Datatable
        items={searchFilter(currentDataItem)}
        sortData={sortData}
        sortingDirection={sortingDirection}
        getAdditionalInfo={getAdditionalInfo}
      />

      <div className={styles.paginationContainer}>
        <button
          className={styles.paginationBtn}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <Pagination
          dataItemsPerPage={dataItemsPerPage}
          totalDataItems={data.length}
          paginate={paginate}
        />
        <button
          className={styles.paginationBtn}
          onClick={nextPage}
          disabled={currentPage > 5}
        >
          Next
        </button>
      </div>
      <AdditionalContactInfo detailedItemData={detailedInfoRow} />
    </Container>
  );
}
