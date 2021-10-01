import React, {useContext} from "react"
import taskContext from "../../context/tasks/taskContext"
import styled from "@emotion/styled"


const TaskLi = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
align-items: center;
justify-content: space-between;
box-shadow: 3px 2px 4px 1px rgb(0 0 0 / 20%);
padding-inline: 15px;
margin-block: 15px;
border: 1px solid #ddd9d9;
background: #fff;
`
const Complete = styled.button`
border:none;
padding: 3px 7px;
margin-right: 10px;
background: #c6ffc6;
cursor:pointer;
&:hover{
  background: #ffffff;
}
`
const Incomplete = styled.button`
background: #ffb6b6;
border:none;
padding: 3px 7px;
margin-right: 10px;
cursor:pointer;
&:hover{
  background: #ffffff;
}
`
const Edit = styled.button`
background: #0b172a;
border:none;
padding: 6px 14px;
color: white;
margin-right: 10px;
cursor:pointer;
&:hover{
  background: #1c3968;
}
`
const Delete = styled.button`
background: gainsboro;
border:none;
padding: 6px 14px;
cursor:pointer;
&:hover{
  background: #c4c0c0;
}
`


const Task = ({tasks, idproject}) =>{
  const {name}= tasks
  const taskContexts = useContext(taskContext)
  const {deleteTask, getDataProject, actualizartask, selecttask} = taskContexts
  //handleDelete
  const handleDelete = id =>{
    deleteTask(id, tasks.project)
    getDataProject (idproject)
  }
   //handle Change
  const handleChange = tasks => {
    if(tasks.state){
      tasks.state = false
    } else {
      tasks.state = true
    }
    actualizartask(tasks)
    getDataProject (idproject)
  } 
  //handle Select
  const handleSelect = task =>{
    selecttask(task)
  }
  return(
    <TaskLi>
      <p>{name}</p>
      <div>
        {tasks.state
        ? (
          <Complete
          onClick={()=>handleChange(tasks)}
          >Complete</Complete>
        )
        : (
          <Incomplete
          onClick={()=>handleChange(tasks)}
          >Incomplete</Incomplete>
        )
      }
      <Edit
      onClick={()=>handleSelect(tasks)}>Edit</Edit>
      <Delete
      onClick={()=>handleDelete(tasks._id)}
      >Delete</Delete>
      </div>
    </TaskLi>
  )
}
export default Task