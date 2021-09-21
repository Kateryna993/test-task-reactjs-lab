import React from "react";
import DataTableItem from "./DatatableItem";
import "./Datatable.css";
import { FaSortUp, FaSortDown } from "react-icons/fa";

const DataTable = ({
  items,
  sortData,
  sortingDirection,
  getAdditionalInfo,
}) => {
  return (
    <table className="DataTable">
      <thead>
        <tr className="Header, FullWidth">
          <th
            onClick={() => {
              sortData("id");
            }}
          >
            Id
            {sortingDirection ? <FaSortUp /> : <FaSortDown />}
          </th>
          <th
            onClick={() => {
              sortData("firstName");
            }}
          >
            First Name
            {sortingDirection ? <FaSortUp /> : <FaSortDown />}
          </th>
          <th
            onClick={() => {
              sortData("lastName");
            }}
          >
            Last Name
            {sortingDirection ? <FaSortUp /> : <FaSortDown />}
          </th>
          <th
            onClick={() => {
              sortData("email");
            }}
          >
            Email
            {sortingDirection ? <FaSortUp /> : <FaSortDown />}
          </th>
          <th
            onClick={() => {
              sortData("phone");
            }}
          >
            Phone
            {sortingDirection ? <FaSortUp /> : <FaSortDown />}
          </th>
          <th
            onClick={() => {
              sortData("adress");
            }}
          >
            State
            {sortingDirection ? <FaSortUp /> : <FaSortDown />}
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={item.id + item.email}
            style={{ backgroundColor: index % 2 ? "#d2e2f7" : "#f7e7d2" }}
            onClick={() => getAdditionalInfo(item)}
          >
            <DataTableItem
              id={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              phone={item.phone}
              adress={item.adress.state}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
