import { AxiosError } from "axios";
import { getUserProfile, GithubProfile } from "../api/github";
import { Dispatch } from "redux";

//1. 액션타입 - 서버로 데이터요청, 데이터 전송 성공, 데이터 전송 에러
const GET_USER_PROFILE = 'github/GET_USER_PROFILE' as const;
const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS'as const;
const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR'as const;

//2. 액션생성함수
const getUserProfilere = () => ({type:GET_USER_PROFILE});
const getUserProfileSuccess = (data:GithubProfile) => 
({type: GET_USER_PROFILE_SUCCESS, payload:data})
export const getUserProfileError = (error:AxiosError) => ({ type:GET_USER_PROFILE_ERROR, payload:error})

//3. 액션타입, 상태타입, 초기상태
// 액션타입
type githubAction = ReturnType<typeof getUserProfilere>
| ReturnType<typeof getUserProfileSuccess>
| ReturnType<typeof getUserProfileError>
//상태타입
export type githubState = {
    userProfile: {
        loading: boolean;
        error: null | Error;
        data: null | GithubProfile
    }
}

// 초기 상태 지정
const initialState: githubState = {
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
function github2(state:githubState=initialState,action:githubAction){
    switch(action.type){
                case GET_USER_PROFILE:
                    return{
                        userProfile: {
                            loading: true,
                            error: null,
                            data: null
                        }
                }
                case GET_USER_PROFILE_SUCCESS:
                    return{
                        userProfile: {
                            loading: false,
                            error: null,
                            data: action.payload
                        }
                    }
                case GET_USER_PROFILE_ERROR:
                    return{
                        userProfile: {
                            loading: false,
                            error: action.payload,
                            data: null
                        }
                        }
                default:
                    return state;
    }
}
export default github2;