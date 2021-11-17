const SET_ACTIVE_USER = 'SET_ACTIVE_USER'

let initialState = {
   users: [
      {id: 1, firstName: 'Valya', lastName: 'Levchenko', dob: "2019-07-13T07:19:20.718Z", radioActive: false},
      {id: 2, firstName: 'Ualya', lastName: 'Levchenko', dob: "2019-07-13T07:19:20.718Z", radioActive: false},
      {id: 3, firstName: 'Balya', lastName: 'Levchenko', dob: "2019-07-13T07:19:20.718Z", radioActive: true},
      {id: 4, firstName: 'Walya', lastName: 'Levchenko', dob: "2019-07-13T07:19:20.718Z", radioActive: true},
      {id: 5, firstName: 'Yalya', lastName: 'Levchenko', dob: "2019-07-13T07:19:20.718Z", radioActive: false}
      ]
}

const employeesReducer = (state = initialState, action) => {
switch (action.type) {
   case SET_ACTIVE_USER: { 
      return {
      ...state,
      radioActive: action.boolean
      }
   }
   default:
       return state
}
}

export const setRadioActiveAC = (value) => ({type: SET_ACTIVE_USER, boolean: value})

export default employeesReducer