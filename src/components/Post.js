import React from "react";
import {Grid, Text, Button, Image} from "../elements";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";




const Post = (props) => {

    const navigate = useNavigate();

    return(
        <>
        <Grid Border='1px solid black' width='385px' height='500px' margin='0 0 20px 0' B_radius='20px' >

            <Grid height='50px' padding='0 15px' is_flex justify_content='space-between'>
                <Text>작성자</Text>
                <Text>2022-02-11</Text>
            </Grid>

            <Grid width='100%'  height='300px'  >
                <Image src='https://image.msscdn.net/images/goods_img/20210917/2140552/2140552_1_500.jpg' shape='imagePost'></Image>
            </Grid>

            <Grid padding='10px 15px'>
                <Text F_size='20px' F_weight='600' margin='0 0 10px 0'>소영2222222</Text>
                <Text >다이어리Test입니다.다이어리Test입니다다이어리Test입니다다이어리Test입니다다이어리Test입니다다이어리Test입니다다이어리Test입니다다이어리Test입니다다이어</Text>
            </Grid>
        </Grid>
        </>


    )
}


export default Post;