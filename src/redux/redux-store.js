import { throttle } from "lodash";
import { combineReducers, createStore } from "redux";
import { loadState, saveState } from "../localStorage";
import employeesReducer from "./employees-reducer";
import employeesBirthdayReducer from "./employeesBirthday-reducer";

const persistedState = loadState();

let reducers = combineReducers({
  employeesPage: employeesReducer,
  employeesBirthdayPage: employeesBirthdayReducer,
});

let store = createStore(reducers, persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      employeesPage: store.getState().employeesPage,
    });
  }, 1000)
);

export default store;
