import { createReducer } from "typesafe-actions";
import { GET_USER_PROFILE, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_SUCCESS } from "./actions";
import { GithubAction, GithubState } from "./types";

const initialState: GithubState = {
    userProfile: {
        loading: false,
        error: null,
        data: null
    }
}
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
export default github;