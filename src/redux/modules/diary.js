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


//action creatos

const setDiary = createAction(SET_DIARY, (diary_list) => ({ diary_list }));
const addDiary = createAction(ADD_DIARY, (diary_data) => ({ diary_data }));
const delDiary = createAction(DEL_DIARY, (diary_data) => ({ diary_data }));


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
        diary_data.diary_uid = "temp uid";
        console.log(diary_data);
        dispatch(addDiary(diary_data));
    }
}

const delDiarydata=(diary_data) =>{
    return async function (dispatch,getState){
        console.log(diary_data);
        dispatch(delDiary(diary_data));
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
        [DEL_DIARY]: (state, action) =>
        produce(state, (draft) => {
            console.log(action.payload.diary_data.diary_uid)
            console.log(state.list)
            console.log(state.list.filter((v,i) => v.diary_uid !== action.payload.diary_data.diary_uid))
        

            draft.list = state.list.filter((v,i) => v.diary_uid !== action.payload.diary_data.diary_uid);

        // draft.list = draft.list.filter((l) => l.id !== action.payload.post_id);

        // draft.list = state.list
        // [DEL_POST] : (state,action) => 
        // produce(state,(draft)=>
        // { draft.list = state.list.filter((v,i) => v.id===action.payload.post_id?false:true); }), 
        }),

    },
    initialState
);


//action creator export
const actionCreators = {
    getDiary,
    addDiarydata,
    delDiarydata,

};

export { actionCreators };