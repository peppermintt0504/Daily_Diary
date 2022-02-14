import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//API
import { RESP } from "../../shared/tempAPI";
import { instance } from "../../shared/Request"

//cookie
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";
import { set } from "lodash";

//action
const SIGN_UP = "SIGN_UP";
const LOG_IN = "LOG_IN";

const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";



//action creatos

const logIn = createAction(SIGN_UP, (diary_list) => ({ diary_list }));
const get_user = createAction(LOG_IN, (diary_data) => ({ diary_data }));

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (  ) => ({  }));
const getUser = createAction(GET_USER, (user) => ({ user }));


//initialState
const initialState = {
    is_login : false,
    user : {},
    list : {...RESP.USER.list},
};


//middleware actions
const signupUser=(user_data) =>{
    return async function (dispatch,getState){
        console.log("user data : ", user_data);
        
    }
}

const loginUser=(user_data) =>{
    return async function (dispatch,getState){
        console.log("user data : ", user_data);
        setCookie("is_login",user_data.uid);
        dispatch(setUser(user_data));
    }
}

const loginCheck=() =>{
    return async function (dispatch,getState){

    }
}

const logoutUser=() =>{
    return async function (dispatch,getState){
        deleteCookie("is_login");
        dispatch(logOut());
    }
}




//reducer
export default handleActions(
    {
        [SET_USER]: (state, action) =>
        produce(state, (draft) => {
            draft.is_login=true;
            draft.user = action.payload.user;
        }),
        [LOG_OUT]: (state, action) =>
        produce(state, (draft) => {
            draft.is_login=false;
            draft.user = {};
        }),

    },
    initialState
);


//action creator export
const actionCreators = {
    signupUser,
    loginUser,
    logoutUser,
    loginCheck,

};

export { actionCreators };