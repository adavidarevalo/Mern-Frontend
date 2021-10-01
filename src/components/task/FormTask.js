import React, {useContext, useState, useEffect} from "react"
import styled from "@emotion/styled"
import projectContext from "../../context/project/projectContext"
import taskContext from "../../context/tasks/taskContext"


const FormTaskForm = styled.form`
background: #3064b8;
display: flex;
min-height: 150px;
align-items: center;
justify-content: center;
flex-direction: column;
input{
    margin-bottom: 15px;
    width: 90%;
    max-width: 500px;
    padding: 9px 15px;
    outline:none;
}
button{
  margin-bottom: 15px;
  width: 90%;
  max-width: 500px;
  padding: 9px 15px; 
}
`

const FormTask = () =>{
  const [taskName, addTaskName]= useState({
    name:"",
    projectId:"",
    state:"",
    id:""
  })
  const [Error, addError]= useState(false)
  const projectContexts = useContext(projectContext)
  //task Context
  const tasksContext = useContext(taskContext)
  const {addTask, getDataProject, selectTask, actualizartask, selecttask} = tasksContext
  const {projectContain} = projectContexts
  useEffect(()=>{
    if(selectTask === null){
      addTaskName({
        name:"",
        project:"",
      })
    } else {
      addTaskName(selectTask)
    }
  }, [selectTask])

  if(!projectContain) return null;
  const handleInput = e=>{
    addTaskName({
      ...taskName,
      [e.target.name]: e.target.value,
      project: projectContain[0]._id,
    })
  }
  const handleSubmit = () =>{
    if(taskName.taskName===""){
      addError(true)
      return
    } else if(selectTask !== null){
      addTaskName({
        ...taskName,
      })
      actualizartask(taskName)
    } else {
    addTaskName({
      ...taskName
    })
    addTask(taskName)
    addTaskName({
      name: ""
    })
    }
    getDataProject(projectContain[0]._id)
    addError(false)
    selecttask(null)
  }
  return(
    <FormTaskForm method="POST">
      <input
      type="text"
      placeholder="Task Name"
      name="name"
      value={taskName.name}
      onChange={handleInput}
      />
      <button
      type="button"
      onClick={handleSubmit}
      >{(selectTask === null) ? "Add" : "Edit"}</button>
      {Error? <p>Error</p>: null}
    </FormTaskForm>
  )
}
export default FormTask
