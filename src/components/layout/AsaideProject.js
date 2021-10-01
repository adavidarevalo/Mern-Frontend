import React, {useState, useEffect} from "react"
import NewProject from "../project/NewProject"
import ProjectList from "../project/ProjectList"
import styled from "@emotion/styled"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import "./AsaideProject.css"
const AsaideProjectDiv =styled.div`
text-align: center;
h2{
  color: #272727;
  span{
    font-weight: 400;
  }
}
@media (max-width: 800px){
  position: absolute;
  width: 80%;
  max-width: 450px;
  border-radius: 3px;
  top:-1000px;
}
`
function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}


const AsaideProject = ({menu, changeMenu}) =>{
  const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  useEffect(() => {
  if(menu){
    handleOpen()
  } 
  }, [menu])
  const handleOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
     changeMenu(false)
   };

  return(
    <AsaideProjectDiv>
      <h2>MERN<span>Tasks</span></h2>
      <NewProject/>
      <div>
        <h2>Your Projects</h2>
        <ProjectList />
      </div>
      <Modal
        open={open}
        onClose={()=>{
          handleClose()
        }
        }
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>MERN<span>Tasks</span></h2>
          <NewProject/>
          <div>
            <h2>Your Projects</h2>
            <ProjectList/>
          </div>
        </div>
      </Modal>
    </AsaideProjectDiv>
  )
}
export default AsaideProject 


