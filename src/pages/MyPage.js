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
        <Grid >
            <Text F_size='50px' margin='120px 0 0 80px'>MyPage</Text>
        </Grid>
        <Grid position='relative' heigh='100%'>
            <Header/>
                <Grid width='1200px' margin='0 auto' is_flex justify_content='space-between' flex_wrap='wrap' > 
                    <Post _onClick={()=>{
                        console.log('상세페이지로 이동 포스트각각 하나씩 줘야하는거아닌가!! 에러남 ')
                        navigate("/detail")
                    }}></Post>
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
        </React.Fragment>
    );
}



export default MyPage; 