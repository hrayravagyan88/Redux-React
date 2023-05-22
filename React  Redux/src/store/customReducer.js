const defaultState = {
  customers:[]
  } 

  export const customers = (state = defaultState, action)=>{
    switch (action.type) { 
      case "ADD_MANY_CUSTOMERS":
          return {...state,customers:[...state.customers,...action.payload]}
      case "ADD CUSTOMER":
        return {...state,customers: [...state.customers,action.payload]}
      case "DELEETE CUSTOMER":
          return {...state,customers: state.customers.filter(customer => customer.id !== action.payload.id)}  
      default:
        return state
    }
  }