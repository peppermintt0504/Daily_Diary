//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon

import CommentWrite from "../components/CommentWrite.js";
import CommentList from "../components/CommentList";
import Header from "../components/Header";




function Detail() {
    return(
        <React.Fragment>
            <Header/>
            <Grid  width='1000px' margin='100px auto 0' padding='25px 50px 50px '  B_radius='50px' BG_c='#ffec99' >
                <Text F_size='30px' margin='20px 0 50px' F_color='white' F_weight='600' F_shadow='1px 1px 2px gray'>일기 상세 페이지</Text>

                <Grid BG_c='white' padding= '20px' B_radius='15px' >
                    <Grid is_flex justify_content='flex-start' padding='10px 0 ' align_items='end'>
                        <Image shape='circle' size="150" src ='https://item.kakaocdn.net/do/431c1c842860f98b0d0a6b5cc85cfd608f324a0b9c48f77dbce3a43bd11ce785'/>      
                        <Text F_size='16px' margin='0 0 10px 0'>2022-02-12</Text>
                    </Grid>
                    <Grid Border='1px dotted black' height='200px' B_radius='20px'  padding='20px' margin='0 0 20px 0'>
                        <Text Text F_size='16px' width='100%' height='100px'>다이어리 내용 오늘 하루도 고생하셨습니다 으아! ㅋㅋㅋㅋㅋㅋ오늘 하루도 고생하셨습니다 으아! ㅋㅋㅋㅋㅋㅋ오늘 하루도 고생하셨습니다 으아! ㅋㅋㅋㅋㅋㅋ오늘 하루도 고생하셨습니다 으아! ㅋㅋㅋㅋㅋㅋ오늘 하루도 고생하셨습니다 으아! ㅋㅋㅋㅋㅋㅋ  </Text>
                    </Grid>
                    <Grid is_flex justify_content='flex-end'>
                        <Button 
                            height='40px' width='65px' margin=' 10px' BG_color='#ffec99' Border='none' B_radius='10px'>수정
                        </Button>
                        <Button 
                            height='40px' width='65px' BG_color='#ffec99' Border='none' B_radius='10px' margin='0 10px 0 0'>삭제
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid width='1000px' B_radius='50px' padding='30px' margin = '0 auto' >
                <Grid>
                    <Text F_size='25px' F_color='#ffec99' F_weight='600' margin='0 0 20px' F_shadow='1px 1px 2px gray'>내 일기를 읽은 소감은!</Text>
                    <Grid>
                        <CommentWrite/>
                    </Grid>
                    <Grid>
                        <CommentList/>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>

    )
}

export default Detail; 