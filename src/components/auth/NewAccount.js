
import React, {useState, useContext, useEffect} from "react"
import styled from "@emotion/styled"
import alertContext from "../../context/alert/alertContext"
import authContext from "../../context/auth/authContext"
import {Link} from "react-router-dom"
import { keyframes } from "@emotion/react"

const fadeInDown = keyframes`
0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
`
const ContainerDiv = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #009FFF; 
background: -webkit-linear-gradient(to top, #ec2F4B, #009FFF);  
background: linear-gradient(to top, #ec2F4B, #009FFF); 
`
const Container = styled.div`
background: rgba(255, 255, 255, 0.9);
box-shadow: 6px 5px 5px 1px rgb(0 0 0 / 20%);
width: 100%;
max-width: 425px;
max-height: 500px;
border-radius: 10px;
padding: 25px;
animation: ${fadeInDown} 1s both;
form{
  h2{
    text-align: center;
    letter-spacing: -0.5px;
    color: #2a2b2d;
    margin-bottom: 36px;
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
    max-width: 280px;
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
const NewAccount = (props) =>{
  const AlertContext = useContext(alertContext)
  const {alert, showAlert} = AlertContext
  const AuthContext = useContext(authContext)
  const {registerUser, autentification, message} = AuthContext
  const [formContain, changeForm]= useState({
    name:"",
    email: "",
    password:"",
    passConfirm:""
  })
  const handleForm = e=>{
    changeForm({
      ...formContain,
      [e.target.name]: e.target.value
    })
  }
  const handleClick = () =>{
    const {name, email, password} = formContain
    if(formContain.name === "" || formContain.email === "" || formContain.password === "" || formContain.passConfirm === ""  ){
      showAlert("All fields are required", "alert-red")
      return
    }
    if(formContain.password.length < 6){
      showAlert("Min 6 characters", "alert-red")
      return
    }
    if(formContain.password !== formContain.passConfirm){
      showAlert("Passwords are not the same", "alert-red")
      return
    }
    registerUser({
      name,
      email,
      password
    })
  }
  useEffect(()=>{
    if(autentification){
      props.history.push("/project")
    }
    if(message){
      showAlert(message, "alert-red")
    }
    // eslint-disable-next-line
  },[message, autentification, props.history])
  return(
    <ContainerDiv>
      <Container>
        <form method="POST">
          <h2>Create Your Account</h2>
          <div>
          <label>Name</label>
          <input 
          type="text" 
          placeholder="Your Name"
          name="name"
          value={formContain.name}
          onChange={handleForm}
          />
          </div>
          <div>
          <label>Email</label>
          <input 
          type="email" 
          placeholder="Your Email"
          name="email"
          value={formContain.email}
          onChange={handleForm}
          />
          </div>
          <div>
          <label>Password</label>
          <input 
          type="password" 
          placeholder="Your Password"
          name="password"
          value={formContain.password}
          onChange={handleForm}
          />
          </div>
          <div>
          <label>Confirm Password</label>
          <input 
          type="password"
          placeholder="Your Password"
          name="passConfirm"
          value={formContain.passConfirm}
          onChange={handleForm}
          />
          </div>
          <button
          type="button"
          onClick={handleClick}
          >Create Account</button>
          {alert ? (<AlertContainer>{alert.msg}</AlertContainer>):null}
        </form>
        <Link to="/">Log In</Link>
      </Container>
    </ContainerDiv>
  )
}
export default NewAccount

