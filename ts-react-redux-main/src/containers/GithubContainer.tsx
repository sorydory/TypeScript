import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { rootState } from '../modules';
import { profile } from 'console';
import { getUserProfileThunk } from '../modules/github-typesafe';
import GithubForm from '../components/GithubForm';
import GithubUser from '../components/GithubUser';

const GithubContainer = () => {
    const { loading, data, error } = useSelector((state:rootState)=>state.github.userProfile)
    const dispatch = useDispatch();
    const onClickUsername = (username: string )=> {
        dispatch(getUserProfileThunk(username));
    }
    return (
        <div>
            <GithubForm onSubmitUser={onClickUsername}/>
            {loading && <div>로딩중입니다.</div>}
            {error && <div>에러가 발생했습니다.</div>}
            {data && <GithubUser bio={data.bio} blog={data.blog}
            name={data.name} thumbnail={data.avatar_url}/>}
        </div>
    );
};

export default GithubContainer;