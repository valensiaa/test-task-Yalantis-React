import React from "react";
import styles from "./Employees.module.css";

const Employees = (props) => {
  let onChangeValue = (event) => {
    let booleanValue = event.target.value;
    props.setActiveUsers(booleanValue);
  };

  return (
    <div>
      <div className={styles.usersNameBlock}>
        <h1>Employees</h1>
        <div className={styles.userBlock}>
          <div className={styles.alphabetBlock}>A</div>
          <h2>
            {props.users[0].firstName} {props.users[0].lastName}
          </h2>
          <div onChange={onChangeValue} className={styles.radioButtons}>
            <div>
              <input type="radio" value="false" name="boolean" />
              <label for="contactChoice1">not active</label>
            </div>
            <div>
              <input type="radio" value="true" name="boolean" />
              <label for="contactChoice1">active</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Employees;
