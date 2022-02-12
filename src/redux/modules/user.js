import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//API
import { RESP } from "../../shared/tempAPI";

//cookie
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";

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
const logOut = createAction(LOG_OUT, (user) => ({ user }));
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
    }
}




//reducer
export default handleActions(
    {
        [SIGN_UP]: (state, action) =>
        produce(state, (draft) => {
        }),
        [LOG_IN]: (state, action) =>
        produce(state, (draft) => {
        }),

    },
    initialState
);


//action creator export
const actionCreators = {
    signupUser,
    loginUser,


};

export { actionCreators };
