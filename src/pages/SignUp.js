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
        <div>dkdks</div>
    )
}

export default SignUp;