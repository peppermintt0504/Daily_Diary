import React from "react";
import {Grid, Text, Button, Image} from "../elements";


import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";




const Post = (props) => {
  return(
    <>
      <Grid border='1px solid black' width='385px' height='450px' margin='0 0 20px 0' B_radius='20px'>

        <Grid width='100%'  height='290px' border='1px solid red' >
          {/* <Image width="90%" height='80%' padding='5px' ></Image> */}
        </Grid>

        <Grid padding='15px'>
          <Text F_size='25px' F_weight='600' margin='0 0 15px 0'>소영2222222</Text>
          <Text >다이어리Test입니다.다이어리Test입니다다이어리Test입니다다이어리Test입니다다이어리Test입니다다이어리Test입니다다이어리Test입니다다이어리Test입니다다이어</Text>
        </Grid>
      </Grid>
    </>


  )
}


export default Post;
