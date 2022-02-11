//import Library
import React from "react"
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Button, Grid, Input, Image, Text } from "../elements" 

//import Icon

import Header from "../components/Header";
import Post from "../components/Post";




function Write() {
  return(
    <React.Fragment>
      <Grid >
        <Text F_size='50px'>글 작성페이지입니다</Text>
      </Grid>
    </React.Fragment>
    
  )
}

export default Write;