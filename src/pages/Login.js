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

    const is_login = useSelector(state => state.user.is_login);
    if(is_login){
        navigate("/");
    }
    const _user = useSelector(state => state.user);

    const idRef = React.useRef(null);
    const pwdRef = React.useRef(null);

    const tryLogIn = () =>{
        const logIn_data = {
            username : idRef.current.value,
            password : pwdRef.current.value,
        }
        
        const APIdata = instance.post('/api/login',logIn_data)
        .then((res) => {
            //window.alert("로그인이 완료되었습니다.";
            const token = res.data.token;
            instance.defaults.headers.common["X-AUTH-TOKEN"] = token; 

            let loginUserData = {
                user_id : "",
                nickname : "",
                user_profile : "",
            }
            
            instance.post('/api/user',{}).then(response=>{
                loginUserData.user_id = response.data.username;
                loginUserData.nickname = response.data.nickname;
                loginUserData.user_profile = response.data.user_profile;
                dispatch(userActions.loginUser(loginUserData,token));

            });
            
        })
        .catch((err,res) => {
            console.log(err)
        });
    }

    React.useEffect(async() => {
        if( !is_login ){
            dispatch(userActions.loginCheck());
        }
    },[]);

    return (
        <Grid >
            <Header/>
            
            <Grid is_flex flex_direction="column" align-items="center">
                <Grid width="30vw" margin="30px">
                    <Image width="100%" src="https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"/>
                </Grid>
                <Input _ref={idRef} margin="10px" label="ID" width = "30vw"></Input>
                <Input _ref={pwdRef} type='password' margin="10px" label="PassWord" width = "30vw"></Input>
                <Button margin="20px" width="15vw" text="LogIn" _onClick={tryLogIn}/>
                <Text cursor="pointer" F_decoration="underline" F_color="#3d078cd9" _onClick={()=>{navigate("/signup")}}>회원이 아니신가요??</Text>
            </Grid>
        </Grid>
    );
}

export default Login;