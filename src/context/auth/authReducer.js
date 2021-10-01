
import {
  Successful_Registration,
  Register_Error,
  Get_User,
  Login_Successful,
  Login_Error,
  Close_Section
} from "../../types/index"

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type){
    case Successful_Registration:
    case Login_Successful:
      localStorage.setItem("token", action.payload.token)
      return{
        ...state,
        autentification: true,
        message: null,
        charging: false
      }
    case Register_Error: 
    case Login_Error:
    case Close_Section:
      localStorage.removeItem("token")
      return{
        ...state,
        toke: null,
        message: action.payload,
        user: null,
        autentification: null,
        charging: false
      }    
    case Get_User:
      return{
        ...state,
        user: action.payload,
        autentification: true,
        charging: false
      }
    default:
      return state;
  }
}