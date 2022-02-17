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


function Main() {
    const _diary = useSelector(state => state.diary);
    const _image = useSelector(state => state.image);
    const _user = useSelector(state => state.user);

    const secret = _user.secret;
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    instance.defaults.headers.common["X-AUTH-TOKEN"] = _user.token;


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
            <Grid  height='300px' width='1200px' margin='120px 0 50px'> 
                    <Image src='/img/main1.png' width='100%' shape='imagePost' box_shadow='2px 2px 5px lightgrey' />
                </Grid>
                <Grid margin='0 auto' is_flex justify_content='flex-start' flex_wrap='wrap' > 
                    {_diary.list?_diary.list.map((D, idx) => {
                        if(secret){
                            if(D.is_open){
                                return(
                                    <Post key={idx} index={idx} {...D}/>
                                    )
                            }
                            if(_user.user.nickname === D.nickname){
                                return(
                                    <Post key={idx} index={idx} {...D}/>
                                    )
                            }
                        }
                        else{
                            if(D.is_open){
                                return(
                                    <Post key={idx} index={idx} {...D}/>
                                    )
                            }
                        }
                        
                    }):""}
                </Grid>
            </Grid>
            <Button 
                BG_color='#a5d8ff' Border='none' B_radius='30px' width='50px' height='50px' position='fixed' right='30px' bottom='30px'
                _onClick={go_diarywrite} >
                <FiEdit2 size='30px'/>
            </Button>
        </Grid>

    );
}


export default Main;