import React from "react";
import {Grid, Text, Button, Image} from "../elements";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";

//import MUI
import Chip from '@mui/material/Chip';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

const Post = (props) => {
    const _props = props

    const temp = _props.createdAt.split("T")
    const day = temp[0].split("-");
    const t = temp[1].split(":");
    const time = day[0] + "년 " +day[1] +"월 " +day[2] +"일 " + t[0] + ":" + t[1];

    let hash = [];
    
    if(props.tag ===""){
        hash = [];
    }else{
        hash = props.tag.split("#")
        hash.shift();

    }
    const navigate = useNavigate();
    
    return(
        <Grid box_shadow="1px 4px 5px 1px #80808080" Border='1px solid #00000085' width='385px' height='700px' margin='30px 7px' B_radius='20px' 
        _onClick={()=>{navigate("/detail/"+_props.id)}}>
            <Grid height='70px' padding='0 15px' is_flex justify_content='space-between'>
                <Grid width='50%' is_flex> 
                    <Image shape='circle' size='40' src={props.user_profile}></Image>
                    <Text margin='0 0 0 7px' width='50%'>{props.nickname}</Text>
                </Grid>
                <Text width='50%' is_flex justify_content='flex-end'>{time}</Text>
            </Grid>

            <Grid width='100%' height='300px'>
                <Image src={props.imageUrls[0].imageUrl} shape='imagePost'>
                </Image>
            </Grid>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            <Grid padding='10px 15px' margin='0 0 10px 0' position='relative' height='275px'>
                <Grid flex_direction="row" is_flex justify_content='flex-start' align_items='center' margin='0 10px 15px 0'>
                    <Image shape='circle' size='40' margin='0 10px 0 0' src={`/emozi/${props.emotion}.jpeg`}></Image>
                    <Text width="200px" F_size='20px' F_weight='600' >{props.title}</Text>
                </Grid>
                <Text margin='0 0 20px 0' height='120px'>{props.content}</Text>
                <Grid position='absolute' bottom='10px'>
                    <Grid is_flex flex_direction="row">{hash.map((T,idx)=>{return <Grid key={idx} margin="0 5px"><Chip label={`#${T}`} size="small" /></Grid>})}</Grid>
                </Grid>
            </Grid>
            
        </Grid>


    )
}
Post.defaultProps = {
    diary_uid : "",
    emotion : "GOOD",
    tag : [""],
    imageUrls : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229",
    title : "plz input title",
    content : "plz input contents..",
    comment_cnt : 0,
    is_open : true,
    user_info:{
        uid : "plz input uid",
        user_id: "plz input id",
        user_name : "plz input nickname",
        user_profile : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"
    },
};


export default Post;