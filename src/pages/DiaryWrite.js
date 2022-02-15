//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import Components && elements
import Header from "../components/Header";
import Upload from "../shared/Upload";
import { Button, Grid, Input, Image, Text } from "../elements" ;

//import Actions
import { actionCreators as diaryActions } from "../redux/modules/diary";

//import API
import instance from "../shared/Request";
import axios from "axios";


function DiaryWrite() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const _state = useSelector(state => state)
    const _user = useSelector(state => state.user.user)
    console.log(_user);

    const titleRef = React.useRef(null);
    const ImageRef = React.useRef(null);
    const contentsRef = React.useRef(null);
    const tagRef = React.useRef(null);
    const emoRef = React.useRef(null);


    const [emotion, setEmotion ] = React.useState("Good")
    const [title,setTitle] = React.useState("");
    const [image_url,setImage_url] = React.useState("https://mnapoli.fr/images/posts/null.png");
    const [contents,setContents] = React.useState("");
    const [tag,setTag] = React.useState("");
    const [is_open,setIs_open] = React.useState(true);


    const changeImg_url = () => {
        console.log(ImageRef.current.value)
        setImage_url(ImageRef.current.value);
    }
    
    const sendData = () =>{
        setTitle(titleRef.current.value)
        setContents(contentsRef.current.value)
        const tag_list = tagRef.current.value.split("#");
        tag_list.shift();
        setEmotion(emoRef.current.value)

        const newdiary = {
            
            emotion : emoRef.current.value,
            tag : tag_list,
            image_url : image_url,
            title : titleRef.current.value,
            contents : contentsRef.current.value,
            comment_cnt : 0,
            is_open : is_open,
            user_info:{
                uid : _user.uid,
                user_id: _user.user_id,
                user_name : _user.nickname,
                user_profile : _user.user_profile,
            },
        }
        console.log(newdiary);
        dispatch(diaryActions.addDiarydata(newdiary));
        navigate("/");
    }

    React.useEffect(async() => {

        dispatch(diaryActions.getDiary());
    },[]);

    return (
        <Grid>
            <Header/>
                <Grid margin="150px 0" is_flex flex_direction="column" align-items="center">
                    <Grid width="50vw" justify_content="center" is_flex align-items="center">
                        <Input _ref={titleRef} margin="10px" label="Title" width = "26vw"></Input>
                        <select ref={emoRef} style={ { margin : "20px 0 0 0",height:"40px", width:"6vw"}} >
                            <option value={"Good"}>좋아요!</option>
                            <option value={"Soso"}>그냥~</option>
                            <option value={"NotGood"}>에휴...</option>
                        </select>
                    </Grid>
                    
                    <Upload/>

                    <Grid margin="10px"/>
                    <Input _ref={contentsRef} is_textarea margin="10px" label="Contents" height="150px" width = "30vw"></Input>
                    <Input _ref={tagRef} margin="10px" label="Hash tag" width = "30vw"></Input>
                    <Grid is_flex width="30vw" align-items="center">
                        <label onClick={()=>setIs_open(true)} style={{margin:"10px 20px 10px 0"}} >공개<input type={"radio"} name={"is_open"} value="공개"></input></label>
                        <label onClick={()=>setIs_open(false)}>비공개<input type={"radio"} name={"is_open"} value="비공개"></input></label>
                    </Grid>
                    <Button margin="20px" width="15vw" text="Signup" _onClick={sendData} />
                </Grid>
        </Grid>

    )

}

export default DiaryWrite;