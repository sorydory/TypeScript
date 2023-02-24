import { ActionType } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
import { getUserAsync } from "../github-typesafe";

export type GithubAction = ActionType<typeof getUserAsync>

//상태타입
export type GithubState = {
    userProfile: {
        loading: boolean;
        error: null | Error;
        data: null | GithubProfile
    }
}