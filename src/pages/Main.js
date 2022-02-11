//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon

import Header from "../components/Header";
import Post from "../components/Post";




function Temp() {
    const navigate = useNavigate();
    const page_move = () => {
        console.log('상세페이지로 이동')
        navigate("/detail")
    }

    React.useEffect(async() => {
    },[]);

    return (
        <Grid >
            <Header/>
            <Grid width='1200px' margin='0 auto' _onClick={page_move}>
                <Grid  height='300px' BG_c='#dee2e6' margin='30px 0'> 
                    <Image src='../img/bg1.jpg'></Image>
                </Grid>
                <Grid margin='0 auto' is_flex justify_content='space-between' flex_wrap='wrap' >
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                </Grid>
                <Button 
                    _onClikc={()=>{ 
                        navigate("/write")
                        console.log('글작성페이지 이동') }}>추가
                </Button>
            </Grid>
        </Grid>

    );
}

export default Temp;