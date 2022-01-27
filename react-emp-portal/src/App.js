import React, {useState} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/student/View";
import Edit from "./components/student/Edit";
import LoginForm from "./LoginForm";
import "./App.css";

const App = () => {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({email: "", password:""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        email: details.email,
        password: details.password

      });
    } 
    else{
      console.log("Details do not match");
      setError("Details do not match");

    }

  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }
  return (
    <>
      {(user.email !== "") ? (

        <div>
        
          <div className="container">
            <h2><span className="log">Welcome Back</span> <span><button className="log" style={{float: "right", margin: "", fontSize: "20px"}} onClick={Logout}>Logout</button></span></h2>
          </div>
        
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/view/:id" component={View} />
              <Route exact path="/edit/:id" component={Edit} />
            </Switch>
          </BrowserRouter>

        </div>
    ):(
      <div className="App">
        <LoginForm Login={Login} error={error} />
      </div>
    )}
      
    </>
  );
}

export default App;
