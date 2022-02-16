import React from "react";
import {Grid, Text, Button} from "../elements";


import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";

//import Components
import { BsFillMenuButtonWideFill } from "react-icons/bs";

//import redux
import { actionCreators as userActions } from "../redux/modules/user";

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Header = (props) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const is_login = useSelector(state => state.user.is_login);
    const _user = useSelector(state => state.user.user);


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
                <Grid box_shadow="1px 1px 5px 1px grey" flex_wrap = "nowrap" z_index = "9" top="0px" position="fixed" height="70px" BG_c="#ffec99" width="100%" justify_content="space-between" is_flex padding="4px 16px">
                    <Grid  cursor={"pointer"} width="200px" _onClick= {() => navigate("/")} >
                        <Grid F_style={"italic"} is_flex justify_content='flex-start' >
                            <Grid>
                                <BsFillMenuButtonWideFill size='38px'/>
                            </Grid>
                            <Grid margin='0 0 2px 7px'>
                                <Text F_size='22px' align='center'  L_height='18px' F_weight='600' display='inline-block'>Daily</Text>
                                <Text F_size='22px' L_height='22px' F_weight='600' >Diary</Text>
                            </Grid>
                        </Grid>
                    </Grid>
    
    
                    <Grid width="600px" margin="0 100px" flex_direction= "row" justify_content="space-between" is_flex>
                        <Text F_decoration="underline" F_style={"italic"} F_size="20px" F_weight="bold">{_user.nickname}</Text>
                        <Button B_radius="10px" Border="none"   BG_color="white" width="150px" text="마이페이지" _onClick ={() => navigate("/mypage")}/>
                        <Button B_radius="10px" Border="none" BG_color="white" width="150px" text="로그아웃" _onClick ={logout}/>
                    </Grid>
                </Grid>
                <Grid margin = "80px"/>

            </React.Fragment>
        );
    
    }
    return(
        <React.Fragment>
            <Grid box_shadow="1px 1px 5px 1px grey" flex_wrap = "nowrap" z_index = "9" top="0px" position="fixed" height="70px" BG_c="#ffec99" width="100%" justify_content="space-between" is_flex padding="4px 16px">
                <Grid  cursor={"pointer"} width="200px" _onClick= {() => navigate("/")} >
                    <Grid F_style={"italic"} is_flex justify_content='flex-start' >
                        <Grid>
                            <BsFillMenuButtonWideFill size='38px'/>
                        </Grid>
                        <Grid margin='0 0 2px 7px'>
                            <Text F_size='22px' align='center'  L_height='18px' F_weight='600' display='inline-block'>Daily</Text>
                            <Text F_size='22px' L_height='22px' F_weight='600' >Diary</Text>
                        </Grid>
                        
                    </Grid>
                </Grid>


                <Grid width="600px" margin="0 100px" flex_direction= "row-reverse" justify_content="space-between" is_flex>
                    <Button B_radius="10px" Border="none"   BG_color="white" width="150px" text="로그인" _onClick ={() => navigate("/login")}/>    
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