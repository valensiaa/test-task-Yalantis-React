import styles from "./EmployeesBirthday.module.css";
import React, { useEffect } from "react";

const EmployeesBirthday = (props) => {
  useEffect(() => {
    props.setActiveBirthdayUSers(props.users);
    props.sortActiveBirthdayUsers();
  }, [props.users]);

  let setDobFormat = (value) => {
    let date = new Date(value);
    let day = date.getDate();
    let year = date.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let index = date.getMonth();
    if (index === 12) index = 0;
    return `${day} ${months[index]}, ${year} year`;
  };

  return (
    <div className={styles.birthdayBlock}>
      <h1>Employees birthday</h1>
      <div className={styles.birthdaysBlock}>
        {props.activeUsersBirthday.length === 0 ? (
          <p>Employees List is empty</p>
        ) : (
          props.sortedActiveUsersBirthday.map((p) =>
            Object.entries(p).map((elem) => (
              <div key={elem.id} className={styles.monthsBlock}>
                <h3>{elem[0]}</h3>
                {typeof elem[1] === "string" ? (
                  <p>{elem[1]}</p>
                ) : (
                  <div className={styles.listUsersBlock}>
                    <ul>
                      {elem[1].sort((a, b) => (a.lastName).localeCompare(b.lastName)).map((u) => (
                        <li key={u.id} className={styles.listUsers}>
                          {u.lastName} {u.firstName} - {setDobFormat(u.dob)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default EmployeesBirthday;
