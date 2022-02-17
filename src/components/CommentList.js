import React from "react";
import {Grid, Image, Text} from "../elements";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";


const CommentList = () => {    
    const dispatch = useDispatch();
    const params = useParams()
    const diary_id = params.diary_uid
    const comment_list = useSelector((state) => state.comment.list);

    

    //console.log(thisDiaryComment)

    React.useEffect(() =>{
        
        dispatch(commentActions.getComment(diary_id, comment_list));
    },[])


    return (
        <React.Fragment>
        <Grid margin='50px 0 0 0'>
            {comment_list.map( (C,i) => {
            return <CommentItem key={i} {...C}/>
            })}
        </Grid>
        </React.Fragment>
    );
};

export default CommentList;


const CommentItem = (props) => {

    const temp = props.createdAt.split("T")
    const day = temp[0].split("-");
    const t = temp[1].split(":");
    const time = day[0] + "년 " +day[1] +"월 " +day[2] +"일 " + t[0] + ":" + t[1];


    return ( 
        <Grid is_flex justify_content='space-between' padding='10px'   >
            <Grid is_flex  >
                <Image src={props.user.user_profile} shape="circle" size='60'/>
                <Grid margin='0 10px'>
                    <Text F_size='16px' F_weight='600'>{props.user.nickname}</Text>
                    <Text margin="0px" F_size='12px'>{time}</Text>
                </Grid>
            </Grid >
            <Grid width="75%" BG_c='white' height='80px'>
                <Text margin="0px 4px"  padding='20px' width="100%" >{props.comment} </Text>
            </Grid>
        </Grid>
    )
}

CommentItem.defaultProps = {
    user_info:{
        user_id: "user_id",
        nickname : "nickname",
        user_profile : "user_propfile"
    },
    diaryId : "diary",
    comment : "나도 comment",
    insert_dt : "insert_dt",
}