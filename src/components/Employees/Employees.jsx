import styles from "./Employees.module.css";
import axios from "axios";
import React, { useEffect } from "react";

const Employees = (props) => {
  const resultData = async () => {
    await axios
      .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((response) => {
        props.setUsers(response.data);
        props.setNotActiveUser();
        props.sortUsers();
      })
      .catch((err) => console.error(`Error: ${err}`));
  };

  useEffect(() => {
    if (!props.users.length) resultData();
  });

  let onChangeValue = (event) => {
    let booleanValue = event.target.value;
    let userId = event.target.name;
    props.setActiveUser(booleanValue, userId);
    props.sortUsers();
  };

  return (
    <div className={styles.employeesBlock}>
      <h1>Employees</h1>
      <div className={styles.employeesBlockData}>
        {props.sortedUsersByAlphabet.map((p) =>
          Object.entries(p).map((elem) => (
            <div className={styles.usersBlockByLetter}>
              <h2>{elem[0]}</h2>
              {typeof elem[1] === "string" ? (
                <h3>{elem[1]}</h3>
              ) : (
                elem[1].map((u) => (
                  <div key={u.id} className={styles.userBlock}>
                    <h3
                      key={u.id}
                      className={
                        u.radioValue === "true" ? styles.activeUser : ""
                      }
                    >
                      {u.firstName} {u.lastName}
                    </h3>
                    <div className={styles.radioButtons}>
                      <div>
                        <input
                          type="radio"
                          value="false"
                          name={u.id}
                          onChange={onChangeValue}
                          checked={u.radioValue === "false"}
                        />
                        not active
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="true"
                          name={u.id}
                          onChange={onChangeValue}
                          checked={u.radioValue === "true"}
                        />
                        active
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Employees;
