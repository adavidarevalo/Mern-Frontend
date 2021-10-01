import React, {useContext, useEffect} from "react"
import Task from "./Task"
import styled from "@emotion/styled"
import projectContext from "../../context/project/projectContext"
import taskContext from "../../context/tasks/taskContext"
import alertContext from "../../context/alert/alertContext"

const TaskListDiv = styled.div`
width: 90%;
max-width: 750px;
margin: 0 auto;
margin-top: 30px;
h2{
  text-align: center;
}
ul{
  list-style: none;
}
`

const TaskListH2 = styled.h2`
padding-left: 2%;
`
const DeleteProject = styled.button`
border:none;
background: #efeeeeed;
padding: 12px 17px;
&:hover{
  background: #c4c0c0;
}
`


const TaskList = ()=>{
  const projectContexts = useContext(projectContext)
  const {projectContain, deleteProject, errorMessage} = projectContexts
  const AlertContext = useContext(alertContext)
  const {alert, showAlert} = AlertContext
  const taskContexts = useContext(taskContext)
  const {taskContainer} = taskContexts
  useEffect(()=>{
    showAlert("There was a Error", "error-red")
    // eslint-disable-next-line
  },[errorMessage])
  if(!projectContain) return <TaskListH2>Select a Project</TaskListH2>
  const TaskInfo = [...taskContainer]
  const deleteButton = () => {
    deleteProject(projectContain[0]._id)
  }
  return(
    <TaskListDiv>
      <h2>Project: <span>{projectContain[0].name}</span></h2>
      {errorMessage? (<p>{alert.msg}</p>): null}
      <ul>
        {TaskInfo === 0 
        ? <il>There aren`t Task</il>
      :
      TaskInfo.map(tasks => (
        <Task tasks={tasks} idproject={projectContain[0]._id} key={tasks._id} className="TaskList"/>
      ))
       }
      </ul>
      <DeleteProject 
        onClick={deleteButton}
      >Delete Project &times;</DeleteProject >
    </TaskListDiv>
  )
}
export default TaskList;