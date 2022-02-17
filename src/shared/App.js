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
import Main from "../pages/Main";
import DiaryWrite from "../pages/DiaryWrite";
import DiaryEdit from "../pages/DiaryEdit";
import Detail from "../pages/Detail";
import MyPage from "../pages/MyPage";
import SignInSide from "../pages/Login_new";
import SignUpNew from "../pages/SignUp_New.js";


function App() {



  React.useEffect(async() => {
    

  },[]);


  return (
    <React.Fragment>
      <Routes>
        
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<SignInSide />}/>
        <Route path="/signup" element={<SignUpNew />}/>
        <Route path="/diarywrite" element={<DiaryWrite />}/>
        <Route path="/detail/:diary_uid" element={<Detail />}/>
        <Route path="/mypage" element={<MyPage />}/>
        <Route path="/diaryedit/:diary_uid" element={<DiaryEdit />}/>

      </Routes>
    </React.Fragment>

  );
}

export default App;
