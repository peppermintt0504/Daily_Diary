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


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    React.useEffect(async() => {
    },[]);

    return (
        <Grid >
            <Header/>
            
            <Grid is_flex flex_direction="column" align-items="center">
                <Grid width="30vw" margin="30px">
                    <Image width="100%" src="https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"/>
                </Grid>
                <Input margin="10px" label="ID" width = "30vw"></Input>
                <Input margin="10px" label="PassWord" width = "30vw"></Input>
                <Button margin="20px" width="15vw" text="LogIn" />
                <Text cursor="pointer" F_color="#3d078cd9" _onClick={()=>{navigate("/signup")}}>회원이 아니신가요??</Text>
            </Grid>
        </Grid>
    );
}

export default Login;