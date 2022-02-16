//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import Actions
import { actionCreators as diaryActions } from "../redux/modules/diary";
import { actionCreators as userActions } from "../redux/modules/user";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon
import { FiEdit2 } from "react-icons/fi";

// impot Component
import Header from "../components/Header";
import Post from "../components/Post";

//import Actions
import { actionCreators as imageActions } from "../redux/modules/image";

//import axios
import instance from "../shared/Request";


function MyPage() {
    const _diary = useSelector(state => state.diary);
    const _image = useSelector(state => state.image);
    const _user = useSelector(state => state.user);

    console.log(_user);
    
    const is_login = _user.is_login;

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const go_diarywrite = ()=>{
        navigate("/diarywrite")  
    }

    React.useEffect(async() => {
        
        dispatch(diaryActions.getDiary())
        
    },[]);


    return (
        <Grid>
            <Header/>
            <Grid width='1200px' margin='0 auto'>
                <Grid  height='350px' margin='120px 0'> 
                    <Image src='Logo.png' shape='imageBG'/>
                </Grid>
                <Grid margin='0 auto' is_flex justify_content='space-between' flex_wrap='wrap' > 
                    {_diary.list?_diary.list.map((D, idx) => {
                        if(_user.user.nickname === D.nickname){
                            return(
                                <Post key={idx} index={idx} {...D}/>
                                )

                        }
                    }):""}
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



export default MyPage; 