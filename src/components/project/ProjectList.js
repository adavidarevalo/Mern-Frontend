import React, {useContext, useEffect} from "react"
import ProjectContainer from "./ProjectContainer"
import projectContext from "../../context/project/projectContext"
import styled from "@emotion/styled"
const ProjectListUl = styled.ul`
padding: 0px 15px;
`
const ProjectList = () =>{
  const projectContexts = useContext(projectContext)
  const {data, getData} = projectContexts
  useEffect(()=>{
    getData()
    // eslint-disable-next-line
  }, [])

  if(data.length === 0) return <p>Insert a new project</p>;

  return(
    <ProjectListUl>
      {data.map(info=>(
        <ProjectContainer  info={info} key={info._id}/>
      ))}
    </ProjectListUl>
  )
}
export default ProjectList