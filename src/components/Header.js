import React from "react";
import {Grid, Text, Button} from "../elements";


import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";




const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();




    return(
        <React.Fragment>
            <Grid z_index = "9" position="fixed" height="70px" BG_c="#d2dbf4" justify_content="space-between" is_flex padding="4px 16px">
                <Grid width="200px" >
                    <Text cursor={"pointer"} F_style={"italic"} F_size="40px" F_weight="bold" _onClick= {() => navigate("/")}>데다!</Text>
                </Grid>

                <Grid width="600px" margin="0 100px" flex_direction= "row" justify_content="space-between" is_flex>
                    <Text F_decoration="underline" F_style={"italic"} F_size="20px" F_weight="bold">XXXXX님</Text>
                    <Button B_radius="10px" Border="1px #fff0 solid" BG_color="#4571eeab" width="150px" text="마이페이지" _onClick ={() => console.log("go to mypage site")}></Button>
                    <Button B_radius="10px" Border="1px #fff0 solid" BG_color="#4571eeab" width="150px" text="로그아웃" _onClick ={() => console.log("logout and go to login page")}></Button>
                </Grid>
            </Grid>
            <Grid margin = "80px"/>
        </React.Fragment>
    );

}

Header.defaultProps = {}

export default Header;