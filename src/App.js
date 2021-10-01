import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./components/auth/Login"
import NewAccount from "./components/auth/NewAccount";
import Project from "./components/project/Project"
import ProjectState from "./context/project/projectState.js"
import TaskState from "./context/tasks/taskState"
import AlertState from "./context/alert/alertState"
import AuthState from "./context/auth/authState"
import tokenAuth from "./config/tokenAuth"
import PrivateRoute from "./routes/PrivateRoute"
require("dotenv").config()

const token = localStorage.getItem("token")
if(token){
  tokenAuth(token)
}

function App() {
  return (
    <ProjectState>
      <TaskState>
      <AlertState>
      <AuthState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/new-account" component={NewAccount}/>
          <PrivateRoute exact path="/project" component={Project}/>
        </Switch>
      </Router>
      </AuthState>
      </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;

