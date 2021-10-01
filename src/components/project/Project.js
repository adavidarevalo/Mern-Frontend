import React, {useContext, useEffect, useState} from "react"
import AsaideProject from "../layout/AsaideProject"
import NavBar from "../layout/NavBar"
import FormTask from "../task/FormTask"
import TaskList from "../task/TaskList"
import styled from "@emotion/styled"
import authContext from "../../context/auth/authContext"

const ProjectContent = styled.div`
background: #f2f9ff;
min-height: 96.5vh;
max-height: auto;
padding-bottom: 2%;
svg{
  width: 19px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  background: #a0a0a0;
  padding: 11px;
  border-radius: 50px;
}
@media (min-width: 800px){
  svg{
    display:none;
  }
}
`

const ProjectDiv = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;
@media (max-width: 800px){
  grid-template-columns: 1fr;
}
`

const Project = () =>{
  const AuthContext = useContext(authContext)
  const {AuthUser} = AuthContext
  const [menu, changeMenu] = useState(false)
  useEffect(()=>{
    AuthUser()
    // eslint-disable-next-line
  },[])
  const handleClick = () =>{
    changeMenu(true)
  }
  return(
    <ProjectDiv>
      <AsaideProject menu={menu} changeMenu={changeMenu}/>
      <ProjectContent>
        <NavBar/>
      <main>
        <FormTask/>
        <TaskList/>
      </main>
      <svg 
      onClick={handleClick}
      aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
      </ProjectContent>
    </ProjectDiv>
  )
}
export default Project