import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { storage } from "../../shared/firebase";

import {db} from "../../shared/firebase"
import {   collection, doc, query, orderBy, limit, startAfter,
    getDoc, getDocs,
    addDoc, updateDoc, deleteDoc,
    arrayUnion, arrayRemove,
    } from "firebase/firestore";

import { connectStorageEmulator, getDownloadURL, ref, uploadString } from "firebase/storage";

import moment from 'moment';

//action
const SET_POST = "SET_POST";



//action creatos

const setPost = createAction(SET_POST, (post_list,paging) => ({ post_list ,paging}));


//initialState
const initialState = {
    list : [],

};


//middleware actions
const getPostFB=(start = null, size = 3) =>{
    return async function (dispatch,getState,{history}){

    }
}



//reducer
export default handleActions(
    {
        [SET_POST]: (state, action) =>
        produce(state, (draft) => {

        }),

    },
    initialState
);


//action creator export
const actionCreators = {
    setPost,

};

export { actionCreators };
