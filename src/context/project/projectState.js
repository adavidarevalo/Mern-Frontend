import React, {useReducer} from "react"
import projectContext from "./projectContext"
import projectReducer from "./projectReducer"
import clientUser from "../../config/axios"
import {
  Form_Project,
  Get_Data,
  Add_NewProject,
  Actual_Project,
  Delete_Project,
  Message_Error
} from "../../types"

const ProjectState = props => {
  const firstState = {
    data: [],
    form: false,
    projectContain: null,
    errorMessage: false
  }
  const [state, dispatch] = useReducer(projectReducer, firstState)
  const {data, form, projectContain} = state 
  const showForm = () => {
    dispatch({
      type: Form_Project
    })
  }
  const getData = async() =>{
    try {
      const awswer = await clientUser.get("/api/projects")
      dispatch({
        type: Get_Data,
        payload: awswer.data.project
      }) 
    } catch (error) {
      console.log(error)
    }
  }
  const addNewProject = async(project) =>{
    try {
      const awswer = await clientUser.post("/api/projects", project)
      dispatch({
        type: Add_NewProject,
        payload: awswer.data
      }) 
    } catch (error) {
      console.log(error)
    }
  }
  const actualProject = project => {
    dispatch({
      type: Actual_Project,
      payload: project
    })
  }
  const deleteProject = async(project) =>{
    try {
      await clientUser.delete(`/api/projects/${project}`)
      dispatch({
        type: Delete_Project,
        payload: project
      })
    } catch (error) {
      dispatch({
        type: Message_Error,
        payload: true
      })
      setTimeout(() => {
        dispatch({
          type: Message_Error,
          payload: false
        })
      }, 3000);
    }
  }
  return (
    <projectContext.Provider
    value={{
      form: form,
      data: data,
      projectContain:projectContain,
      errorMessage: state.errorMessage,
      showForm,
      getData,
      addNewProject,
      actualProject,
      deleteProject
    }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState;