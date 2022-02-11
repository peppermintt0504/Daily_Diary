//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import Components && elements
import Header from "../components/Header";
import { Button, Grid, Input, Image, Text } from "../elements" 

//import API
import {RESP} from "../shared/tempAPI"


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
        console.log(idRef.current.value)
        console.log(nickRef.current.value)
        console.log(pwdRef.current.value)
        console.log(pwdCheckRef.current.value)

        

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
                <Input _ref={pwdRef} margin="10px" label="PassWord" width = "30vw"></Input>
                <Input _ref={pwdCheckRef} margin="10px" label="CheckPassWord" width = "30vw"></Input>
                <Button margin="20px" width="15vw" text="Signup" _onClick={sendData} />
            </Grid>
        </Grid>
    )
}

export default SignUp;