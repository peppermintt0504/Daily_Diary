import React from "react";
import {Grid, Image, Text} from "../elements";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";



import { Button } from "../elements";

const CommentList = () => {    
    const dispatch = useDispatch();
    
    const params = useParams()
    const diary_id = params.diary_uid
    let comment_list = useSelector((state) => state.comment.list);
    
    const navigate = useNavigate();
    const comment_del = () => {
        dispatch(commentActions.delCommentData(diary_id,))
        navigate("/")  
    }



    React.useEffect(() =>{
        
        dispatch(commentActions.getComment(diary_id, comment_list));
    },[])

    let temp_list = []; 
    comment_list.map( (C,i) => { temp_list.unshift(C) });


    return (
        <React.Fragment>
        <Grid margin='50px 0 0 0'>
            {temp_list.map( (C,i) => {
            return <CommentItem key={i} {...C}/>
            })}
        </Grid>
        </React.Fragment>
    );
};

export default CommentList;


const CommentItem = (props) => {
    const _user = useSelector(state => state.user);

    const temp = props.createdAt.split("T")
    const day = temp[0].split("-");
    const t = temp[1].split(":");
    const time = day[0] + "년 " +day[1] +"월 " +day[2] +"일 " + t[0] + ":" + t[1];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const comment_del = () => {
        console.log(props)
        dispatch(commentActions.delCommentData(props.diary.id,props.id))

    }

    return ( 
        <Grid is_flex justify_content='space-between' padding='10px'   >
            <Grid is_flex  >
                <Image src={props.user.user_profile} shape="circle" size='60'/>
                <Grid margin='0 10px'>
                    <Text F_size='16px' F_weight='600'>{props.user.nickname}</Text>
                    <Text margin="0px" F_size='12px'>{time}</Text>
                </Grid>
            </Grid >
            <Grid flex_direction="row" is_flex justify_content="event-end" width="75%" BG_c='white' height='80px'>
                <Text margin="0px 4px"  padding='20px' width="83%" >{props.comment} </Text>
                {_user.user.nickname===props.user.nickname?
                        <Button 
                        height='40px' width='50px' BG_color='#e9ecef' Border='none' B_radius='10px' margin='0 10px 0 0'
                        _onClick={comment_del}>삭제
                    </Button>:""}
                    
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