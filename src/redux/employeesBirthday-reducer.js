const SET_ACTIVE_BIRTHDAY_USERS = 'SET_ACTIVE_BIRTHDAY_USERS'
const SORT_ACTIVE_BIRTHDAY_USERS = 'SORT_ACTIVE_BIRTHDAY_USERS'
//const SET_DOB_FORMAT = 'SET_DOB_FORMAT'

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
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];
      let dateCurrent = new Date();
      let monthCurrent = dateCurrent.getMonth();
      let arrMonthsCurrent = []
      let newArrMonths
      months.forEach((elem, index) => {
        months[monthCurrent] !== elem ? arrMonthsCurrent.push(elem) : newArrMonths = months.slice(index).concat(arrMonthsCurrent)       
      })

      state.activeUsersBirthday.sort((a,b) => {
        return new Date(a.dob) - new Date(b.dob);
      })

      newArrMonths.forEach((i) => {
        let month = i;
        let obj = {};
        obj[month] = [];
        state.activeUsersBirthday.forEach((element) => {
          let date = new Date(element.dob)
          if (month === (element.date.getMonth()+1)) {
            obj[month].push(element)
          }
        });
        if (obj[month].length === 0) obj[month] = "No employees"
        state.sortedUsersByAlphabet.push(obj)
      });

      state.activeUsersBirthday.forEach(elem => {
        let date = new Date(elem.dob)
        let day = date.getDate()
        let year = date.getFullYear()
        let index = date.getMonth()
        if (index === 12) index = 0

       //`${day} ${months[index]}, ${year} year`
      })
     
      // months.forEach((i, index) => {
      //   let letter = i;
      //   let obj = {};
      //   obj[letter] = [];
      //   state.users.forEach((element) => {
      //     if (letter === element.firstName[0]) {
      //       obj[letter].push(element)
      //     }
      //   });
      //   if (obj[letter].length === 0) obj[letter] = "No employees"
      //   state.sortedUsersByAlphabet.push(obj)
     // });
      return {
        ...state,
        activeUsersBirthday: [...state.activeUsersBirthday],
        sortedActiveUsersBirthday: [...state.sortedActiveUsersBirthday]
      }
    }
    // case SET_DOB_FORMAT: {
    //   return {
    //     ...state
    //   }
    // }
    default:
      return state;
  }
};


export const setActiveBirthdayUSersAC = (users) => ({ type: SET_ACTIVE_BIRTHDAY_USERS, users });
export const sortActiveBirthdayUsersAC =() => ({type: SORT_ACTIVE_BIRTHDAY_USERS})
//export const setActiveBirthdayUSersAC = (value) => ({ type: SET_DOB_FORMAT, value });

export default employeesBirthdayReducer;
