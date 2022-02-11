//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import Components
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import Header from "../components/Header";

function Temp() {

    React.useEffect(async() => {
    },[]);

    return (

        <Grid >
            <Header/>
            <Grid width="1000px" heght='100%' margin="30px" border='1px solid black'>
                <Grid is_flex justify_content="space-between" BG_c='#e9ecef' height='60px' padding='10px 0 10px 25px' >
                    <Grid is_flex >
                        <BsFillMenuButtonWideFill size='38px'/>
                        <Grid margin='0 0 0 7px'>
                            <Text F_size='18px' align='center'  L_height='15px' display='inline-block'>Daily</Text>
                            <Text F_size='18px' L_height='15px' >Diary</Text>
                        </Grid>
                    </Grid>
                    <Grid  is_flex justify_content='flex-end'>
                        <Button text="@@님" Border="none" font_weight='600' cursor = 'pointer'/>
                        <Button text="마이페이지" Border="none" font_weight='600' cursor = 'pointer'/>
                        <Button text="로그아웃" Border="none" font_weight='600' cursor = 'pointer'/>
                    </Grid>
                </Grid>

                <Grid >
                    <Grid border='1px solid black' width='30%' height='200px'></Grid>
                    <Grid border='1px solid black' width='30%' height='200px'></Grid>
                    <Grid border='1px solid black' width='30%' height='200px'></Grid>
                </Grid>
                {/* <Input B_radius="10px" label="안녕?"></Input>
                <Image src="https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"/> */}
            </Grid>
        
        </Grid>

    );
}

export default Temp;