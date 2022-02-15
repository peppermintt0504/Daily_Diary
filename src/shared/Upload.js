import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { actionCreators as userActions } from "../redux/modules/image";


//import elements
import { Button,Grid,Image,Text } from "../elements";

//import mui
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

//import Actions
import { actionCreators as imageActions } from "../redux/modules/image";

import { storage } from "./firebase";
import { getDownloadURL ,uploadBytesResumable, ref } from "firebase/storage";

const Upload = (props) => {
    const _image = useSelector(state => state.image);
    console.log(_image);

    const fileInput = React.useRef();
    const dispatch = useDispatch();
    const files = [];
    let image_url = null;


    const itemData = [
        {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        },
        {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        },
        {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        },
        // {
        // img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        // title: 'Coffee',
        // },
        // {
        // img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        // title: 'Hats',
        // },
        // {
        // img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        // title: 'Honey',
        // },
        // {
        // img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        // title: 'Basketball',
        // },
        // {
        // img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        // title: 'Fern',
        // },
        // {
        // img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        // title: 'Mushrooms',
        // },
        // {
        // img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        // title: 'Tomato basil',
        // },
        // {
        // img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        // title: 'Sea star',
        // },
        // {
        // img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        // title: 'Bike',
        // },
        ];
    
    const selectFile =(e) =>{
        
        console.log(e.target);
        console.log(e.target.files);

        console.log(fileInput.current.files[0]);

        const reader = new FileReader();
        
        const file = fileInput.current.files[0];
        files.push(file);
        reader.readAsDataURL(file);
        console.log(files);

        reader.onload = () =>{
            dispatch(imageActions.uploadImageFB(file));
        }
    }


    return (
        <Grid width="35vw">
            <input ref={fileInput} onChange={selectFile} type="file"/>
            {files.length!==0?<Text margin="20px">미리보기</Text>:""}
            {_image.image_url.length===0?"" : 
                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {_image.image_url.map((item,index) => (
                    <ImageListItem key={index}>
                    <img
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        // alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
                </ImageList>
            }
            
        </Grid>
    )
}

export default Upload;