import {
  Show_Alert,
  Hide_Alert
} from "../../types/index"

// eslint-disable-next-line
export default (state, action) =>{
  switch(action.type){
    case Show_Alert:
      return{
        alert: action.payload
      }
    case Hide_Alert:
      return{
        alert: null
      }
    default:
      return state;
  }
}