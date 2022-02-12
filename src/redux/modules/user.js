import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//API
import { RESP } from "../../shared/tempAPI"


//action
const SIGN_UP = "SIGN_UP";
const LOG_IN = "LOG_IN";



//action creatos

const sign_up = createAction(SIGN_UP, (diary_list) => ({ diary_list }));
const get_user = createAction(LOG_IN, (diary_data) => ({ diary_data }));


//initialState
const initialState = {
    list : [...RESP.USER.list],
};


//middleware actions
const signupUser=(user_data) =>{
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


};

export { actionCreators };
