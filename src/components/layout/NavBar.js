import React, {useEffect, useContext} from "react"
import authContext from "../../context/auth/authContext"
import styled from "@emotion/styled"
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

const NavbarDiv = styled.div`
animation: ${fadeInDown} 1s both;
background: #0083d3;
display: flex;
align-items: center;
justify-content: space-between;
padding-inline: 25px;
p{
  color:white;
  span{
    font-weight: 500;
  }
}
a{
  color:white;
}
button{
  background: none;
  color: #fff;
  border: none;
  padding: 0px;
  border-bottom: 1px solid #fff;
  &:active,
  &:hover{
    color: #c5c2c2;
  }
}
`
const NavBar = () =>{
  const AuthContext = useContext(authContext)
  const {AuthUser, user, closeUser} = AuthContext
  useEffect(()=>{
    AuthUser()
    // eslint-disable-next-line
  },[])
  return(
    <NavbarDiv>
      {user?<p>Hi <span>{user.name}</span></p> :null}
      <button
      type="button"
      onClick={()=> closeUser()}
      >Log Out</button>
    </NavbarDiv>
  )
}
export default NavBar;