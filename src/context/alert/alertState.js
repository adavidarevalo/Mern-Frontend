import React, {useReducer} from "react"
import alertContext from "./alertContext"
import alertReducer from "./alertReducer"
import {
  Show_Alert,
  Hide_Alert
} from "../../types/index"

const AlertState = props =>{
  const firstState={
    alert: null
  }
  const [state, dispatch] = useReducer(alertReducer, firstState)
  const showAlert= (msg, category)=>{
    dispatch({
      type: Show_Alert,
      payload: {
        msg,
        category
      }
    })
    setTimeout(() => {
      dispatch({
        type: Hide_Alert
      })
    }, 5000);
  }
  return(
    <alertContext.Provider
    value={{
      alert: state.alert,
      showAlert
    }}
    >
      {props.children}
    </alertContext.Provider>
  )
}

export default AlertState