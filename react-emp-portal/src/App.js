import React, {useState} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/student/View";
import Edit from "./components/student/Edit";
import LoginForm from "./LoginForm";
import "./App.css";

function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
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
        
          <div>
            <h2>Welcome, <span>{user.name}</span></h2>
          </div>

          <div className="log">
            <button style={{float: "right", margin: ""}} onClick={Logout}>Logout</button>
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
