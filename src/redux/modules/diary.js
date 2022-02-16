import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie } from "../../shared/Cookie";
import moment from 'moment';

//API
import { RESP } from "../../shared/tempAPI"


//action
const SET_DIARY = "SET_DIARY";
const ADD_DIARY = "ADD_DIARY";
const DEL_DIARY = "DEL_DIARY";
const UPDATE_DIARY = "UPDATE_DIARY";

//action creatos

const setDiary = createAction(SET_DIARY, (diary_list) => ({ diary_list }));
const addDiary = createAction(ADD_DIARY, (diary_data) => ({ diary_data }));
const delDiary = createAction(DEL_DIARY, (diary_data) => ({ diary_data }));
const updateDiary = createAction(UPDATE_DIARY, (diary_data) => ({ diary_data}));

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

const addDiarydata=(diary_data) =>{
    return async function (dispatch,getState){
        
        dispatch(addDiary(diary_data));
    }
}

const delDiarydata=(diary_data) =>{
    return async function (dispatch,getState){
        dispatch(delDiary(diary_data));
    }
}
const updateDiarydata=(diary_data, diary_idx) =>{
    return async function (dispatch,getState){
        dispatch(delDiary(diary_data, diary_idx));
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
            console.log(state.list);
            console.log(action.payload.diary_data);
            draft.list.push(action.payload.diary_data);
        }),
        [DEL_DIARY]: (state, action) =>
        produce(state, (draft) => {
            window.alert('데이터가 삭제되었습니다');
            draft.list = state.list.filter((v,i) => v.diary_uid !== action.payload.diary_data.diary_uid);
        }),

    },
    initialState
);


//action creator export
const actionCreators = {
    getDiary,
    addDiarydata,
    delDiarydata,
    updateDiarydata,

};

export { actionCreators };