const defaultState = {
    cash:0
  }

export const cashReducer = (state = defaultState, action)=>{
    switch (action.type) {
      case "ADD CASH":
        return {...state,cash : state.cash + action.payload}
      case "GET CASH":
          return {...state,cash : state.cash - action.payload}  
      default:
        return state
    }
  }