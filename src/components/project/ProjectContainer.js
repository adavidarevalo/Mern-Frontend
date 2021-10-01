import React, {useContext} from "react"
import projectContext from "../../context/project/projectContext"
import taskContext from "../../context/tasks/taskContext"
import styled from "@emotion/styled"
const Projectcontainer = styled.button`
display:block;
margin-bottom: 10px;
border: none;
background: none;
font-size: .89rem; 
&:hover{
  text-decoration: underline;
}
`

const ProjectContainer = ({info}) =>{

  const projectContexts = useContext(projectContext)
  const {actualProject} = projectContexts
  const taskContexts = useContext(taskContext)
  const {getDataProject} = taskContexts
  const handleClick = id => {
    actualProject(id)
    getDataProject(id)
  }
  return(
    <Projectcontainer
    onClick={()=>handleClick(info._id)}
    >{info.name}</Projectcontainer>
  )
}
export default ProjectContainer
