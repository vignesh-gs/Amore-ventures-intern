import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
//import { ReactDOM } from "react";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import {Route,Routes} from 'react-router-dom'
import MyForm from "./components/myform";

export default function App() {
  return (
    <>
      <Navbar/> 
      <MyForm/>
      <div className="fn_component_container">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </div>
    </>

  )
}