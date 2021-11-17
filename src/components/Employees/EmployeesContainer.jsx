import { connect } from 'react-redux';
import Employees from './Employees'
import {setRadioActiveAC} from '../../redux/employees-reducer'

let mapStateToProps = (state) => {
   console.log(state)
   return {
      users: state.employeesPage.users
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      setActiveUsers:(value) => {
         dispatch(setRadioActiveAC(value))
      }
   }
}

const EmployeesContainer = connect(mapStateToProps, mapDispatchToProps)(Employees)

export default EmployeesContainer