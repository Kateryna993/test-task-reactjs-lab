import React, { useState, useEffect } from "react";
import axios from "axios";
import Datatable from "./datatable/datatable.jsx";

export default function App() {
  const [data, setData] = useState([]);
  // const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json"
      )
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "State",
        accessor: "adress.state",
      },
    ],
    []
  );

  return (
    <div className="App">
      <div>Datatable here</div>
      <Datatable columns={columns} data={data} />
    </div>
  );
}
