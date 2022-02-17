//import Library
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Grid, Input, Button} from "../elements";


//import Actions
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentWrite = (props) => {
    const _user = useSelector((state)=> state.user);
    //console.log(_user.user);
    const dispatch = useDispatch();
    const contentsRef = React.useRef(null);
    const [contents,setContents] = React.useState("");

    const commentSend = () =>{
        setContents(contentsRef.current.value);
        const comment_data =
        {
            user_info:{
                user_id: _user.user.user_id,
                nickname : _user.user.nickname,
                user_profile : _user.user.user_profile,
            },
            diaryId : props.diary_id,
            comment : contentsRef.current.value,
            insert_dt : "test_insert_dt",
        }
        dispatch(commentActions.addCommentData(props.diary_id,contentsRef.current.value));
        window.alert('comment가 작성되었습니다');
        contentsRef.current.value = "";
        
    }


    return (
        <React.Fragment>
            <Grid is_flex margin='0 auto'  justify_content='space-between' >
                <Input is_textarea width='860px' height='120px' _ref={contentsRef} padding='20px'/>
                <Button 
                    height='120px' width='70px'  margin='0 10px 0 0'  Border='none' BG_color="white" box_shadow='1px 1px 1px gray'
                    _onClick={commentSend}>작성
                </Button>
            </Grid>
        </React.Fragment>
    );
}

export default CommentWrite;