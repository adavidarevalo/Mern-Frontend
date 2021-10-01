import {
  Form_Project,
  Get_Data,
  Add_NewProject,
  Actual_Project,
  Delete_Project,
  Message_Error
} from "../../types"

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case Form_Project:
      return {
        ...state,
        form: true
      }
    case Get_Data:
      return {
        ...state,
        data: action.payload
      }
    case Add_NewProject: 
      return{
        ...state,
        data: [action.payload, ...state.data],
        form: false
      }
    case Actual_Project:
      return{
        ...state,
        projectContain: state.data.filter(project => project._id === action.payload)
      }
    case Delete_Project:
      return{
        ...state,
        data: state.data.filter(project => project._id !== action.payload),
        projectContain: null
      }
    case Message_Error:
      return({
        ...state,
        errorMessage: action.payload
      })
    default:
      return state;
  }
};


