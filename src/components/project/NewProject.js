import React, {Fragment, useState, useContext} from "react"
import projectContext from "../../context/project/projectContext"
import styled from "@emotion/styled"
const NewProjectButton = styled.button`
width: 80%;
padding: 9px;
border: none;
color: #fff;
background: #009FFF;
border-radius: 3px;
font-size: .9rem;
letter-spacing: 1px;
cursor:pointer;
  &:hover{
    background: #0081ce;
  }
`
const NewProjectForm = styled.form`
input{
  width: 75%;
  padding: 3px 5px;
  margin-bottom: 10px;
  outline: none;
}
botton{
  display: block;
  width: 78%;
  margin: 0 auto;
  padding: 4px;
  color: #fff;
  background: #009FFF;
  border-radius: 3px;
  font-size: .9rem;
  letter-spacing: 1px;
  cursor:pointer;
  text-align: center;
    &:hover{
      background: #0081ce;
    }
}
@media (max-width: 800px){
  display: flex;
  flex-direction: column;
  align-items: center;
}
`
const AlertContainer = styled.p`
text-align: center;
color:red;
` 

const NewProject =()=>{
  const projectContexts = useContext(projectContext)
  const {form, showForm, addNewProject} = projectContexts
  const [project, addProject] = useState({
    name: ""
  })
  const [Error, addError] = useState(false)
  const handleChange = e =>{
    addProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e =>{
    e.preventDefault()
    if(project.name === ""){
      addError(true)
      return
    }
    addError(false)
    addNewProject(project)
    addProject({
      name: ""
    })
  }
  return(
    <Fragment>
      {form?(
      <NewProjectForm
      >
        <input
        type="text"
        placeholder="Title of the New Project"
        name="name"
        value={project.name}
        onChange={handleChange}
        />
        <botton
        onClick={handleSubmit}
        >Add Project</botton>
        {Error&& <AlertContainer>The title is required</AlertContainer>}
      </NewProjectForm> 
      ): (
        <NewProjectButton
        type="button"
        onClick={()=>showForm()}
        >New Project</NewProjectButton>
      )}
    </Fragment>
  )
}
export default NewProject