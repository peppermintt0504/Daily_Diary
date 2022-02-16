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
    const _diary = useSelector(state => state.diary.list);
    const _image = useSelector(state => state.image);
    const _user = useSelector(state => state.user);

    console.log(_diary);
    
    const is_login = _user.is_login;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    instance.defaults.headers.common["X-AUTH-TOKEN"] = _user.token;
    // const temp_data ={
        
    //         emotion:"웃는표정",
    //         tag:"테그1",
    //         imageUrlList :[
    //             {"imageUrl":"asdfsadf"},
    //             {"imageUrl":"asdfsa3df"}
    //         ],
    //         title:"제목",
    //         content:"내용",
    //         is_open:"true"
        
    // }
    // const temp_data ={
    //     diaryId : "5",
    //     comment : "hello",

    // }

    // if(_user.is_login){

    //     instance.delete('/api/diary/5',{diaryId : 5}).then(res => console.log("post :",res));
    //     instance.get('/api/comment/5',{diaryId : "5",}).then(res => console.log("get :",res));
    // }

    const go_diarywrite = ()=>{
        navigate("/diarywrite")  
    }

    React.useEffect(async() => {

        if(_diary.length === 0){
            dispatch(diaryActions.getDiary())
        }
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
                            <Post key={idx+D.user_info.nickname} index={idx} {...D}/>
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


export default Main;