
import React, {useReducer} from "react"
import taskContext from "./taskContext"
import taskReducer from "./taskReducer"
import clientUser from "../../config/axios"
import {
    Get_DataProject,
    Add_Task,
    Delete_Task,
    Select_Task,
    Atualizar_Task
} from "../../types/index"

const TaskState = props =>{
    const firstState = {
        taskContainer: [],
        selectTask: null
        
    }
    const [state, dispatch] = useReducer(taskReducer, firstState)
    const getDataProject = async(project) =>{
      try {
        const awswer = await clientUser.get("/api/tasks", {params: {project}})
        dispatch({
          type: Get_DataProject,
          payload: awswer.data.task
      })
      } catch (error) {
        console.log("Error 3", error.response)
      }
    }
    const addTask = async (task) => {
      try {
        const awswer = await clientUser.post("/api/tasks", task)
        dispatch({
          type: Add_Task,
          payload: awswer.data.taskContainer
      })
      } catch (error) {
        console.log("Error", error.response)
      }
    }
    //Delete Task
    const deleteTask = async(id, project) =>{
      await clientUser.delete(`/api/tasks/${id}`, {params: {project}})
      try {
        dispatch({
          type: Delete_Task,
          payload: id
        })
      } catch (error) {
        console.log(error)
      }
    }
    //Select Task
    const selecttask = task => {
      console.log("Yes bro")
      dispatch({
        type: Select_Task,
        payload: task
      })
    }
    //Atualizar_Task
    const actualizartask = async(task) =>{
      console.log("task",task)
      console.log("id",task._id)
      console.log("Yes Bro")
      try {
        const awswer = await clientUser.put(`/api/tasks/${task._id}`, task)
        dispatch({
          type:Atualizar_Task,
          payload: awswer.data.task
        })
      } catch (error) {
        console.log(error.response)
      }
    }
    return(
        <taskContext.Provider
        value={{
            taskContainer: state.taskContainer,
            selectTask: state.selectTask,
            getDataProject,
            selecttask,
            addTask,
            deleteTask,
            actualizartask
        }}>
            {props.children}
        </taskContext.Provider>
    )
}
export default TaskState