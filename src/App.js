import "./App.css";
import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import * as axios from "axios";

import EmployeesContainer from "./components/Employees/EmployeesContainer";

function App() {

  const [loaded, setLoaded] = useState(false);
  //const [users, setUsers] = useState(0);
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/employees");

    if (loaded) return;
    axios
      .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((response) => console.log(response.data))
      .catch((err) => console.warn("Error message:" + err));

    setLoaded(true);
  }, [loaded, navigate]);

  return (
    <div className="App">
      <EmployeesContainer />
      <div className="birthdayBlock">dob</div>
    </div>
  );
}

export default App;
