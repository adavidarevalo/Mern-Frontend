
import React, {useReducer} from "react"
import authContext from "./authContext"
import authReducer from "./authReducer"
import clientUser from "../../config/axios"
import tokenAuth from "../../config/tokenAuth"
import {
  Successful_Registration,
  Register_Error,
  Get_User,
  Login_Successful,
  Login_Error,
  Close_Section
} from "../../types/index"

const AuthState = props => {
  const firstState= {
    token: localStorage.getItem("token"),
    autentification: null,
    user: null,
    message: null,
    charging: true
  }
  const [state, dispatch] = useReducer(authReducer, firstState)

  const registerUser = async data =>{
    try {
      const awswer = await clientUser.post("/api/user", data);
      dispatch({
        type: Successful_Registration,
        payload: awswer.data
      })
      AuthUser()
    } catch (error) {
      dispatch({
        type: Register_Error,
        payload: error.response.data.msg
      })
    }
  }
  const AuthUser = async()=>{
    const token = localStorage.getItem("token")
    if(token){
      tokenAuth(token)
    }
    try {
      const awswer = await clientUser.get("/api/auth")
      dispatch({
        type: Get_User,
        payload: awswer.data.user
      })
    } catch (error) {
      dispatch({
        type: Login_Error,
        payload: error.response.data.msg
      })      
    }
  }
  const LogIn = async data =>{
    try {
      const awswer = await clientUser.post("/api/auth", data)
      dispatch({
        type: Login_Successful,
        payload: awswer.data
      })
      AuthUser()
    } catch (error) {
      dispatch({
        type: Login_Error,
        payload: error.response.data.msg
      })      
    }
  }
  const closeUser = () =>{
    dispatch({
      type: Close_Section
    })
  }
  return(
    <authContext.Provider
    value={{
      token: state.token,
      autentification: state.autentification,
      user: state.user,
      message: state.message,
      charging: state.charging,
      registerUser,
      LogIn,
      AuthUser,
      closeUser
    }}
    >
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState