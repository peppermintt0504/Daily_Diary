//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import Components && elements
import Header from "../components/Header";
import { Button, Grid, Input, Image, Text } from "../elements" ;

//import Actions
import { actionCreators as userActions } from "../redux/modules/user";


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const idRef = React.useRef(null);
    const pwdRef = React.useRef(null);

    const [ id, setId ] = React.useState("")
    const [ pwd,setPwd ] = React.useState("");

    const tryLogIn = () =>{
        console.log(idRef.current.value);
        console.log(pwdRef.current.value);
        
    }

    React.useEffect(async() => {
    },[]);

    return (
        <Grid >
            <Header/>
            
            <Grid is_flex flex_direction="column" align-items="center">
                <Grid width="30vw" margin="30px">
                    <Image width="100%" src="https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"/>
                </Grid>
                <Input _ref={idRef} margin="10px" label="ID" width = "30vw"></Input>
                <Input _ref={pwdRef} margin="10px" label="PassWord" width = "30vw"></Input>
                <Button margin="20px" width="15vw" text="LogIn" _onClick={tryLogIn}/>
                <Text cursor="pointer" F_color="#3d078cd9" _onClick={()=>{navigate("/signup")}}>회원이 아니신가요??</Text>
            </Grid>
        </Grid>
    );
}

export default Login;