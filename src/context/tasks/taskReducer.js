
import {
    Get_DataProject,
    Add_Task,
    Delete_Task,
    Select_Task,
    Atualizar_Task
} from "../../types/index"
// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case Get_DataProject:
            return{
                ...state,
                taskContainer: action.payload
            }
        case Add_Task: 
            return{
                ...state,
                taskContainer: [...state.taskContainer, action.payload]
            }
        case Delete_Task:
            return{
              ...state,
              taskContainer: state.taskContainer.filter(task=> task._id !== action.payload)
            }
        case Atualizar_Task:
            return{
              ...state,
              taskContainer: state.taskContainer.map(taskInfo=> taskInfo._id === action.payload._id ?action.payload :taskInfo )
            }
        case Select_Task:
            return{
                ...state,
                selectTask: action.payload
            }
        default:
            return state;
    }
}