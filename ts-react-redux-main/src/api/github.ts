import axios from "axios";

export async function getUserProfile(username:string){
    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data;
}
export interface GithubProfile{
    "login": "jawoen",
    "id": 119985100,
    "node_id": "U_kgDOBybTzA",
    "avatar_url": "https://avatars.githubusercontent.com/u/119985100?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jawoen",
    "html_url": "https://github.com/jawoen",
    "followers_url": "https://api.github.com/users/jawoen/followers",
    "following_url": "https://api.github.com/users/jawoen/following{/other_user}",
    "gists_url": "https://api.github.com/users/jawoen/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jawoen/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jawoen/subscriptions",
    "organizations_url": "https://api.github.com/users/jawoen/orgs",
    "repos_url": "https://api.github.com/users/jawoen/repos",
    "events_url": "https://api.github.com/users/jawoen/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jawoen/received_events",
    "type": "User",
    "site_admin": false,
    "name": "까망입니다",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2022-12-07T01:26:56Z",
    "updated_at": "2023-02-06T16:05:59Z"
    }