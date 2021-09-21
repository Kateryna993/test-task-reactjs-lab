import React from "react";

const DataTableItem = ({ id, firstName, lastName, email, phone, adress }) => (
  <>
    <td>{id}</td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td>{adress}</td>
  </>
);

export default DataTableItem;
