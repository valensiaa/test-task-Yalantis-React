import {combineReducers, createStore} from 'redux'
import employeesReducer from './employees-reducer'
import employeesBirthdayReducer from './employeesBirthday-reducer'

let reducers = combineReducers({
   employeesPage: employeesReducer,
   employeesBirthdayPage: employeesBirthdayReducer
})

let store = createStore(reducers)

 export default store