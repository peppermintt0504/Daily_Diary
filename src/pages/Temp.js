//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import Components
import { Button, Grid, Input, Image } from "../elements" 



function Temp() {

    React.useEffect(async() => {
    },[]);

    return (
        <Grid >
            <Grid width="600px" margin="30px">
                <Grid flex_direction="row-reverse" is_flex margin="20px">
                    <Button text="1" BG_color="#3ee4" Border="1px #e96b solid" B_radius ="30px"/>
                    <Button text="2" BG_color="#3ee4" Border="1px #e96b solid" B_radius ="30px"/>
                    <Button text="3" BG_color="#3ee4" Border="1px #e96b solid" B_radius ="30px"/>
                </Grid>
                <Input B_radius="10px" label="안녕?"></Input>
                <Image src="https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"/>
            </Grid>
        
        </Grid>
    );
}

export default Temp;