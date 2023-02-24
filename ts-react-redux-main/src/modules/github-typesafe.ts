import { AxiosError } from "axios";
import { getUserProfile, GithubProfile } from "../api/github";
import { Dispatch } from "redux";
import { ActionType, createAsyncAction, createReducer, deprecated } from "typesafe-actions";
import { GithubState } from "./github/types";

const {createStandardAction} = deprecated;
//1. 액션타입 - 서버로 데이터요청, 데이터 전송 성공, 데이터 전송 에러
const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

export const getUserAsync = createAsyncAction(
    GET_USER_PROFILE,GET_USER_PROFILE_SUCCESS,GET_USER_PROFILE_ERROR
)<undefined,GithubProfile,AxiosError>();
//2. 액션생성함수 createStandardAction(액션타입)<payload타입>()
// export const getUserProfilere = 
// createStandardAction(GET_USER_PROFILE)();
// export const getUserProfileSuccess = 
// createStandardAction(GET_USER_PROFILE_SUCCESS)<GithubProfile>();
// export const getUserProfileError = 
// createStandardAction(GET_USER_PROFILE_ERROR)<AxiosError>();

//3. 액션타입, 상태타입, 초기상태
// 액션타입
// const actions = { getUserProfilere, getUserProfileSuccess, getUserProfileError }
type GithubAction = ActionType<typeof getUserAsync>

//상태타입
export type githubState = {
    userProfile: {
        loading: boolean;
        error: null | Error;
        data: null | GithubProfile
    }
}

// 초기 상태 지정
const initialState: GithubState = {
    userProfile: {
        loading: false,
        error: null,
        data: null
    }
}
//thunk 함수
export const getUserProfileThunk = (username:string):any => async(dispatch:Dispatch) => {
    dispatch({type:GET_USER_PROFILE})
    try{
        const userProfile = await getUserProfile(username);
        dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: userProfile})
    }
    catch(e){
        dispatch({ type: GET_USER_PROFILE_ERROR, payload: e})
    }
}
//4. 리듀서 생성 -state타입 action타입
//createReducer<상태타입, 액션타입>(초기상태값, {
//[액션타입]: state => 새로운 상태
//})
const github = createReducer<GithubState, GithubAction>(initialState,{
    [GET_USER_PROFILE]:state => ({ userProfile:
        {loading: true, data: null, error: null}
    }),
    [GET_USER_PROFILE_SUCCESS]: (state,action) => ({ userProfile:
        {loading: false, data: action.payload, error: null}
    }),
    [GET_USER_PROFILE_ERROR]: (state,action) => ({ userProfile:
        {loading: false, data: null, error: action.payload}
    }),
})
// function github(state:githubState=initialState,action:githubAction){
//     switch(action.type){
//                 case GET_USER_PROFILE:
//                     return{
//                         userProfile: {
//                             loading: true,
//                             error: null,
//                             data: null
//                         }
//                 }
//                 case GET_USER_PROFILE_SUCCESS:
//                     return{
//                         userProfile: {
//                             loading: false,
//                             error: null,
//                             data: action.payload
//                         }
//                     }
//                 case GET_USER_PROFILE_ERROR:
//                     return{
//                         userProfile: {
//                             loading: false,
//                             error: action.payload,
//                             data: null
//                         }
//                         }
//                 default:
//                     return state;
//     }
// }
export default github;