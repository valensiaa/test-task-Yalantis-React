import {combineReducers, createStore} from 'redux'
import employeesReducer from './employees-reducer'

let reducers = combineReducers({
   employeesPage: employeesReducer
})

let store = createStore(reducers)

 export default store