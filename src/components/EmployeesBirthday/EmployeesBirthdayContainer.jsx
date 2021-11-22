import { connect } from 'react-redux';
import EmployeesBirthday from './EmployeesBirthday'
import {setActiveBirthdayUSersAC, sortActiveBirthdayUsersAC} from '../../redux/employeesBirthday-reducer'


let mapStateToProps = (state) => {   
   return {
      users: state.employeesPage.users,
      activeUsersBirthday: state.employeesBirthdayPage.activeUsersBirthday,
      sortedActiveUsersBirthday: state.employeesBirthdayPage.sortedActiveUsersBirthday
}}

let mapDispatchToProps = (dispatch) => {

   return {
      setActiveBirthdayUSers:(users) => {
         dispatch(setActiveBirthdayUSersAC(users))
      },
      sortActiveBirthdayUsers:() => {
         dispatch(sortActiveBirthdayUsersAC())
      }
   }
}

const EmployeesBirthdayContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeesBirthday)

export default EmployeesBirthdayContainer