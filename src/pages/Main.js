//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import Actions
import { actionCreators as diaryActions } from "../redux/modules/diary";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon
import { FiEdit2 } from "react-icons/fi";

// impot Component
import Header from "../components/Header";
import Post from "../components/Post";




function Temp() {
    const _diary = useSelector(state => state.diary.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(_diary.list)

    const go_diarywrite = ()=>{
        console.log('글작성페이지 이동')
        navigate("/diarywrite")  
    }

    React.useEffect(async() => {
        dispatch(diaryActions.getDiary())
    },[]);

    return (
        <Grid>
            <Header/>
            <Grid width='1200px' margin='0 auto'>
                <Grid  height='300px' margin='120px 0'> 
                    <Text F_size='30px' F_color='#fcc419' F_weight='600' margin='20px auto'>오늘의 일기</Text>
                    <Image src='/img/dog.jpg' shape='imageBG'/>
                </Grid>
                <Grid margin='0 auto' is_flex justify_content='space-between' flex_wrap='wrap' > 
                    {_diary.map((D, idx) => {
                        return(
                            <Post key={idx} {...D}/>
                            )
                    })}
                </Grid>
            </Grid>
            <Button 
                BG_color='#ffec99' Border='none' B_radius='30px' width='50px' height='50px' position='fixed' right='30px' bottom='30px'
                _onClick={go_diarywrite} >
                <FiEdit2 size='30px'/>
            </Button>
        </Grid>

    );
}

export default Temp;