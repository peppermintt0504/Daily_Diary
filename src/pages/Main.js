//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import Components
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import Header from "../components/Header";

function Temp() {

    React.useEffect(async() => {
    },[]);

    return (

        <Grid >
            <Header/>
        
        </Grid>

    );
}

export default Temp;