import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { useNavigate } from "react-router-dom";


//API
import { RESP } from "../../shared/tempAPI";
import instance from "../../shared/Request";

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
const setUser = createAction(SET_USER, (user , token) => ({ user, token }));
const logOut = createAction(LOG_OUT, (  ) => ({  }));


//initialState
const initialState = {
    is_login : false,
    user : {},
    token : "",
};


//middleware actions
const signupUser=(user_data) =>{
    return async function (dispatch,getState){
        
    }
}

const loginUser=(user_data,token) =>{
    return async function (dispatch,getState){
        setCookie("is_login",token);
        dispatch(setUser(user_data,token));
    }
}

const loginCheck=() =>{
    return async function (dispatch,getState){
        const Auth = getCookie("is_login");
    

        if(Auth !== undefined){

            instance.defaults.headers.common["X-AUTH-TOKEN"] = Auth; 
            instance.post('/api/user',{}).then(response=>{
                console.log(response);
                const _user = {
                user_id : response.data.username,
                nickname : response.data.nickname,
                user_profile : response.data.user_profile
                }
                dispatch(setUser(_user,Auth));
            });
        }else{
        }

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
            draft.token = action.payload.token;
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