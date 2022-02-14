//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

//import Components && elements
import Header from "../components/Header";
import { Button, Grid, Input, Image, Text } from "../elements" ;

//import Actions
import { actionCreators as userActions } from "../redux/modules/user";

//import API
import instance from "../shared/Request"
import axios from "axios";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user);

    const idRef = React.useRef(null);
    const pwdRef = React.useRef(null);

    const [ id, setId ] = React.useState("")
    const [ pwd,setPwd ] = React.useState("");

    console.log(_user);

    const tryLogIn = () =>{
        const logIn_data = {
            username : idRef.current.value,
            password : pwdRef.current.value,
        }
        const headers = {
            "Access-Control-Allow-Origin": "http://binscot.shop", 
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/x-www-form-urlencoded",
            
        };
        console.log(logIn_data);

        // const _user = {
        //         uid : "15",
        //         user_id : "test",
        //         nickname : "test1",
        //         user_profile : "url",
        //     }
        //     dispatch(userActions.loginUser(_user));


        axios({
            method: 'post',
            url: '/api/login',
            headers: headers,
            params: {
                username : logIn_data.username,
            },
            data : logIn_data,

        }
        ).then((res) => {
            console.log(res.data)
            const _user = {
                uid : res.data.id,
                user_id : res.data.username,
                nickname : res.data.nickname,
                user_profile : res.data.userimage,
            }
            dispatch(userActions.loginUser(_user));


        })
        .catch((err,res) => {
            console.log(err)
            window.alert("로그인에 실패하였습니다.");
        });

    }

    React.useEffect(async() => {
    },[]);

    return (
        <Grid >
            <Header/>
            
            <Grid is_flex flex_direction="column" align-items="center">
                <Grid width="30vw" margin="30px">
                    <Image width="100%" src="https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"/>
                </Grid>
                <Input _ref={idRef} margin="10px" label="ID" width = "30vw"></Input>
                <Input _ref={pwdRef} margin="10px" label="PassWord" width = "30vw"></Input>
                <Button margin="20px" width="15vw" text="LogIn" _onClick={tryLogIn}/>
                <Text cursor="pointer" F_color="#3d078cd9" _onClick={()=>{navigate("/signup")}}>회원이 아니신가요??</Text>
            </Grid>
        </Grid>
    );
}

export default Login;