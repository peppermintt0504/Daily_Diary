//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import Components && elements
import Header from "../components/Header";
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Actions
import { actionCreators as userActions } from "../redux/modules/user";

//import API
import instance from "../shared/Request"
import axios from "axios";


function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const idRef = React.useRef(null);
    const nickRef = React.useRef(null);
    const pwdRef = React.useRef(null);
    const pwdCheckRef = React.useRef(null);

    const [id,setId] = React.useState("");
    const [nick,setNick] = React.useState("");
    const [pwd,setPwd] = React.useState("");


    const sendData = () =>{

        const user_data = {
            username : idRef.current.value,
            password : pwdRef.current.value,
            nickname : nickRef.current.value,
            user_profile : "https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211010_208%2F1633837607425u4lqM_JPEG%2FO1CN01VExWw01cXsmQSROKS_2034743611.jpg&type=sc960_832",

        }

        if(pwdRef.current.value !== pwdCheckRef.current.value){
            console.log("plz recheck your password...");
            return;
        }else{
            instance.defaults.headers.common["X-AUTH-TOKEN"] = "";
            instance.post('/api/signup',user_data)
            .then((res) => {
                window.alert("회원가입이 완료되었습니다.")
                console.log(res);
                navigate("/login");
            })
            .catch((err,res) => {
                console.log(err)
            });
        }
        

        
    }

    const pwdCheck = () =>{
        if(pwdRef.current.value !== pwdCheckRef.current.value){
            console.log("plz recheck your password...");
        }else{
            console.log("currect pwd...");
        }
    }


    React.useEffect(async() => {
    },[]);

    return (
        <Grid>
            <Header/>
            <Grid is_flex flex_direction="column" align-items="center">

                <Grid justify_content="center" is_flex align-items="center">
                <Input _ref={idRef} margin="10px" label="ID" width = "25vw"></Input>
                <Button margin="15px 0 0 0" text="중복체크" width="5vw" height="50px" _onClick={pwdCheck}/>
                </Grid>
                
                <Input _ref={nickRef} margin="10px" label="NickName" width = "30vw"></Input>
                <Input _ref={pwdRef} type='password' margin="10px" label="PassWord" width = "30vw"></Input>
                <Input _ref={pwdCheckRef} type='password' margin="10px" label="CheckPassWord" width = "30vw"></Input>
                <Button margin="20px" width="15vw" text="Signup" _onClick={sendData} />
            </Grid>
        </Grid>
    )
}

export default SignUp;