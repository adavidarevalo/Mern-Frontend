import React,{useState, useContext, useEffect} from "react"
import alertContext from "../../context/alert/alertContext"
import authContext from "../../context/auth/authContext"
import styled from "@emotion/styled"
import {Link }from "react-router-dom"
const LoginDiv = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #009FFF; 
background: -webkit-linear-gradient(to top, #ec2F4B, #009FFF);  
background: linear-gradient(to top, #ec2F4B, #009FFF); 
form{
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 6px 5px 5px 1px rgb(0 0 0 / 20%);
  padding:25px;
  border-radius: 5px;
  width: 100%;
  max-width: 325px;
  max-height: 500px;
  h2{
    text-align: center;
    margin-bottom: 30px;
    margin-top: 5px;
    letter-spacing: 2px;
    color: #2a2b2d;
  }
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    label{
      max-width: 100px;
      font-weight: 500;
      color: #2a2b2d;
    }
    input{
    width: 100%;
    max-width: 230px;
    padding: 6px;
    outline: none;
    }
  }
button{
    width: 100%;
    padding: 10px;
    margin-top: 25px;
    margin-bottom: 10px;
    color: #fff;
    background: #009FFF;
    border: none;
    border-radius: 2px;
    cursor:pointer;
    &:hover{
      background: #0081ce;
    }
    }
}
a{
  text-decoration: none;
  color: black;
  &:hover{
    text-decoration: underline;
  }
}
@media (max-width: 420px){
  form{
    div{
      flex-wrap: wrap;
    }
  }
}
`
const AlertContainer = styled.p`
text-align: center;
color:red;
`
const Login = (props) =>{
  const AlertContext = useContext(alertContext)
  const {alert, showAlert} = AlertContext
    const AuthContext = useContext(authContext)
  const {LogIn, autentification, message} = AuthContext
  useEffect(()=>{
    if(autentification){
      props.history.push("/project")
    }
    if(message){
      showAlert(message, "alert-red")
    }
    // eslint-disable-next-line
  },[message, autentification, props.history])
  const [logIn, addLogIn] = useState({
    email: "",
    password:""
  })
  const {email, password} = logIn
  const handleChange = e =>{
    addLogIn({
      ...logIn,
      [e.target.name]: e.target.value
    })
  }
  const handleClick = () =>{
    if(email===""||password===""){
      showAlert("All fields are required", "error-red")
      return
    }
    LogIn({email, password})
  }
  return(
    <LoginDiv>
      <form method="POST">
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input
          type= "email"
          placeholder="Your Email"
          name="email"
          value={email}
          onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
          type= "password"
          placeholder="Your Password"
          name="password"
          value={password}
          onChange={handleChange}
          />
        </div>
        <button
        type="button"
        onClick={handleClick}
        >Log In</button>
        {alert ? (<AlertContainer>{alert.msg}</AlertContainer>):null}
        <Link to="/New-Account">Create Account</Link>
      </form>
    </LoginDiv>
  )
}
export default Login