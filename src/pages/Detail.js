//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router-dom';
import { Route, Routes, useNavigate } from "react-router-dom";

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Actions
import { actionCreators as diaryActions } from "../redux/modules/diary";

//component
import CommentWrite from "../components/CommentWrite.js";
import CommentList from "../components/CommentList";
import Header from "../components/Header";




function Detail(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const _diary = useSelector(state => state.diary);
    
    const params = useParams()
    const diary_uid = params.diary_uid
    
    // console.log(_diary);
    // console.log(_diary.list);
    // console.log(diary_uid)
    
    React.useEffect(async() => {
        dispatch(diaryActions.getDiary())
        
    },[]);

    const diary = _diary.list.reduce((x,v,i) => {
        return v.id === parseInt(diary_uid)?v:x},"");
    console.log(diary);

    const diary_del = () => {
        dispatch(diaryActions.delDiarydata(diary.id))
        navigate("/")  
    }

    const diary_update = () => {
        navigate("/diaryedit/"+params.diary_uid)  
    }
    return(
        <React.Fragment>
            <Header/>
            <Text width='1200px' margin='150px auto 0' F_size='35px' >일기 상세페이지</Text>
            <Grid box_shadow="1px 4px 5px 1px #80808080" Border='1px solid #00000085' width='1000px' height='600px' margin=' 80px auto' padding='10px' is_flex flex_wrap='nowrap' >
                <Image shape='imagePost'width='495px' src={diary?diary.imageUrls[0].imageUrl:""}></Image>
                <Grid  width='495px' height='100%' >
                    <Grid padding='10px 10px 0' is_flex align_items='flex-start'>
                        <Grid width='100%' is_flex justify_content='space-between' align_items='center'>
                            <Grid width='50%' is_flex > 
                                <Image width='50%' shape='circle' size='40' src={`/emozi/${diary?diary.emotion:""}.jpeg`}></Image>
                                <Text width='50%' F_weight='600'>{diary?diary.emotion:""}</Text>
                            </Grid>
                            <Text width='50%' is_flex justify_content='flex-end'>{diary?diary.createdAt:""}</Text>
                        </Grid>
                    </Grid>
                    <Grid width='495px' is_flex flex_direction='column' justify_content='center' align_items='center' padding='20px 0'>
                        <Text margin='0 0 10px' F_size='18px' F_align='center' >{diary?diary.nickname : ""}의 오늘 일기</Text>
                        <Image shape='circle' size='150' src={diary?diary.user_profile:""}></Image>
                    </Grid>
                    <Grid  height='230px' padding='0 30px'>
                        <Text F_size='20px' F_weight='600' B_bottom='1px solid gray' padding='10px'>{diary?diary.title:""}</Text>
                        <Text padding ='25px 10px 0'>{diary?diary.content:""}</Text>
                    </Grid>
                    <Grid is_flex justify_content='center' > 
                        <Button height='40px' width='65px' margin=' 10px' BG_color='#e9ecef' Border='none' B_radius='10px'
                            _onClick={diary_update}>수정
                        </Button>
                        <Button 
                            height='40px' width='65px' BG_color='#e9ecef' Border='none' B_radius='10px' margin='0 10px 0 0'
                            _onClick={diary_del}>삭제
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Grid width='1000px' margin = '0 auto 100px' >
                    <Grid BG_c='#e9ecef' padding='20px'>
                        <Text F_size='25px' F_color='#gray' F_weight='600' margin='0 0 20px' F_shadow='1px 1px 2px gray' >내 일기를 읽은 소감은!</Text>
                        <Grid BG_c='#e9ecef'>
                            <CommentWrite diary_id={diary_uid}/>
                        </Grid>
                        <Grid>
                            <CommentList diary_id={diary_uid}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>

    )
}

export default Detail; 

// 귀여운사진...어디 쓸곳이 없을깡....ㅋㅋ
// 'https://item.kakaocdn.net/do/431c1c842860f98b0d0a6b5cc85cfd608f324a0b9c48f77dbce3a43bd11ce785'