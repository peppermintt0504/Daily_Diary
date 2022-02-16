//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


//import Components && elements
import Header from "../components/Header";
import { Button, Grid, Input, Image, Text } from "../elements" ;

//import Actions
import { actionCreators as diaryActions } from "../redux/modules/diary";

//import API
import {RESP} from "../shared/tempAPI";
import instance from "../shared/Request";


function DiaryEdit(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const _diary = useSelector(state => state.diary.list);
    const _state = useSelector((state) => state.diary.list);

    const params = useParams()
    const diary_uid = params.diary_uid

    React.useEffect(async() => {
        if(_diary.length === 0){
            dispatch(diaryActions.getDiary())
        }
    },[]);

    const diary = useSelector((state)=> state.diary.list).reduce((x,v,i) => v.diary_uid === diary_uid?v:x,"");

    console.log(diary)
    console.log(diary.title);
    
    const titleRef = React.useRef(null);
    const ImageRef = React.useRef(null);
    const contentsRef = React.useRef(null);
    const tagRef = React.useRef(null);
    const emoRef = React.useRef(null);
    const is_open = React.useRef(true);

    const changeImg_url = () => {
        console.log(ImageRef.current.value)
        // setImage_url(ImageRef.current.value);
    }
    
    const updateData = () =>{
        const tag_list = tagRef.current.value.split("#");
        tag_list.shift();
        // setEmotion(emoRef.current.value)

        const updatediary = {
            emotion : emoRef.current.value,
            tag : tag_list,
            image_url : ImageRef,
            title : titleRef.current.value,
            contents : contentsRef.current.value,
            comment_cnt : 0,
            is_open : is_open,
            user_info:{
                uid : "nuknown user uid...",
                user_id: "nuknown user id...",
                user_name : "nuknown user nick name...",
                user_profile : "nuknown user profile..."
            },
        }
        dispatch(diaryActions.updateDiarydata(updatediary, diary_uid));
        console.log(updatediary, diary_uid)
        window.alert("게시물이 수정 되었습니다.");
        navigate("/"); 
    }


    return (
        <Grid>
            <Header/>
                <Grid  width='800px' margin="150px auto" is_flex flex_direction="column" align-items="center">
                    <Text F_size='25px' margin='0 0 50px'>오늘의 일기를 수정합니다!</Text>
                    <Grid  justify_content="center" is_flex align_items="flex-end">
                        <Input _ref={titleRef} _defaultValue={diary?diary.title:""} margin="0 10px" height='40px' label="Title" width = "500px" ></Input>
                        <select ref={emoRef}  style={ { height:"45px", width:"100px"}} >
                            <option value={"Good"}>좋아요!</option>
                            <option value={"Soso"}>그냥~</option>
                            <option value={"NotGood"}>에휴...</option>
                        </select>
                    </Grid>


                    <Text margin="20px">미리보기</Text>
                    <Image margin="30px" width="100%" _defaultValue={diary?diary.image_url:""}/>
                    <Grid margin="10px"/>
                    <Input _ref={ImageRef} _defaultValue={diary?diary.image_url:""} margin="0 10px 20px" label="Image_url" width = "600px" _onChange={changeImg_url} ></Input>
                    <Input _ref={contentsRef} _defaultValue={diary?diary.contents:""} is_textarea margin="0 10px 20px" label="Contents" height="150px"width = "600px"></Input>
                    <Input _ref={tagRef} _defaultValue={diary?diary.tag.join(' '):""}margin="0 10px 20px" label="Hash tag" width = "600px"></Input>
                    <Grid is_flex width="600px" align_items="center">
                        <label onClick={()=>is_open(true)} style={{margin:"10px 20px 10px 0"}}>
                            공개 <input type={"radio"} name={"is_open"} value="공개"></input>
                        </label>
                        <label onClick={()=>is_open(false)}>
                            비공개<input type={"radio"} name={"is_open"} value="비공개"></input>
                        </label>
                    </Grid>
                    <Button margin="20px" width="15vw" text="수정완료" _onClick={updateData} />

                </Grid>
        </Grid>

    )

}

export default DiaryEdit;