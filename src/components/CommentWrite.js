//import Library
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Grid, Input, Button} from "../elements";


//import Actions
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentWrite = (props) => {
    const _comment_info = useSelector((state)=> state)
    console.log(_comment_info)

    const dispatch = useDispatch();
    const contentsRef = React.useRef(null);
    const [contents,setContents] = React.useState("");

    const commentSend = () =>{
        setContents(contentsRef.current.value);
        const comment_data =
        {
            user_info:{
                user_id: "test_user_id",
                nickname : "test_nickname",
                user_profile : "test_user_propfile"
            },
            diaryId : "test_diary",
            comment : contentsRef.current.value,
            insert_dt : "test_insert_dt",
        }
        dispatch(commentActions.addCommentData(comment_data));
        window.alert('comment가 작성되었습니다');
    }


    return (
        <React.Fragment>
            <Grid is_flex justify_content='space-between'>
            <Input is_textarea width='800px' height='100px' padding='20px' B_radius='12px' _ref={contentsRef}/>
            <Button 
                height='100px' B_radius='12px' width='70px'  margin='0 10px 0 0'  Border='none' BG_color='#ffec99'
                _onClick={commentSend}>작성
            </Button>
            </Grid>
        </React.Fragment>
    );
}

export default CommentWrite;