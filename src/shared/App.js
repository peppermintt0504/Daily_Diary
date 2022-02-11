//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";


//import CSS
import './App.css';

//import Components
import { Button, Grid, Input } from "../elements" 

//import Pages
import Main from "../pages/Main"

function App() {



  React.useEffect(async() => {
    

  },[]);


  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </React.Fragment>

  );
}

export default App;
