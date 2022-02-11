//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import Components && elements
import Header from "../components/Header";
import { Button, Grid, Input, Image, Text } from "../elements" 

//import API
import {RESP} from "../shared/tempAPI"


function DiaryWrite() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const titleRef = React.useRef(null);
    const ImageRef = React.useRef(null);
    const contentsRef = React.useRef(null);
    const tagRef = React.useRef(null);

    const [title,setTitle] = React.useState("");
    const [Image_url,setImage_url] = React.useState("");
    const [contents,setContents] = React.useState("");

    const changeImg_url = () => {
        console.log(ImageRef.current.value)
        setImage_url(ImageRef.current.value);
    }
    
    const sendData = () =>{
        console.log(titleRef.current.value)
        console.log(ImageRef.current.value)
        console.log(contentsRef.current.value)
        console.log(tagRef.current.value)
    }

    React.useEffect(async() => {
    },[]);

    return (
        <Grid>
            <Header/>
                <Grid margin="150px 0" is_flex flex_direction="column" align-items="center">
                    <Grid justify_content="center" is_flex align-items="center">
                        <Input _ref={titleRef} margin="10px" label="Title" width = "26vw"></Input>
                        <select style={ { margin : "20px 0 0 0",height:"40px", width:"4vw"}} >
                            <option value={"Good"}>좋아요!</option>
                            <option value={"Soso"}>그냥~</option>
                            <option value={"NotGood"}>에휴...</option>
                        </select>
                    </Grid>


                    <Text margin="20px">미리보기</Text>
                    <Image margin="20px" width="100%" src={Image_url?Image_url:"https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"}/>
                    <Grid margin="10px"/>
                    <Input _ref={ImageRef} margin="10px" label="Image_url" width = "30vw" _onChange={changeImg_url}></Input>
                    <Input _ref={contentsRef} is_textarea margin="10px" label="Contents" height="150px" width = "30vw"></Input>
                    <Input _ref={tagRef} margin="10px" label="Hash tag" width = "30vw"></Input>
                    <Grid is_flex width="30vw" align-items="center">
                        <label style={{margin:"10px 20px 10px 0"}} >공개<input type={"radio"} name={"is_open"} value="공개"></input></label>
                        <label>비공개<input type={"radio"} name={"is_open"} value="비공개"></input></label>
                    </Grid>
                    <Button margin="20px" width="15vw" text="Signup" _onClick={sendData} />

                </Grid>
        </Grid>

    )

}

export default DiaryWrite;