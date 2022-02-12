import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import moment from 'moment';

//API
import { RESP } from "../../shared/tempAPI"


//action
const SET_DIARY = "SET_DIARY";
const ADD_DIARY = "ADD_DIARY";



//action creatos

const setDiary = createAction(SET_DIARY, (diary_list) => ({ diary_list }));
const addDiary = createAction(ADD_DIARY, (diary_data) => ({ diary_data }));


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

//middleware actions
const addDiarydata=(diary_data) =>{
    return async function (dispatch,getState){
        diary_data.diary_uid = "temp uid";
        console.log(diary_data);
        dispatch(addDiary(diary_data));
    }
}

//reducer
export default handleActions(
    {
        [SET_DIARY]: (state, action) =>
        produce(state, (draft) => {
            draft.list = action.payload.diary_list;
        }),
        [ADD_DIARY]: (state, action) =>
        produce(state, (draft) => {
            draft.list.push(action.payload.diary_data);
        }),

    },
    initialState
);


//action creator export
const actionCreators = {
    getDiary,
    addDiarydata,

};

export { actionCreators };
