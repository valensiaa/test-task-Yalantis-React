import styles from "./EmployeesBirthday.module.css";
import React, {useEffect} from "react";

const EmployeesBirthday = (props) => {

useEffect(() => {
   props.setActiveBirthdayUSers(props.users)
   props.sortActiveBirthdayUsers()
}, [props.users])

let setDobFormat = (value) => {
   let date = new Date(value)
   let day = date.getDate()
   let year = date.getFullYear()

   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];
   let index = date.getMonth()
   if (index === 12) index = 0
   return `${day} ${months[index]}, ${year} year`
}
console.log(props.activeUsersBirthday)

   return (
       <div className={styles.birthdayBlock}>
          <h1>Employees birthday</h1>
          <div className={styles.birthdaysBlock}>
            {
               props.activeUsersBirthday.length === 0 
               ? "Employees List is empty"
               :  props.activeUsersBirthday.map(u => (
                  <div>
                     <ul key={u.id}>
                        <li className={styles.listUsers}>{u.lastName} {u.firstName} - {setDobFormat(u.dob)}</li>  
                     </ul>               
                  </div>
                  ))
            }
         </div>
      </div>
      )
      
   
}

export default EmployeesBirthday