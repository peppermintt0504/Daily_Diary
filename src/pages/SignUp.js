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


    React.useEffect(async() => {
    },[]);

    return (
        <Grid>
            <Header/>
            <Grid is_flex flex_direction="column" align-items="center">
                <Input margin="10px" label="ID" width = "30vw"></Input>
                <Input margin="10px" label="NickName" width = "30vw"></Input>
                <Input margin="10px" label="PassWord" width = "30vw"></Input>
                <Input margin="10px" label="CheckPassWord" width = "30vw"></Input>
                <Button margin="20px" width="15vw" text="Signup" />
            </Grid>
        </Grid>
    )
}

export default SignUp;