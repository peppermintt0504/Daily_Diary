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
    const comment_list = useSelector((state) => state.comment.list.list);
    // console.log(diary_id)
    console.log(comment_list)


    React.useEffect(() =>{
        dispatch(commentActions.getComment(diary_id, comment_list));
    },[])

    if (comment_list === undefined) {
        return <React.Fragment></React.Fragment>
    }

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
    console.log(props)
    return ( 
        <Grid is_flex justify_content='space-between' padding='10px 0' >
            <Grid is_flex width="22%" >
                <Image shape="circle" size='60'/>
                <Grid>
                    <Text bold>{props.user_info.nickname}</Text>
                    <Text margin="0px">{props.insert_dt}</Text>
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