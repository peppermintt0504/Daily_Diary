import React from "react";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";

import { storage } from "../../shared/firebase";
import { getDownloadURL ,uploadBytesResumable, ref } from "firebase/storage";


const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";

const uploading = createAction(UPLOADING, (uploading) => (uploading));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => (image_url));
const setPreview = createAction(SET_PREVIEW, (preview) => (preview));



//initialState
const initialState = {
    image_url : [],
    uploading : false,
    preview : null,


};

//middleware actions
const uploadImageFB=(image) =>{
    return function (dispatch,getState,){
        dispatch(uploading(true));
        const storageRef = ref(storage, `image/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.then(() =>{
            getDownloadURL(storageRef).then((url) =>{
                console.log(url);
                dispatch(uploadImage(url));
            });
        })
        
    }
}


//reducer
export default handleActions(
    {
        [UPLOAD_IMAGE]: (state, action) =>
        produce(state, (draft) => {
            console.log(action.payload);
            draft.image_url.push(action.payload);
            draft.uploading = false;
        }),
        [UPLOADING]: (state,action)=>
        produce(state,(draft)=>{
            draft.uploading = action.payload.uploading;
        }),
        [SET_PREVIEW]: (state,action)=>
        produce(state,(draft)=>{
            draft.preview = action.payload.preview;
        }),
    },
    initialState
);


//action creator export
const actionCreators = {
    uploadImageFB,
    setPreview,

};

export { actionCreators };
