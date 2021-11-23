const SET_ACTIVE_BIRTHDAY_USERS = 'SET_ACTIVE_BIRTHDAY_USERS'
const SORT_ACTIVE_BIRTHDAY_USERS = 'SORT_ACTIVE_BIRTHDAY_USERS'
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];

let initialState = {
  activeUsersBirthday: [],
  sortedActiveUsersBirthday: []
};

const employeesBirthdayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_BIRTHDAY_USERS: {
      return {
        ...state,
        activeUsersBirthday: action.users.filter(elem => elem.radioValue === 'true')
      }
    }
    case SORT_ACTIVE_BIRTHDAY_USERS: {
      
      let dateCurrent = new Date();
      let monthCurrent = dateCurrent.getMonth();
      let arrMonthsCurrent = []
      let newArrMonths
      months.forEach((elem, index) => {
        months[monthCurrent] !== elem ? arrMonthsCurrent.push(elem) : newArrMonths = months.slice(index).concat(arrMonthsCurrent)       
      })

      state.sortedActiveUsersBirthday = []
      newArrMonths.forEach((month) => {
        let obj = {};
        obj[month] = [];
        state.activeUsersBirthday.sort((a,b) => {
        return new Date(a.dob) - new Date(b.dob);
      }).forEach((element) => {
          let date = new Date(element.dob)
          let monthDobIndex = date.getMonth()
          if (month === months[monthDobIndex]) obj[month].push(element)
          });
        if (obj[month].length === 0) obj[month] = "No employees"   
        state.sortedActiveUsersBirthday.push(obj)
      });    
      return {
        ...state,
        sortedActiveUsersBirthday: [...state.sortedActiveUsersBirthday]
      }
    }
    default:
      return state;
  }
};


export const setActiveBirthdayUSersAC = (users) => ({ type: SET_ACTIVE_BIRTHDAY_USERS, users });
export const sortActiveBirthdayUsersAC =() => ({type: SORT_ACTIVE_BIRTHDAY_USERS})

export default employeesBirthdayReducer;
