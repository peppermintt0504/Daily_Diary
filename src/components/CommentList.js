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
    console.log(comment_list)
    
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
    console.log(props);
    return ( 
        <Grid is_flex justify_content='space-between' padding='10px 0' >
            <Grid is_flex width="22%" >
                <Image src={props.user.user_profile} shape="circle" size='60'/>
                <Grid>
                    <Text bold>{props.user.nickname}</Text>
                    <Text margin="0px">{props.createdAt}</Text>
                </Grid>
            </Grid >
            <Grid width="751%">
                <Text margin="0px 4px"  padding='20px' width="100%"  Border='1px solid black' B_radius='10px' BG_color='#ffec99' >{props.comment} </Text>
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