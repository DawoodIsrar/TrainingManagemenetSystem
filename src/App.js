import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "./components/sidebar/Sidebar";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Student from "../src/routers/Student";
import Teacher from "../src/routers/Teacher";

function App() {
  const [token, setToken] = useState();
  const [id, setId] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    const tokenFromStorage = window.sessionStorage.getItem("access-token");
    const idFromStorage = window.sessionStorage.getItem("id");
    const roleFromStorage = window.sessionStorage.getItem("role");

    setId(idFromStorage);
    setToken(tokenFromStorage);
    setRole(roleFromStorage);
  }, [role]);

  if (!token) {
    return <>
    <Router>
      <Routes>
       <Route path="/" element={<Login/>}></Route>
       <Route path='/SignUp' element={<Signup/>}></Route>
      </Routes>
    </Router>
    </>;
  } else {
    if (role === "student") {
      console.log(role);
      return <Student />;
    } else if (role === "admin") {
      return <Teacher />;
    }
  }

  return <Student></Student>;
}

export default App;
