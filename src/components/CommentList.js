import React from "react";
import {Grid, Image, Text} from "../elements";

const CommentList = () => {
    return (
        <React.Fragment>
        <Grid padding="16px">
            <CommentItem />
            <CommentItem />
        </Grid>
        </React.Fragment>
    );
};

export default CommentList;


const CommentItem = (props) => {

    const {user_profile, user_name, user_id, post_id, contents, insert_dt} = props;
    return (
        <Grid is_flex>
            <Grid is_flex width="auto">
                <Image shape="circle" size='60'/>
                <Text bold>{user_name}</Text>
            </Grid>
            <Grid is_flex margin="0px 4px">
                <Text margin="0px">{contents}</Text>
                <Text margin="0px">{insert_dt}</Text>
            </Grid>
        </Grid>
    )
}

CommentItem.defaultProps = {
    user_profile: "",
    user_name: "thdud22",
    user_id: "",
    post_id: 1,
    contents: "오늘도 공부하시느라 고생하셨습니다!",
    insert_dt: '2022-02-12 19:00:00'
}