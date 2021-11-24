import "./App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeesContainer from "./components/Employees/EmployeesContainer";
import EmployeesBirthdayContainer from "./components/EmployeesBirthday/EmployeesBirthdayContainer";

function App() {
  const [loaded, setLoaded] = useState(false);

  let navigate = useNavigate();
  useEffect(() => {
    navigate( '/employees');
    if (loaded) return;
    setLoaded(true);
  }, [loaded, navigate]);

  return (
    <div className="App">
      <EmployeesContainer />
      <EmployeesBirthdayContainer />
    </div>
  );
}

export default App;
