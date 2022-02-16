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
import { actionCreators as imageActions } from "../redux/modules/image";

//import API
import instance from "../shared/Request";
import axios from "axios";
import { actionCreators } from "../redux/modules/image";

//import MUI
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function DiaryWrite() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _image = useSelector(state => state.image);
    const _dairy = useSelector(state => state.dairy);
    const _user = useSelector(state => state.user.user);
    console.log(_image);

    const titleRef = React.useRef(null);
    const ImageRef = React.useRef(null);
    const contentsRef = React.useRef(null);
    const tagRef = React.useRef(null);
    const emoRef = React.useRef(null);


    const [emotion, setEmotion ] = React.useState("heart")
    const [title,setTitle] = React.useState("");
    const [image_url,setImage_url] = React.useState("https://mnapoli.fr/images/posts/null.png");
    const [contents,setContents] = React.useState("");
    const [tag,setTag] = React.useState("");
    const [is_open,setIs_open] = React.useState(true);
    

    
    const sendData = () =>{
        setTitle(titleRef.current.value)
        setContents(contentsRef.current.value)
        const tag_list = tagRef.current.value.split("#");
        tag_list.shift();

        const newDiary = {
            emotion : emotion,
            tag : tagRef.current.value,
            imageUrlList : _image.image_url?_image.image_url:"https://mnapoli.fr/images/posts/null.png",
            title : titleRef.current.value,
            content : contentsRef.current.value,
            comment_cnt : 0,
            is_open : is_open,
        }
        console.log(newDiary);
        dispatch(diaryActions.addDiarydata(newDiary));
        navigate("/");
        window.location.reload();
    }

    React.useEffect(async() => {

    },[]);

    return (
        <Grid>
            <Header/>
                <Grid margin="150px 0" is_flex flex_direction="column" align-items="center">
                    <Grid width="50vw" justify_content="center" is_flex align-items="center">
                        <Input _ref={titleRef} margin="10px" label="Title" width = "30vw"/>
                    </Grid>

                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <label onClick={()=>setEmotion("heart")} style={{margin:"10px"}}>
                            <Grid is_flex flex_direction="column" justify_content="center" align-items="center">
                                <Image shape='circle' size='40' margin='0 10px 0 0' src="/emozi/heart.jpeg"/>
                                <FormControlLabel value="heart" labelPlacement="top" control={<Radio />} label=""/>
                            </Grid>
                        </label>
                        <label onClick={()=>setEmotion("HaHa")} style={{margin:"10px"}}>
                            <Grid is_flex flex_direction="column" justify_content="center" align-items="center">
                                <Image shape='circle' size='40' margin='0 10px 0 0' src="/emozi/HaHa.jpeg"/>
                                <FormControlLabel value="HaHa" labelPlacement="top" control={<Radio />} label=""/>
                            </Grid>
                        </label>
                        <label onClick={()=>setEmotion("soso")} style={{margin:"10px"}}>
                            <Grid is_flex flex_direction="column" justify_content="center" align-items="center">
                                <Image shape='circle' size='40' margin='0 10px 0 0' src="/emozi/soso.jpeg"/>
                                <FormControlLabel value="soso" labelPlacement="top" control={<Radio />} label=""/>
                            </Grid>
                        </label>
                        <label onClick={()=>setEmotion("sad")} style={{margin:"10px"}}>
                            <Grid is_flex flex_direction="column" justify_content="center" align-items="center">
                                <Image shape='circle' size='40' margin='0 10px 0 0' src="/emozi/sad.jpeg"/>
                                <FormControlLabel value="sad" labelPlacement="top" control={<Radio />} label=""/>
                            </Grid>
                        </label>
                        <label onClick={()=>setEmotion("angry")} style={{margin:"10px"}}>
                            <Grid is_flex flex_direction="column" justify_content="center" align-items="center">
                                <Image shape='circle' size='40' margin='0 10px 0 0' src="/emozi/angry.jpeg"/>
                                <FormControlLabel value="angry" labelPlacement="top" control={<Radio />} label=""/>
                            </Grid>
                        </label>
                    </RadioGroup>
                    
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