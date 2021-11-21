import {combineReducers, createStore} from 'redux'
import employeesReducer from './employees-reducer'

let reducers = combineReducers({
   employeesPage: employeesReducer,
   //employeesBirthdayPage: employeesBirthdayReducer
})

let store = createStore(reducers)

 export default store