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




function MyPage() {

    const navigate = useNavigate();

    const go_diarywrite = ()=>{
        console.log('글작성페이지 이동')
        navigate("/diarywrite")  
    }

    React.useEffect(async() => {
    },[]);

    return(
        <React.Fragment>
            <Header/>
            <Grid width='1200px' margin='0 auto' >
                <Grid  margin = '150px 0 70px'>
                    <Text F_size='50px'>MyPage</Text>
                </Grid>
                <Grid position='relative' heigh='100%'>
                    <Grid width='1200px' margin='0 auto' is_flex justify_content='space-between' flex_wrap='wrap' > 
                        <Post ></Post>
                    </Grid>
                    <Button BG_color='#a5d8ff' Border='none' B_radius='30px' width='50px' height='50px' position='fixed' right='30px' bottom='30px' font_color='white' box_shadow='2px 2px 3px grey' 
                    _onClick={go_diarywrite} >
                        <FiEdit2 size='30px'/>
                    </Button>
                </Grid>
            </Grid>

        </React.Fragment>
    );
}



export default MyPage; 