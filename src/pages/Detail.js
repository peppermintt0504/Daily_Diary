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
    const _diary = useSelector(state => state.diary.list);
    //console.log(_diary);

    const params = useParams()
    const diary_uid = params.diary_uid

    React.useEffect(async() => {
        if(_diary.length === 0){
            dispatch(diaryActions.getDiary())
        }
    },[]);

    const diary = useSelector((state)=> state.diary.list).reduce((x,v,i) => v.diary_uid ===diary_uid?v:x,"");
    //console.log(diary)


    // console.log(diary)
    const diary_del = () => {
        dispatch(diaryActions.delDiarydata(diary))
        navigate("/")  
        
    }

    const diary_update = () => {
        navigate("/diaryedit/"+params.diary_uid)  
    }

    return(
        <React.Fragment>
            <Header/>
            <Grid  width='1000px' margin='100px auto 0' padding='25px 50px 50px '  B_radius='50px' BG_c='#ffec99' >
                <Text F_size='30px' margin='20px 0 50px' F_color='white' F_weight='600' F_shadow='1px 1px 2px gray'>일기 상세 페이지</Text>

                <Grid BG_c='white' padding= '20px' B_radius='15px' >
                <Grid is_flex justify_content='flex-start' padding='10px 0 ' align_items='end' align_items>
                        <Grid>
                            <Image shape='circle' size="150" src ={diary?diary.image_url:""}/>      
                        </Grid>
                        <Grid padding = '20px 15px' width='80%' >
                            <Grid is_flex justify_content="space-between" align_items>
                                <Text margin='0 10px 0 0'>{diary?diary.user_info.nickname:""}</Text>
                                <Text F_size='16px' margin='0 0 10px 0'>{diary?diary.insert_dt:""}</Text>
                            </Grid>
                            <Text F_size='23px' F_weight='600'>{diary?diary.title:""}</Text>
                        </Grid>
                    </Grid>
                    <Grid Border='1px dotted black' height='200px' B_radius='20px'  padding='20px' margin='0 0 20px 0'>
                        <Text Text F_size='16px' width='100%' height='100px'>{diary?diary.contents:""}</Text>
                    </Grid>
                    <Grid is_flex justify_content='flex-end'>
                        <Button 
                            height='40px' width='65px' margin=' 10px' BG_color='#ffec99' Border='none' B_radius='10px'
                            _onClick={diary_update}>수정
                        </Button>
                        <Button 
                            height='40px' width='65px' BG_color='#ffec99' Border='none' B_radius='10px' margin='0 10px 0 0'
                            _onClick={diary_del}>삭제
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid width='1000px' B_radius='50px' padding='30px' margin = '0 auto' >
                <Grid>
                    <Text F_size='25px' F_color='#ffec99' F_weight='600' margin='0 0 20px' F_shadow='1px 1px 2px gray'>내 일기를 읽은 소감은!</Text>
                    <Grid>
                        <CommentWrite diary_id={diary_uid}/>
                    </Grid>
                    <Grid>
                        <CommentList diary_id={diary_uid}/>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>

    )
}

export default Detail; 

// 귀여운사진...어디 쓸곳이 없을깡....ㅋㅋ
// 'https://item.kakaocdn.net/do/431c1c842860f98b0d0a6b5cc85cfd608f324a0b9c48f77dbce3a43bd11ce785'