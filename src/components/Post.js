import React from "react";
import {Grid, Text, Button, Image} from "../elements";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";




const Post = (props) => {
    const _props = props
    // console.log(_props);
    const navigate = useNavigate();

    return(
        <>
        <Grid box_shadow="1px 4px 5px 1px #80808080" Border='1px solid #00000085' width='385px' height='600px' margin='0 0 20px 0' B_radius='20px' 
        _onClick={()=>{navigate("/detail/"+_props.diary_uid)}}>
            <Grid height='70px' padding='0 15px' is_flex justify_content='space-between'>
                <Grid is_flex>
                    <Image shape='circle' size='40'></Image>
                    <Text margin='0 0 0 7px'>{props.user_info.nickname}</Text>
                </Grid>
                <Text>{props.insert_dt}</Text>
            </Grid>

            <Grid width='100%' height='300px'>
                <Image src={props.image_url} shape='imagePost'>
                </Image>
            </Grid>

            <Grid padding='10px 15px' margin='0 0 10px 0' position='relative' height='225px'>
                <Grid is_flex justify_content='flex-start' align_items='center' margin='0 10px 15px 0'>
                    <Image shape='circle' size='40' margin='0 10px 0 0' src={props.user_info.user_profile}></Image>
                    <Text F_size='20px' F_weight='600' >{props.title}</Text>
                </Grid>
                <Text margin='0 0 20px 0' height='120px'>{props.contents}</Text>
                <Grid position='absolute' bottom='15px'>
                    <Text>{props.tag.map((T,idx)=>{return (`#${T }  `)})}</Text>
                </Grid>
            </Grid>
        </Grid>
        </>


    )
}
Post.defaultProps = {
    diary_uid : "NKLJSDFGLER",
    emotion : "GOOD",
    tag : ["오늘","언제","끝날까?"],
    image_url : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229",
    title : "야근하는 날",
    contents : "야근을 왜 해야하죠",
    comment_cnt : 0,
    insert_dt : "2022-02-11 16:51:32" ,
    is_open : true,
    user_info:{
        uid : "user000001",
        user_id: "hello_world@naver.com",
        user_name : "hello_world",
        user_profile : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"
    },
};


export default Post;