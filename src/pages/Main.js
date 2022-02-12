//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon
import { FiEdit2 } from "react-icons/fi";

// impot Component
import Header from "../components/Header";
import Post from "../components/Post";




function Temp() {
    const navigate = useNavigate();

    const go_diarywrite = ()=>{
        console.log('글작성페이지 이동')
        navigate("/diarywrite")  
    }

    React.useEffect(async() => {
    },[]);

    return (
        <Grid position='relative' heigh='100%'>
            <Header/>
            <Grid width='1200px' height='1000px' margin='0 auto'>
                <Grid  height='300px' BG_c='#dee2e6' margin='100px 0 30px 0'> 
                    <Image src='../img/sun.png' shape='imagePost' width='100%' heigh='100%' ></Image>
                </Grid>
                <Grid margin='0 auto' is_flex justify_content='space-between' flex_wrap='wrap' > 
                    <Post _onClick={()=>{
                        console.log('상세페이지로 이동 포스트각각 하나씩 줘야하는거아닌가!! ')
                        navigate("/detail")
                    }}></Post>
                    <Post></Post>
                    <Post></Post>
                </Grid>
            </Grid>
            <Button 
                BG_color='#ffec99' Border='none' B_radius='30px' 
                width='50px' height='50px' 
                position='fixed' right='30px' bottom='30px'
                // position ='fixed' bottom='30px' right='30px'
                _onClick={go_diarywrite} >
                <FiEdit2 size='30px'/>
            </Button>
        </Grid>

    );
}

export default Temp;