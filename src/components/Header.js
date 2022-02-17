import React from "react";
import {Grid, Text, Button,Image} from "../elements";


import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";

//import Components
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import Switch from '@mui/material/Switch';

//import redux
import { actionCreators as userActions } from "../redux/modules/user";

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Header = (props) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
        dispatch(userActions.secretDiary(event.target.checked))
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const _user = useSelector(state => state.user.user);
    const is_login = useSelector(state => state.user.is_login);

    
    // if(!is_login){
    //     setCheck(check+1);
    // }

    // if(check===1 && !is_login){
    //     setCheck(check+1);
    // }
    // if(check > 1){
    //     if(!is_login){
    //         navigate("/login");
    //     }
    // }
    const logout = () =>{
        dispatch(userActions.logoutUser());
        navigate("/login");
    }
    
    React.useEffect(async() => {
        if( !is_login ){
            dispatch(userActions.loginCheck());
        }
        
    },[]);
    
    if(is_login){
        return(
            <React.Fragment>
                <Grid box_shadow="1px 1px 5px 1px grey" flex_wrap = "nowrap" z_index = "9" top="0px" position="fixed" height="70px" BG_c="#e9ecef" width="100%" justify_content="space-between" is_flex padding="4px 16px">
                    <Grid width='1200px' margin='0 auto' is_flex justify_content='space-between' >
                        <Grid cursor={"pointer"} width="100px" height='55px' _onClick= {() => navigate("/")}>
                            {/* <BsFillMenuButtonWideFill size='38px'/> */}
                            <Image src='/img/Logo2.png' width='100%' height='100%' shape='imagePost'/>
                        </Grid>

    
                <Grid width="70%" is_flex justify_content='flex-end' align_items='center' >
                    <Switch {...label} checked={checked} onChange={handleChange} />
                            <Text F_size="18px" width='100px' F_weight="bold" margin ='0 10px 0 0'>{_user.nickname}</Text>
                            <Button B_radius="10px" Border="none"  BG_color="white" width="100px" height='40px' text="마이페이지" margin ='0 10px 0 0' box_shadow='1px 1px 3px gray' _onClick ={() => navigate("/mypage")}/>
                            <Button B_radius="10px" Border="none" BG_color="white" width="100px" height='40px' text="로그아웃"  box_shadow='1px 1px 3px gray' 
                            _onClick ={logout}/>
                            </Grid>
                    </Grid>
                </Grid>
                <Grid margin = "80px"/>
            </React.Fragment>
        );
    
    }
    return(
        <React.Fragment>
            <Grid box_shadow="1px 1px 5px 1px grey" flex_wrap = "nowrap" z_index = "9" top="0px" position="fixed" height="70px" BG_c="#e9ecef" width="100%" justify_content="space-between" is_flex padding="4px 16px">
            <Grid width='1200px' margin='0 auto' is_flex justify_content='space-between' >
                    <Grid cursor={"pointer"} width="100px" height='55px'
                        _onClick= {() => navigate("/")}>
                        <Image src='/img/logo2.png' width='100%' height='100%' shape='imagePost'/>
                        
                    </Grid>
                    <Grid flex_direction= "row-reverse" justify_content="space-between" is_flex>
                        <Button B_radius="10px" Border="none" BG_color="white" width="100px" height='40px' text="로그인" 
                        _onClick ={() => navigate("/login")}/>    
                    </Grid>
                    </Grid>
            </Grid>
            <Grid margin = "80px"/>

        </React.Fragment>
    );

}

Header.defaultProps = {}

export default Header;

{/* 
    혹시몰라요!! 디자인바꿀때 함보자고여!!ㅋㅋ 
    <Grid width="1000px" heght='100%' margin="30px" border='1px solid black'>
<Grid is_flex justify_content="space-between" BG_c='#e9ecef' height='60px' padding='10px 0 10px 25px' >
    <Grid is_flex >
        <BsFillMenuButtonWideFill size='38px'/>
        <Grid margin='0 0 0 7px'>
            <Text F_size='18px' align='center'  L_height='15px' display='inline-block'>Daily</Text>
            <Text F_size='18px' L_height='15px' >Diary</Text>
        </Grid>
    </Grid>
    <Grid  is_flex justify_content='flex-end'>
        <Button text="@@님" Border="none" font_weight='600' cursor = 'pointer'/>
        <Button text="마이페이지" Border="none" font_weight='600' cursor = 'pointer'/>
        <Button text="로그아웃" Border="none" font_weight='600' cursor = 'pointer'/>
    </Grid>
</Grid> */} 