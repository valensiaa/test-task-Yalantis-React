import { connect } from 'react-redux';
import Employees from './Employees'
import {setRadioActiveAC, setUsersAC, sortUsersAC, setNotActiveUsersAC} from '../../redux/employees-reducer'

let mapStateToProps = (state) => {   
   return {
      users: state.employeesPage.users,
      sortedUsersByAlphabet: state.employeesPage.sortedUsersByAlphabet
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
      setActiveUser:(value, id) => {
         dispatch(setRadioActiveAC(value, id))
      },
      sortUsers:() => {
         dispatch(sortUsersAC())
      },
      setNotActiveUser:() => {
         dispatch(setNotActiveUsersAC())
      }
   }
}

const EmployeesContainer = connect(mapStateToProps, mapDispatchToProps)(Employees)

export default EmployeesContainer