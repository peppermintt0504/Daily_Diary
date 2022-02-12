import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import moment from 'moment';

//API
import { RESP } from "../../shared/tempAPI"

//action
const SET_DIARY = "SET_DIARY";


//action creatos

const setDiary = createAction(SET_DIARY, (diary_list) => ({ diary_list }));


//initialState
const initialState = {
    list : [],
};


//middleware actions
const getDiary=() =>{
    return async function (dispatch,getState){
        const diary_list = RESP.DIARY.list;
        dispatch(setDiary(diary_list));
    }
}



//reducer
export default handleActions(
    {
        [SET_DIARY]: (state, action) =>
        produce(state, (draft) => {
            draft.list = action.payload.diary_list;
        }),

    },
    initialState
);


//action creator export
const actionCreators = {
    getDiary,

};

export { actionCreators };
