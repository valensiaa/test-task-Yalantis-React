import { connect } from 'react-redux';
import EmployeesBirthday from './EmployeesBirthday'
import {} from '../../redux/employeesBirthday-reducer'

let mapStateToProps = (state) => {   
   return {
      
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}

const EmployeesBirthdayContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeesBirthday)

export default EmployeesBirthdayContainer