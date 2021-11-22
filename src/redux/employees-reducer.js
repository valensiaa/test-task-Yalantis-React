const SET_ACTIVE_USER = "SET_ACTIVE_USER";
const SET_USERS = "SET_USERS";
const SORT_USERS = "SORT_USERS";


let initialState = {
  users: [],
  sortedUsersByAlphabet: [],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER: {
      return {
        ...state,
        users:state.users.map(u => {
          if(u.id === action.userId) {
            return { ...u, radioValue: action.value };
          }
          return u
      })
      };
    }
    case SET_USERS: {     
      return {
        ...state,
        users: action.users
      };
    }
    case SORT_USERS: {
      state.sortedUsersByAlphabet = []
      const alpha = Array.from(Array(26)).map((e, i) => i + 65);
      const alphabet = alpha.map((x) => String.fromCharCode(x));
      alphabet.forEach((i) => {
        let letter = i;
        let obj = {};
        obj[letter] = [];
        state.users.forEach((element) => {
          if (letter === element.firstName[0]) {
            obj[letter].push(element)
          }
        });
        if (obj[letter].length === 0) obj[letter] = "No employees"
        state.sortedUsersByAlphabet.push(obj)
      });
      return {
        ...state,
        sortedUsersByAlphabet: [...state.sortedUsersByAlphabet],
      };
    }
    default:
      return state;
  }
};

export const setRadioActiveAC = (value, userId) => ({type: SET_ACTIVE_USER, value, userId});
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const sortUsersAC = (users) => ({ type: SORT_USERS, users });


export default employeesReducer;
